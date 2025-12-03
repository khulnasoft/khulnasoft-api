import { Khulnasoft, z } from "khulnasoft";

const khulnasoft = new Khulnasoft({ plugins: {} });

const colorEnum = {
  red: "red",
  blue: "blue",
  black: "black",
  white: "white",
};
export type Color = keyof typeof colorEnum;
export const color = z.nativeEnum(colorEnum);

const cat = z.object({
  name: z.string(),
  color: color,
});

const catPath = z.path({
  catName: z.string(),
});

const createCatBody = z.body({
  name: z.string().trim(),
  color: color,
});

const CatQuery = z.object({
  color: color,
});

const listCats = khulnasoft.endpoint({
  endpoint: "GET /api/cats",
  response: cat.array(),
  query: CatQuery,
  handler: async (params, _context) => {
    const cats = [
      { name: "Shiro", color: "black" },
      { name: "baby!", color: "black" },
      { name: "baby!", color: "white" },
      { name: "baby!", color: "red" },
    ];

    if (params.color) {
      return cats.filter((cat) => cat.color === params.color);
    }

    return cats;
  },
});

const createCat = khulnasoft.endpoint({
  endpoint: "POST /api/cats",
  body: createCatBody,
  response: cat,
  handler: async (params, _context) => {
    return { name: params.name, color: params.color };
  },
});

const retrieveCat = khulnasoft.endpoint({
  endpoint: "GET /api/cats/{catName}",
  path: catPath,
  response: cat,
  handler: async (params, _context) => {
    return { name: params.catName, color: "black" };
  },
});

const updateCat = khulnasoft.endpoint({
  endpoint: "PATCH /api/cats/{catName}",
  path: catPath,
  body: createCatBody.partial(),
  response: cat,
  handler: async (params, _context) => {
    return { name: params.catName, color: "black" };
  },
});

const retrieveLitter = khulnasoft.endpoint({
  endpoint: "GET /api/cats/{catName}/litter",
  path: catPath,
  response: cat.array(),
  handler: async (_params, _context) => {
    return [{ name: "baby!", color: "black" }];
  },
});

export const cats = khulnasoft.resource({
  summary: "Cats",
  actions: {
    list: listCats,
    create: createCat,
    update: updateCat,
    retrieve: retrieveCat,
    retrieveLitter,
  },
});

export const catApi = khulnasoft.api({
  basePath: "/api",
  resources: {
    cats,
  },
});
