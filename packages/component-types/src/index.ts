export type PropDefinition = {
  readonly name: string;
  readonly type: string;
  readonly required?: boolean;
  readonly defaultValue?: unknown;
};

export type StateDefinition = {
  readonly name: string;
  readonly type: string;
  readonly initialValue: unknown;
  readonly signal?: boolean;
};

export type EventDefinition = {
  readonly name: string;
  readonly payloadType?: string;
};

export type SlotDefinition = {
  readonly name: string;
  readonly fallback?: boolean;
};

export type EffectDefinition = {
  readonly dependencies?: readonly string[];
  readonly body: string;
};

export type AsyncDataLoadingDefinition = {
  readonly queryName: string;
  readonly endpointRef: string;
  readonly options?: Record<string, unknown>;
};

export type ConditionalNode = {
  readonly kind: "conditional";
  readonly test: string;
  readonly consequent: readonly ComponentNode[];
  readonly alternate?: readonly ComponentNode[];
};

export type ForNode = {
  readonly kind: "for";
  readonly each: string;
  readonly as: string;
  readonly index?: string;
  readonly body: readonly ComponentNode[];
};

export type ElementNode = {
  readonly kind: "element";
  readonly tag: string;
  readonly props?: Record<string, string>;
  readonly children?: readonly ComponentNode[];
};

export type TextNode = {
  readonly kind: "text";
  readonly content: string;
};

export type ComponentNode = ConditionalNode | ForNode | ElementNode | TextNode;

export type StylingDefinition = {
  readonly scoped?: boolean;
  readonly css?: string;
  readonly classes?: Record<string, string>;
};

export type AccessibilityMetadata = {
  readonly ariaRole?: string;
  readonly ariaLabels?: Record<string, string>;
};

export type RenderingBehavior = {
  readonly ssr?: boolean;
  readonly clientOnly?: boolean;
  readonly hydration?: "lazy" | "eager" | "none";
};

export type ComponentContract = {
  readonly name: string;
  readonly props: readonly PropDefinition[];
  readonly state: readonly StateDefinition[];
  readonly events: readonly EventDefinition[];
  readonly slots: readonly SlotDefinition[];
  readonly effects: readonly EffectDefinition[];
  readonly asyncLoading: readonly AsyncDataLoadingDefinition[];
  readonly template: readonly ComponentNode[];
  readonly styling?: StylingDefinition;
  readonly accessibility?: AccessibilityMetadata;
  readonly rendering?: RenderingBehavior;
  readonly unsupportedFeatures?: readonly string[];
};
