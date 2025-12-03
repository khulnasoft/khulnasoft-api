import { Order } from "./models";

export const list = khulnasoft.endpoint<{ response: Order[] }>({
  endpoint: "GET /orders",
});
