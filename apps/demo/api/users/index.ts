import { khulnasoft } from "../../libs/khulnasoft";
import { list } from "./list";
import { retrieve } from "./retrieve";
import { User, UserSelection } from "./models";
import { Notification, NotificationSelection } from "../notifications/models";

export const users = khulnasoft.resource({
  summary: "Users",
  internal: false,
  models: {
    User,
    UserSelection,
    Notification,
    NotificationSelection,
  },
  actions: {
    list,
    retrieve,
  },
});
