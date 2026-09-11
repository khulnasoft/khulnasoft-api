import {
  FRAMEWORKS,
  getFramework,
  type FrameworkAsset,
  type FrameworkVariant,
} from "./frameworks";

// Asset files are added independently from the catalog records.
export const FRAMEWORK_ASSETS: readonly FrameworkAsset[] = Object.freeze([]);

const assetByKey = new Map(
  FRAMEWORK_ASSETS.map((asset) => [`${asset.id}:${asset.variant}`, asset])
);

export const getFrameworkAsset = (
  id: string,
  variant: FrameworkVariant = "light"
): FrameworkAsset | undefined => {
  const framework = getFramework(id);
  if (!framework) return undefined;

  const asset = assetByKey.get(`${framework.baseId}:${variant}`);
  if (asset) return asset;

  return variant === "dark"
    ? assetByKey.get(`${framework.baseId}:light`)
    : undefined;
};

export const getFrameworksWithoutAssets = (): readonly string[] =>
  FRAMEWORKS.filter((framework) => !getFrameworkAsset(framework.id)).map(
    (framework) => framework.id
  );
