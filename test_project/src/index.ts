import { z, Khulnasoft } from "khulnasoft";
import { TestEnumAdditional } from "./additional";
const khulnasoft = new Khulnasoft({
  plugins: {},
});
import { EnumTest as EnumTestSchema } from "../.khulnasoft-codegen/src/index";
import { TestEnumAdditional as TestEnumAdditionalSchema } from "../.khulnasoft-codegen/src/additional";

export enum EnumTest {
  A,
  B,
  C,
}

export class X {}

// khulnasoft.codegenSchema<X>(__class_X);

// khulnasoft.codegenSchema<ExternalInterface>(__symbol_ExternalInterface);

export class Test {}

// khulnasoft.codegenSchema<Test>(__class_Test);

type BadType = {
  a: string;
  b: [...string[], number];
};

type Mapped = Partial<{ a: string }>;

// khulnasoft.codegenSchema<Partial<{a: string}>>(z.object({ a: z.string().optional() }));

type InThisFile = {
  id: string;
};

khulnasoft.codegenSchema<{ nested: EnumTest; nested2: TestEnumAdditional }>(
  z.object({
    nested: z.lazy(() => EnumTestSchema),
    nested2: z.lazy(() => TestEnumAdditionalSchema),
  }),
);

// khulnasoft.endpoint({
//   endpoint: "GET /users",
//   response: khulnasoft.codegenSchema<InThisFile>(__symbol_InThisFile),
//   handler: (request, ctx) => {
//     throw new Error("dummy");
//   },
// });
