export type RuntimeAdapterContext = {
  readonly componentName: string;
  readonly props: Record<string, unknown>;
  readonly emit: (event: string, payload?: unknown) => void;
};

export interface FrameworkRuntimeAdapter {
  readonly target: string;
  setup(context: RuntimeAdapterContext): Record<string, unknown>;
}

export function createRuntimeAdapter(
  target: string,
  setupFn: (ctx: RuntimeAdapterContext) => Record<string, unknown>
): FrameworkRuntimeAdapter {
  return {
    target,
    setup(context: RuntimeAdapterContext) {
      return setupFn(context);
    },
  };
}
