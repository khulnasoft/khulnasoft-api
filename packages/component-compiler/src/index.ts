import {
  ComponentContract,
  ComponentNode,
  PropDefinition,
  StateDefinition,
  ComponentNode as NodeType,
} from "../../component-types/src";

export type CompilationTarget = "react" | "vue";

export type CompilationResult = {
  readonly code: string;
  readonly diagnostics: readonly string[];
  readonly sourceMap?: string;
};

export class ComponentCompiler {
  constructor(private contract: ComponentContract) {}

  public validate(): readonly string[] {
    const diagnostics: string[] = [];
    if (!this.contract.name) {
      diagnostics.push("Component contract missing name.");
    }
    if (
      this.contract.unsupportedFeatures &&
      this.contract.unsupportedFeatures.length > 0
    ) {
      diagnostics.push(
        `Unsupported features detected: ${this.contract.unsupportedFeatures.join(
          ", "
        )}`
      );
    }
    return diagnostics;
  }

  public compile(target: CompilationTarget): CompilationResult {
    const diagnostics = [...this.validate()];
    let code = "";

    switch (target) {
      case "react":
        code = this.compileReact();
        break;
      case "vue":
        code = this.compileVue();
        break;
      default:
        diagnostics.push(`Unknown compilation target: ${target}`);
        code = `// Unknown target`;
        break;
    }

    return { code, diagnostics };
  }

  private compileNode(node: ComponentNode): string {
    switch (node.kind) {
      case "text":
        return node.content;
      case "element": {
        const propsStr = node.props
          ? Object.entries(node.props)
              .map(([k, v]: [string, any]) => ` ${k}={${v}}`)
              .join("")
          : "";
        const childrenStr = node.children
          ? node.children.map((c: NodeType) => this.compileNode(c)).join("")
          : "";
        return `<${node.tag}${propsStr}>${childrenStr}</${node.tag}>`;
      }
      case "conditional": {
        const consequentStr = node.consequent
          .map((c: NodeType) => this.compileNode(c))
          .join("");
        const alternateStr = node.alternate
          ? node.alternate.map((c: NodeType) => this.compileNode(c)).join("")
          : "null";
        return `{(${node.test}) ? (${consequentStr}) : (${alternateStr})}`;
      }
      case "for": {
        const bodyStr = node.body
          .map((c: NodeType) => this.compileNode(c))
          .join("");
        return `{(${node.each}).map((${node.as}${
          node.index ? `, ${node.index}` : ""
        }) => (${bodyStr}))}`;
      }
      default:
        return "";
    }
  }

  private compileReact(): string {
    const { name, props, state, template } = this.contract;
    const propsType =
      props.length > 0
        ? `type ${name}Props = { ${props
            .map(
              (p: PropDefinition) =>
                `${p.name}${p.required ? "" : "?"}: ${p.type};`
            )
            .join(" ")} };`
        : "";
    const propsParam = props.length > 0 ? `props: ${name}Props` : "";

    const stateHooks = state
      .map(
        (s: StateDefinition) =>
          `const [${s.name}, set${
            s.name.charAt(0).toUpperCase() + s.name.slice(1)
          }] = useState(${JSON.stringify(s.initialValue)});`
      )
      .join("\n  ");

    const templateCode = template
      .map((n: NodeType) => this.compileNode(n))
      .join("\n    ");

    return `import React, { useState } from 'react';\n\n${propsType}\n\nexport function ${name}(${propsParam}) {\n  ${stateHooks}\n\n  return (\n    <>\n      ${templateCode}\n    </>\n  );\n}\n`;
  }

  private compileVue(): string {
    const { name, props, state, template } = this.contract;
    const propsDef =
      props.length > 0
        ? `const props = defineProps<{ ${props
            .map(
              (p: PropDefinition) =>
                `${p.name}${p.required ? "" : "?"}: ${p.type};`
            )
            .join(" ")} }>();`
        : "";
    const stateDefs = state
      .map(
        (s: StateDefinition) =>
          `const ${s.name} = ref(${JSON.stringify(s.initialValue)});`
      )
      .join("\n  ");

    const templateCode = template
      .map((n: NodeType) => this.compileNode(n))
      .join("\n    ");

    return `<script setup lang="ts">\nimport { ref } from 'vue';\n\n${propsDef}\n${stateDefs}\n</script>\n\n<template>\n  <div>\n    ${templateCode}\n  </div>\n</template>\n`;
  }
}
