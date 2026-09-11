"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var CommentItem_1 = __importDefault(require("./CommentItem"));
var CommentFeed = function (_a) {
  var _b = _a.comments,
    comments = _b === void 0 ? [] : _b;
  return (
    <>
      {comments.map(function (comment) {
        return <CommentItem_1.default key={comment.id} data={comment} />;
      })}
    </>
  );
};
exports.default = CommentFeed;
