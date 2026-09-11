import { ComponentContract } from "@khulnasoft-api/component-types";
import { ComponentCompiler } from "@khulnasoft-api/component-compiler";

export const standardTestContract: ComponentContract = {
  name: "UserProfileCard",
  props: [
    { name: "userId", type: "string", required: true },
    { name: "title", type: "string", defaultValue: "User Profile" },
  ],
  state: [
    { name: "isEditing", type: "boolean", initialValue: false },
    { name: "bio", type: "string", initialValue: "Hello World" },
  ],
  events: [{ name: "update", payloadType: "string" }],
  slots: [{ name: "default" }],
  effects: [{ body: "console.log('Mounted userId:', props.userId)" }],
  asyncLoading: [{ queryName: "userQuery", endpointRef: "getUserById" }],
  template: [
    {
      kind: "element",
      tag: "div",
      props: { className: "'user-card'" },
      children: [
        { kind: "text", content: "TITLE" },
        {
          kind: "conditional",
          test: "isEditing",
          consequent: [
            { kind: "element", tag: "input", props: { value: "bio" } },
          ],
          alternate: [
            {
              kind: "element",
              tag: "p",
              children: [{ kind: "text", content: "bio" }],
            },
          ],
        },
      ],
    },
  ],
};

export function compileTestComponent(
  target: "react" | "vue" | "svelte" | "solid" | "angular" | "qwik" | "alpine"
) {
  const compiler = new ComponentCompiler(standardTestContract);
  return compiler.compile(target);
}
