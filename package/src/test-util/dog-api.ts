import { Khulnasoft, z } from "khulnasoft";

const khulnasoft = new Khulnasoft({ plugins: {} });

const dog = z.object({
  name: z.string(),
  color: z.string(),
});

const dogPath = z.path({
  dogName: z.string(),
});

const createDogBody = z.body({
  name: z.string().trim(),
  color: z.string().trim(),
});

const listDogs = khulnasoft.endpoint({
  endpoint: "GET /api/dogs",
  response: dog.array(),
  handler: async (_params, _context) => {
    return [
      { name: "Shiro", color: "black" },
      { name: "baby!", color: "black" },
    ];
  },
});

const createDog = khulnasoft.endpoint({
  endpoint: "POST /api/dogs",
  body: createDogBody,
  response: dog,
  handler: async (params, _context) => {
    return { name: params.name, color: params.color };
  },
});

const retrieveDog = khulnasoft.endpoint({
  endpoint: "GET /api/dogs/{dogName}",
  path: dogPath,
  response: dog,
  handler: async (params, _context) => {
    return { name: params.dogName, color: "black" };
  },
});

const updateDog = khulnasoft.endpoint({
  endpoint: "PATCH /api/dogs/{dogName}",
  path: dogPath,
  body: createDogBody.partial(),
  response: dog,
  handler: async (params, _context) => {
    return { name: params.dogName, color: "black" };
  },
});

const retrieveLitter = khulnasoft.endpoint({
  endpoint: "GET /api/dogs/{dogName}/litter",
  path: dogPath,
  response: dog.array(),
  handler: async (_params, _context) => {
    return [{ name: "baby!", color: "black" }];
  },
});

export const dogs = khulnasoft.resource({
  summary: "Dogs",
  actions: {
    list: listDogs,
    create: createDog,
    retrieve: retrieveDog,
    update: updateDog,
    retrieveLitter,
  },
});
