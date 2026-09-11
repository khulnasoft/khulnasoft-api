import * as ReactQuery from "./react-query";

export type ExtensionContext = {
  readonly queryFn: () => Promise<any>;
  readonly queryKey: string[];
};

export type ExtensionMethods = Record<string, (...args: any[]) => any>;

export type ClientExtension = {
  readonly name: string;
  configure(context: ExtensionContext): ExtensionMethods;
};

export type ExtensionConfig = {
  [name: string]: any;
};

type Extensions = keyof ExtensionConfig;

export type GetExtensions<
  Extensions extends ExtensionConfig,
  Input,
  _Query,
  Output
> = keyof Extensions extends "reactQuery"
  ? ReactQuery.MakeExtension<Input, Output>
  : Record<string, any>;

function configureMethods(
  config: ExtensionConfig,
  queryFn: () => Promise<any>,
  queryKey: string[]
): {
  [ext in string]: Record<string, (...args: any[]) => any>;
} {
  const result: Record<string, Record<string, (...args: any[]) => any>> = {};
  const seen = new Set<string>();

  for (const name in config) {
    if (seen.has(name)) {
      throw new Error(`Duplicate extension registered: ${name}`);
    }
    seen.add(name);

    const ext = config[name];
    if (ext && typeof ext.configure === "function") {
      result[name] = ext.configure({ queryFn, queryKey });
    } else if (name === "reactQuery") {
      result[name] = ReactQuery.configureMethods(
        config["reactQuery"],
        queryFn,
        queryKey
      );
    } else {
      throw new Error(`Incompatible or invalid extension: ${name}`);
    }
  }

  return result;
}

export function getExtensionHandler(
  config: ExtensionConfig,
  action: string,
  queryFn: () => Promise<any>,
  queryKey: string[]
): ((...args: any[]) => any) | undefined {
  const configured = configureMethods(config, queryFn, queryKey);
  for (const extension in configured) {
    const extensionMethods = configured[extension];
    if (action in extensionMethods) {
      return extensionMethods[action];
    }
  }
}
