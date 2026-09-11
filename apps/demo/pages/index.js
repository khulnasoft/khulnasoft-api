"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var Header_1 = __importDefault(require("../components/Header"));
var Form_1 = __importDefault(require("../components/Form"));
var InfinitePostFeed_1 = __importDefault(
  require("../components/posts/InfinitePostFeed")
);
function Home() {
  return (
    <>
      <Header_1.default label="Home" />
      <Form_1.default placeholder="What's happening?" />
      <InfinitePostFeed_1.default />
    </>
  );
}
