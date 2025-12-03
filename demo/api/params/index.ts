import { khulnasoft } from "../../libs/khulnasoft";
import { retrieve } from "./retrieve";

export const params = khulnasoft.resource({
  summary: "Param parsing tests",
  // internal: true,
  actions: {
    retrieve,
  },
});
