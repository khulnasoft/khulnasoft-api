import { Contact } from "./models";

export const retrieve = khulnasoft.endpoint<{ response: Contact }>({
  endpoint: "GET /contacts/{contactId}",
});
