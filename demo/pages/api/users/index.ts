import { users } from "../../../api/users";
import { khulnasoftNextPageRoute } from "@khulnasoft-api/next";

export default khulnasoftNextPageRoute(users.actions.list);
