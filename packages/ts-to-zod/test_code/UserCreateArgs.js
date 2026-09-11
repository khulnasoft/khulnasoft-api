"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserArgs =
  exports.UserInclude =
  exports.UserCountOutputTypeArgs =
  exports.UserCountOutputTypeSelect =
  exports.User$notificationsArgs =
  exports.NotificationScalarFieldEnum =
  exports.NotificationWhereUniqueInput =
  exports.NotificationOrderByWithRelationInput =
  exports.NotificationInclude =
  exports.NotificationSelect =
  exports.User$commentsArgs =
  exports.CommentSelect =
  exports.PostArgs =
  exports.PostInclude =
  exports.PostCountOutputTypeArgs =
  exports.PostCountOutputTypeSelect =
  exports.Post$commentsArgs =
  exports.CommentScalarFieldEnum =
  exports.CommentWhereUniqueInput =
  exports.CommentOrderByWithRelationInput =
  exports.PostOrderByWithRelationInput =
  exports.UserOrderByWithRelationInput =
  exports.NotificationOrderByRelationAggregateInput =
  exports.CommentOrderByRelationAggregateInput =
  exports.PostOrderByRelationAggregateInput =
  exports.SortOrder =
  exports.CommentWhereInput =
  exports.PostRelationFilter =
  exports.UserWhereInput =
  exports.NotificationListRelationFilter =
  exports.NotificationWhereInput =
  exports.PostListRelationFilter =
  exports.PostWhereInput =
  exports.CommentListRelationFilter =
  exports.UserRelationFilter =
  exports.BoolNullableFilter =
  exports.NestedBoolNullableFilter =
  exports.StringNullableListFilter =
  exports.DateTimeNullableFilter =
  exports.NestedDateTimeNullableFilter =
  exports.StringNullableFilter =
  exports.NestedStringNullableFilter =
  exports.DateTimeFilter =
  exports.NestedDateTimeFilter =
  exports.StringFilter =
  exports.NestedStringFilter =
  exports.UuidFilter =
  exports.NestedUuidFilter =
  exports.QueryMode =
  exports.CommentInclude =
    void 0;
exports.UserCreateInput =
  exports.UserUncheckedCreateInput =
  exports.CommentUncheckedCreateNestedManyWithoutUserInput =
  exports.CommentCreateWithoutUserInput =
  exports.PostCreateNestedOneWithoutCommentsInput =
  exports.PostCreateOrConnectWithoutCommentsInput =
  exports.PostCreateWithoutCommentsInput =
  exports.UserCreateNestedOneWithoutPostsInput =
  exports.UserCreateOrConnectWithoutPostsInput =
  exports.UserCreateWithoutPostsInput =
  exports.CommentCreateNestedManyWithoutUserInput =
  exports.CommentCreateManyUserInputEnvelope =
  exports.CommentCreateManyUserInput =
  exports.CommentCreateOrConnectWithoutUserInput =
  exports.UserUncheckedCreateWithoutPostsInput =
  exports.PostUncheckedCreateWithoutCommentsInput =
  exports.CommentUncheckedCreateWithoutUserInput =
  exports.PostUncheckedCreateNestedManyWithoutUserInput =
  exports.PostUncheckedCreateWithoutUserInput =
  exports.CommentUncheckedCreateNestedManyWithoutPostInput =
  exports.CommentCreateWithoutPostInput =
  exports.UserCreateNestedOneWithoutCommentsInput =
  exports.UserCreateOrConnectWithoutCommentsInput =
  exports.UserWhereUniqueInput =
  exports.UserCreateWithoutCommentsInput =
  exports.NotificationCreateNestedManyWithoutUserInput =
  exports.PostCreateNestedManyWithoutUserInput =
  exports.PostCreateManyUserInputEnvelope =
  exports.PostCreateManyUserInput =
  exports.PostCreateOrConnectWithoutUserInput =
  exports.PostCreateWithoutUserInput =
  exports.CommentCreateNestedManyWithoutPostInput =
  exports.CommentCreateManyPostInputEnvelope =
  exports.CommentCreateManyPostInput =
  exports.CommentCreateOrConnectWithoutPostInput =
  exports.UserUncheckedCreateWithoutCommentsInput =
  exports.NotificationUncheckedCreateNestedManyWithoutUserInput =
  exports.NotificationCreateManyUserInputEnvelope =
  exports.NotificationCreateManyUserInput =
  exports.NotificationCreateOrConnectWithoutUserInput =
  exports.NotificationCreateWithoutUserInput =
  exports.NotificationUncheckedCreateWithoutUserInput =
  exports.CommentUncheckedCreateWithoutPostInput =
  exports.PostCreatelikedIdsInput =
  exports.UserCreatefollowingIdsInput =
  exports.UserSelect =
  exports.User$postsArgs =
  exports.PostScalarFieldEnum =
  exports.PostWhereUniqueInput =
  exports.PostSelect =
    void 0;
var zod_1 = __importDefault(require("zod"));
exports.CommentInclude = zod_1.default.object({
  user: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.UserArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
  post: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
});
exports.QueryMode = zod_1.default.object({
  default: zod_1.default.literal("default"),
  insensitive: zod_1.default.literal("insensitive"),
});
exports.NestedUuidFilter = zod_1.default.object({
  equals: zod_1.default.string().optional(),
  in: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .optional(),
  notIn: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .optional(),
  lt: zod_1.default.string().optional(),
  lte: zod_1.default.string().optional(),
  gt: zod_1.default.string().optional(),
  gte: zod_1.default.string().optional(),
  not: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.NestedUuidFilter;
      }),
    ])
    .optional(),
});
exports.UuidFilter = zod_1.default.object({
  equals: zod_1.default.string().optional(),
  in: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .optional(),
  notIn: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .optional(),
  lt: zod_1.default.string().optional(),
  lte: zod_1.default.string().optional(),
  gt: zod_1.default.string().optional(),
  gte: zod_1.default.string().optional(),
  mode: zod_1.default
    .lazy(function () {
      return exports.QueryMode;
    })
    .optional(),
  not: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.NestedUuidFilter;
      }),
    ])
    .optional(),
});
exports.NestedStringFilter = zod_1.default.object({
  equals: zod_1.default.string().optional(),
  in: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .optional(),
  notIn: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .optional(),
  lt: zod_1.default.string().optional(),
  lte: zod_1.default.string().optional(),
  gt: zod_1.default.string().optional(),
  gte: zod_1.default.string().optional(),
  contains: zod_1.default.string().optional(),
  startsWith: zod_1.default.string().optional(),
  endsWith: zod_1.default.string().optional(),
  not: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.NestedStringFilter;
      }),
    ])
    .optional(),
});
exports.StringFilter = zod_1.default.object({
  equals: zod_1.default.string().optional(),
  in: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .optional(),
  notIn: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .optional(),
  lt: zod_1.default.string().optional(),
  lte: zod_1.default.string().optional(),
  gt: zod_1.default.string().optional(),
  gte: zod_1.default.string().optional(),
  contains: zod_1.default.string().optional(),
  startsWith: zod_1.default.string().optional(),
  endsWith: zod_1.default.string().optional(),
  mode: zod_1.default
    .lazy(function () {
      return exports.QueryMode;
    })
    .optional(),
  not: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.NestedStringFilter;
      }),
    ])
    .optional(),
});
exports.NestedDateTimeFilter = zod_1.default.object({
  equals: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  in: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.union([
        zod_1.default.date(),
        zod_1.default.array(zod_1.default.date()),
      ]),
    ])
    .optional(),
  notIn: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.union([
        zod_1.default.date(),
        zod_1.default.array(zod_1.default.date()),
      ]),
    ])
    .optional(),
  lt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  lte: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  gt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  gte: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  not: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.date(),
      zod_1.default.lazy(function () {
        return exports.NestedDateTimeFilter;
      }),
    ])
    .optional(),
});
exports.DateTimeFilter = zod_1.default.object({
  equals: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  in: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.union([
        zod_1.default.date(),
        zod_1.default.array(zod_1.default.date()),
      ]),
    ])
    .optional(),
  notIn: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.union([
        zod_1.default.date(),
        zod_1.default.array(zod_1.default.date()),
      ]),
    ])
    .optional(),
  lt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  lte: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  gt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  gte: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  not: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.date(),
      zod_1.default.lazy(function () {
        return exports.NestedDateTimeFilter;
      }),
    ])
    .optional(),
});
exports.NestedStringNullableFilter = zod_1.default.object({
  equals: zod_1.default.string().nullable().optional(),
  in: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .nullable()
    .optional(),
  notIn: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .nullable()
    .optional(),
  lt: zod_1.default.string().optional(),
  lte: zod_1.default.string().optional(),
  gt: zod_1.default.string().optional(),
  gte: zod_1.default.string().optional(),
  contains: zod_1.default.string().optional(),
  startsWith: zod_1.default.string().optional(),
  endsWith: zod_1.default.string().optional(),
  not: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.NestedStringNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
});
exports.StringNullableFilter = zod_1.default.object({
  equals: zod_1.default.string().nullable().optional(),
  in: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .nullable()
    .optional(),
  notIn: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .nullable()
    .optional(),
  lt: zod_1.default.string().optional(),
  lte: zod_1.default.string().optional(),
  gt: zod_1.default.string().optional(),
  gte: zod_1.default.string().optional(),
  contains: zod_1.default.string().optional(),
  startsWith: zod_1.default.string().optional(),
  endsWith: zod_1.default.string().optional(),
  mode: zod_1.default
    .lazy(function () {
      return exports.QueryMode;
    })
    .optional(),
  not: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.NestedStringNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
});
exports.NestedDateTimeNullableFilter = zod_1.default.object({
  equals: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .nullable()
    .optional(),
  in: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.union([
        zod_1.default.date(),
        zod_1.default.array(zod_1.default.date()),
      ]),
    ])
    .nullable()
    .optional(),
  notIn: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.union([
        zod_1.default.date(),
        zod_1.default.array(zod_1.default.date()),
      ]),
    ])
    .nullable()
    .optional(),
  lt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  lte: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  gt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  gte: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  not: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.date(),
      zod_1.default.lazy(function () {
        return exports.NestedDateTimeNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
});
exports.DateTimeNullableFilter = zod_1.default.object({
  equals: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .nullable()
    .optional(),
  in: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.union([
        zod_1.default.date(),
        zod_1.default.array(zod_1.default.date()),
      ]),
    ])
    .nullable()
    .optional(),
  notIn: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.union([
        zod_1.default.date(),
        zod_1.default.array(zod_1.default.date()),
      ]),
    ])
    .nullable()
    .optional(),
  lt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  lte: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  gt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  gte: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  not: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.date(),
      zod_1.default.lazy(function () {
        return exports.NestedDateTimeNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
});
exports.StringNullableListFilter = zod_1.default.object({
  equals: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .nullable()
    .optional(),
  has: zod_1.default.string().nullable().optional(),
  hasEvery: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .optional(),
  hasSome: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.array(zod_1.default.string()),
    ])
    .optional(),
  isEmpty: zod_1.default.boolean().optional(),
});
exports.NestedBoolNullableFilter = zod_1.default.object({
  equals: zod_1.default.boolean().nullable().optional(),
  not: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.NestedBoolNullableFilter;
      }),
      zod_1.default.boolean(),
    ])
    .nullable()
    .optional(),
});
exports.BoolNullableFilter = zod_1.default.object({
  equals: zod_1.default.boolean().nullable().optional(),
  not: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.NestedBoolNullableFilter;
      }),
      zod_1.default.boolean(),
    ])
    .nullable()
    .optional(),
});
exports.UserRelationFilter = zod_1.default.object({
  is: zod_1.default
    .lazy(function () {
      return exports.UserWhereInput;
    })
    .optional(),
  isNot: zod_1.default
    .lazy(function () {
      return exports.UserWhereInput;
    })
    .optional(),
});
exports.CommentListRelationFilter = zod_1.default.object({
  every: zod_1.default
    .lazy(function () {
      return exports.CommentWhereInput;
    })
    .optional(),
  some: zod_1.default
    .lazy(function () {
      return exports.CommentWhereInput;
    })
    .optional(),
  none: zod_1.default
    .lazy(function () {
      return exports.CommentWhereInput;
    })
    .optional(),
});
exports.PostWhereInput = zod_1.default.object({
  AND: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostWhereInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.PostWhereInput;
        })
      ),
    ])
    .optional(),
  OR: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostWhereInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.PostWhereInput;
        })
      ),
    ])
    .optional(),
  NOT: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostWhereInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.PostWhereInput;
        })
      ),
    ])
    .optional(),
  id: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.UuidFilter;
      }),
    ])
    .optional(),
  body: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.StringFilter;
      }),
    ])
    .optional(),
  createdAt: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.DateTimeFilter;
      }),
      zod_1.default.date(),
    ])
    .optional(),
  updatedAt: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.DateTimeFilter;
      }),
      zod_1.default.date(),
    ])
    .optional(),
  userId: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.UuidFilter;
      }),
    ])
    .optional(),
  likedIds: zod_1.default
    .lazy(function () {
      return exports.StringNullableListFilter;
    })
    .optional(),
  image: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.StringNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
  user: zod_1.default
    .union([
      zod_1.default
        .object({
          is: zod_1.default.undefined(),
          isNot: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.lazy(function () {
            return exports.UserWhereInput;
          })
        ),
      zod_1.default
        .object({
          AND: zod_1.default.undefined(),
          OR: zod_1.default.undefined(),
          NOT: zod_1.default.undefined(),
          id: zod_1.default.undefined(),
          name: zod_1.default.undefined(),
          username: zod_1.default.undefined(),
          bio: zod_1.default.undefined(),
          email: zod_1.default.undefined(),
          emailVerified: zod_1.default.undefined(),
          image: zod_1.default.undefined(),
          coverImage: zod_1.default.undefined(),
          profileImage: zod_1.default.undefined(),
          hashedPassword: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          updatedAt: zod_1.default.undefined(),
          followingIds: zod_1.default.undefined(),
          hasNotification: zod_1.default.undefined(),
          posts: zod_1.default.undefined(),
          comments: zod_1.default.undefined(),
          notifications: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.lazy(function () {
            return exports.UserRelationFilter;
          })
        ),
    ])
    .optional(),
  comments: zod_1.default
    .lazy(function () {
      return exports.CommentListRelationFilter;
    })
    .optional(),
});
exports.PostListRelationFilter = zod_1.default.object({
  every: zod_1.default
    .lazy(function () {
      return exports.PostWhereInput;
    })
    .optional(),
  some: zod_1.default
    .lazy(function () {
      return exports.PostWhereInput;
    })
    .optional(),
  none: zod_1.default
    .lazy(function () {
      return exports.PostWhereInput;
    })
    .optional(),
});
exports.NotificationWhereInput = zod_1.default.object({
  AND: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.NotificationWhereInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.NotificationWhereInput;
        })
      ),
    ])
    .optional(),
  OR: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.NotificationWhereInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.NotificationWhereInput;
        })
      ),
    ])
    .optional(),
  NOT: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.NotificationWhereInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.NotificationWhereInput;
        })
      ),
    ])
    .optional(),
  id: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.UuidFilter;
      }),
    ])
    .optional(),
  body: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.StringFilter;
      }),
    ])
    .optional(),
  userId: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.UuidFilter;
      }),
    ])
    .optional(),
  createdAt: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.DateTimeFilter;
      }),
      zod_1.default.date(),
    ])
    .optional(),
  user: zod_1.default
    .union([
      zod_1.default
        .object({
          is: zod_1.default.undefined(),
          isNot: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.lazy(function () {
            return exports.UserWhereInput;
          })
        ),
      zod_1.default
        .object({
          AND: zod_1.default.undefined(),
          OR: zod_1.default.undefined(),
          NOT: zod_1.default.undefined(),
          id: zod_1.default.undefined(),
          name: zod_1.default.undefined(),
          username: zod_1.default.undefined(),
          bio: zod_1.default.undefined(),
          email: zod_1.default.undefined(),
          emailVerified: zod_1.default.undefined(),
          image: zod_1.default.undefined(),
          coverImage: zod_1.default.undefined(),
          profileImage: zod_1.default.undefined(),
          hashedPassword: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          updatedAt: zod_1.default.undefined(),
          followingIds: zod_1.default.undefined(),
          hasNotification: zod_1.default.undefined(),
          posts: zod_1.default.undefined(),
          comments: zod_1.default.undefined(),
          notifications: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.lazy(function () {
            return exports.UserRelationFilter;
          })
        ),
    ])
    .optional(),
});
exports.NotificationListRelationFilter = zod_1.default.object({
  every: zod_1.default
    .lazy(function () {
      return exports.NotificationWhereInput;
    })
    .optional(),
  some: zod_1.default
    .lazy(function () {
      return exports.NotificationWhereInput;
    })
    .optional(),
  none: zod_1.default
    .lazy(function () {
      return exports.NotificationWhereInput;
    })
    .optional(),
});
exports.UserWhereInput = zod_1.default.object({
  AND: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.UserWhereInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.UserWhereInput;
        })
      ),
    ])
    .optional(),
  OR: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.UserWhereInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.UserWhereInput;
        })
      ),
    ])
    .optional(),
  NOT: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.UserWhereInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.UserWhereInput;
        })
      ),
    ])
    .optional(),
  id: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.UuidFilter;
      }),
    ])
    .optional(),
  name: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.StringNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
  username: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.StringNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
  bio: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.StringNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
  email: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.StringNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
  emailVerified: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.date(),
      zod_1.default.lazy(function () {
        return exports.DateTimeNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
  image: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.StringNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
  coverImage: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.StringNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
  profileImage: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.StringNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
  hashedPassword: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.StringNullableFilter;
      }),
    ])
    .nullable()
    .optional(),
  createdAt: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.DateTimeFilter;
      }),
      zod_1.default.date(),
    ])
    .optional(),
  updatedAt: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.DateTimeFilter;
      }),
      zod_1.default.date(),
    ])
    .optional(),
  followingIds: zod_1.default
    .lazy(function () {
      return exports.StringNullableListFilter;
    })
    .optional(),
  hasNotification: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.BoolNullableFilter;
      }),
      zod_1.default.boolean(),
    ])
    .nullable()
    .optional(),
  posts: zod_1.default
    .lazy(function () {
      return exports.PostListRelationFilter;
    })
    .optional(),
  comments: zod_1.default
    .lazy(function () {
      return exports.CommentListRelationFilter;
    })
    .optional(),
  notifications: zod_1.default
    .lazy(function () {
      return exports.NotificationListRelationFilter;
    })
    .optional(),
});
exports.PostRelationFilter = zod_1.default.object({
  is: zod_1.default
    .lazy(function () {
      return exports.PostWhereInput;
    })
    .optional(),
  isNot: zod_1.default
    .lazy(function () {
      return exports.PostWhereInput;
    })
    .optional(),
});
exports.CommentWhereInput = zod_1.default.object({
  AND: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.CommentWhereInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.CommentWhereInput;
        })
      ),
    ])
    .optional(),
  OR: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.CommentWhereInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.CommentWhereInput;
        })
      ),
    ])
    .optional(),
  NOT: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.CommentWhereInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.CommentWhereInput;
        })
      ),
    ])
    .optional(),
  id: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.UuidFilter;
      }),
    ])
    .optional(),
  body: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.StringFilter;
      }),
    ])
    .optional(),
  createdAt: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.DateTimeFilter;
      }),
      zod_1.default.date(),
    ])
    .optional(),
  updatedAt: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.DateTimeFilter;
      }),
      zod_1.default.date(),
    ])
    .optional(),
  userId: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.UuidFilter;
      }),
    ])
    .optional(),
  postId: zod_1.default
    .union([
      zod_1.default.string(),
      zod_1.default.lazy(function () {
        return exports.UuidFilter;
      }),
    ])
    .optional(),
  user: zod_1.default
    .union([
      zod_1.default
        .object({
          is: zod_1.default.undefined(),
          isNot: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.lazy(function () {
            return exports.UserWhereInput;
          })
        ),
      zod_1.default
        .object({
          AND: zod_1.default.undefined(),
          OR: zod_1.default.undefined(),
          NOT: zod_1.default.undefined(),
          id: zod_1.default.undefined(),
          name: zod_1.default.undefined(),
          username: zod_1.default.undefined(),
          bio: zod_1.default.undefined(),
          email: zod_1.default.undefined(),
          emailVerified: zod_1.default.undefined(),
          image: zod_1.default.undefined(),
          coverImage: zod_1.default.undefined(),
          profileImage: zod_1.default.undefined(),
          hashedPassword: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          updatedAt: zod_1.default.undefined(),
          followingIds: zod_1.default.undefined(),
          hasNotification: zod_1.default.undefined(),
          posts: zod_1.default.undefined(),
          comments: zod_1.default.undefined(),
          notifications: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.lazy(function () {
            return exports.UserRelationFilter;
          })
        ),
    ])
    .optional(),
  post: zod_1.default
    .union([
      zod_1.default
        .object({
          is: zod_1.default.undefined(),
          isNot: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.lazy(function () {
            return exports.PostWhereInput;
          })
        ),
      zod_1.default
        .object({
          AND: zod_1.default.undefined(),
          OR: zod_1.default.undefined(),
          NOT: zod_1.default.undefined(),
          id: zod_1.default.undefined(),
          image: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          updatedAt: zod_1.default.undefined(),
          comments: zod_1.default.undefined(),
          body: zod_1.default.undefined(),
          userId: zod_1.default.undefined(),
          likedIds: zod_1.default.undefined(),
          user: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.lazy(function () {
            return exports.PostRelationFilter;
          })
        ),
    ])
    .optional(),
});
exports.SortOrder = zod_1.default.object({
  asc: zod_1.default.literal("asc"),
  desc: zod_1.default.literal("desc"),
});
exports.PostOrderByRelationAggregateInput = zod_1.default.object({
  _count: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
});
exports.CommentOrderByRelationAggregateInput = zod_1.default.object({
  _count: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
});
exports.NotificationOrderByRelationAggregateInput = zod_1.default.object({
  _count: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
});
exports.UserOrderByWithRelationInput = zod_1.default.object({
  id: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  name: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  username: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  bio: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  email: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  emailVerified: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  image: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  coverImage: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  profileImage: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  hashedPassword: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  createdAt: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  updatedAt: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  followingIds: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  hasNotification: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  posts: zod_1.default
    .lazy(function () {
      return exports.PostOrderByRelationAggregateInput;
    })
    .optional(),
  comments: zod_1.default
    .lazy(function () {
      return exports.CommentOrderByRelationAggregateInput;
    })
    .optional(),
  notifications: zod_1.default
    .lazy(function () {
      return exports.NotificationOrderByRelationAggregateInput;
    })
    .optional(),
});
exports.PostOrderByWithRelationInput = zod_1.default.object({
  id: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  body: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  createdAt: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  updatedAt: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  userId: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  likedIds: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  image: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  user: zod_1.default
    .lazy(function () {
      return exports.UserOrderByWithRelationInput;
    })
    .optional(),
  comments: zod_1.default
    .lazy(function () {
      return exports.CommentOrderByRelationAggregateInput;
    })
    .optional(),
});
exports.CommentOrderByWithRelationInput = zod_1.default.object({
  id: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  body: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  createdAt: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  updatedAt: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  userId: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  postId: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  user: zod_1.default
    .lazy(function () {
      return exports.UserOrderByWithRelationInput;
    })
    .optional(),
  post: zod_1.default
    .lazy(function () {
      return exports.PostOrderByWithRelationInput;
    })
    .optional(),
});
exports.CommentWhereUniqueInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
});
exports.CommentScalarFieldEnum = zod_1.default.object({
  id: zod_1.default.literal("id"),
  body: zod_1.default.literal("body"),
  createdAt: zod_1.default.literal("createdAt"),
  updatedAt: zod_1.default.literal("updatedAt"),
  userId: zod_1.default.literal("userId"),
  postId: zod_1.default.literal("postId"),
});
exports.Post$commentsArgs = zod_1.default.object({
  select: zod_1.default
    .lazy(function () {
      return exports.CommentSelect;
    })
    .nullable()
    .optional(),
  include: zod_1.default
    .lazy(function () {
      return exports.CommentInclude;
    })
    .nullable()
    .optional(),
  where: zod_1.default
    .lazy(function () {
      return exports.CommentWhereInput;
    })
    .optional(),
  orderBy: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.CommentOrderByWithRelationInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.CommentOrderByWithRelationInput;
        })
      ),
    ])
    .optional(),
  cursor: zod_1.default
    .lazy(function () {
      return exports.CommentWhereUniqueInput;
    })
    .optional(),
  take: zod_1.default.number().optional(),
  skip: zod_1.default.number().optional(),
  distinct: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.CommentScalarFieldEnum;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.CommentScalarFieldEnum;
        })
      ),
    ])
    .optional(),
});
exports.PostCountOutputTypeSelect = zod_1.default.object({
  comments: zod_1.default.boolean().optional(),
});
exports.PostCountOutputTypeArgs = zod_1.default.object({
  select: zod_1.default
    .lazy(function () {
      return exports.PostCountOutputTypeSelect;
    })
    .nullable()
    .optional(),
});
exports.PostInclude = zod_1.default.object({
  user: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.UserArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
  comments: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.Post$commentsArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
  _count: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostCountOutputTypeArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
});
exports.PostArgs = zod_1.default.object({
  select: zod_1.default
    .lazy(function () {
      return exports.PostSelect;
    })
    .nullable()
    .optional(),
  include: zod_1.default
    .lazy(function () {
      return exports.PostInclude;
    })
    .nullable()
    .optional(),
});
exports.CommentSelect = zod_1.default.object({
  id: zod_1.default.boolean().optional(),
  body: zod_1.default.boolean().optional(),
  createdAt: zod_1.default.boolean().optional(),
  updatedAt: zod_1.default.boolean().optional(),
  userId: zod_1.default.boolean().optional(),
  postId: zod_1.default.boolean().optional(),
  user: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.UserArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
  post: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
});
exports.User$commentsArgs = zod_1.default.object({
  select: zod_1.default
    .lazy(function () {
      return exports.CommentSelect;
    })
    .nullable()
    .optional(),
  include: zod_1.default
    .lazy(function () {
      return exports.CommentInclude;
    })
    .nullable()
    .optional(),
  where: zod_1.default
    .lazy(function () {
      return exports.CommentWhereInput;
    })
    .optional(),
  orderBy: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.CommentOrderByWithRelationInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.CommentOrderByWithRelationInput;
        })
      ),
    ])
    .optional(),
  cursor: zod_1.default
    .lazy(function () {
      return exports.CommentWhereUniqueInput;
    })
    .optional(),
  take: zod_1.default.number().optional(),
  skip: zod_1.default.number().optional(),
  distinct: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.CommentScalarFieldEnum;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.CommentScalarFieldEnum;
        })
      ),
    ])
    .optional(),
});
exports.NotificationSelect = zod_1.default.object({
  id: zod_1.default.boolean().optional(),
  body: zod_1.default.boolean().optional(),
  userId: zod_1.default.boolean().optional(),
  createdAt: zod_1.default.boolean().optional(),
  user: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.UserArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
});
exports.NotificationInclude = zod_1.default.object({
  user: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.UserArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
});
exports.NotificationOrderByWithRelationInput = zod_1.default.object({
  id: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  body: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  userId: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  createdAt: zod_1.default
    .lazy(function () {
      return exports.SortOrder;
    })
    .optional(),
  user: zod_1.default
    .lazy(function () {
      return exports.UserOrderByWithRelationInput;
    })
    .optional(),
});
exports.NotificationWhereUniqueInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
});
exports.NotificationScalarFieldEnum = zod_1.default.object({
  id: zod_1.default.literal("id"),
  body: zod_1.default.literal("body"),
  userId: zod_1.default.literal("userId"),
  createdAt: zod_1.default.literal("createdAt"),
});
exports.User$notificationsArgs = zod_1.default.object({
  select: zod_1.default
    .lazy(function () {
      return exports.NotificationSelect;
    })
    .nullable()
    .optional(),
  include: zod_1.default
    .lazy(function () {
      return exports.NotificationInclude;
    })
    .nullable()
    .optional(),
  where: zod_1.default
    .lazy(function () {
      return exports.NotificationWhereInput;
    })
    .optional(),
  orderBy: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.NotificationOrderByWithRelationInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.NotificationOrderByWithRelationInput;
        })
      ),
    ])
    .optional(),
  cursor: zod_1.default
    .lazy(function () {
      return exports.NotificationWhereUniqueInput;
    })
    .optional(),
  take: zod_1.default.number().optional(),
  skip: zod_1.default.number().optional(),
  distinct: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.NotificationScalarFieldEnum;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.NotificationScalarFieldEnum;
        })
      ),
    ])
    .optional(),
});
exports.UserCountOutputTypeSelect = zod_1.default.object({
  posts: zod_1.default.boolean().optional(),
  comments: zod_1.default.boolean().optional(),
  notifications: zod_1.default.boolean().optional(),
});
exports.UserCountOutputTypeArgs = zod_1.default.object({
  select: zod_1.default
    .lazy(function () {
      return exports.UserCountOutputTypeSelect;
    })
    .nullable()
    .optional(),
});
exports.UserInclude = zod_1.default.object({
  posts: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.User$postsArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
  comments: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.User$commentsArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
  notifications: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.User$notificationsArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
  _count: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.UserCountOutputTypeArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
});
exports.UserArgs = zod_1.default.object({
  select: zod_1.default
    .lazy(function () {
      return exports.UserSelect;
    })
    .nullable()
    .optional(),
  include: zod_1.default
    .lazy(function () {
      return exports.UserInclude;
    })
    .nullable()
    .optional(),
});
exports.PostSelect = zod_1.default.object({
  id: zod_1.default.boolean().optional(),
  body: zod_1.default.boolean().optional(),
  createdAt: zod_1.default.boolean().optional(),
  updatedAt: zod_1.default.boolean().optional(),
  userId: zod_1.default.boolean().optional(),
  likedIds: zod_1.default.boolean().optional(),
  image: zod_1.default.boolean().optional(),
  user: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.UserArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
  comments: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.Post$commentsArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
  _count: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostCountOutputTypeArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
});
exports.PostWhereUniqueInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
});
exports.PostScalarFieldEnum = zod_1.default.object({
  id: zod_1.default.literal("id"),
  body: zod_1.default.literal("body"),
  createdAt: zod_1.default.literal("createdAt"),
  updatedAt: zod_1.default.literal("updatedAt"),
  userId: zod_1.default.literal("userId"),
  likedIds: zod_1.default.literal("likedIds"),
  image: zod_1.default.literal("image"),
});
exports.User$postsArgs = zod_1.default.object({
  select: zod_1.default
    .lazy(function () {
      return exports.PostSelect;
    })
    .nullable()
    .optional(),
  include: zod_1.default
    .lazy(function () {
      return exports.PostInclude;
    })
    .nullable()
    .optional(),
  where: zod_1.default
    .lazy(function () {
      return exports.PostWhereInput;
    })
    .optional(),
  orderBy: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostOrderByWithRelationInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.PostOrderByWithRelationInput;
        })
      ),
    ])
    .optional(),
  cursor: zod_1.default
    .lazy(function () {
      return exports.PostWhereUniqueInput;
    })
    .optional(),
  take: zod_1.default.number().optional(),
  skip: zod_1.default.number().optional(),
  distinct: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostScalarFieldEnum;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.PostScalarFieldEnum;
        })
      ),
    ])
    .optional(),
});
exports.UserSelect = zod_1.default.object({
  id: zod_1.default.boolean().optional(),
  name: zod_1.default.boolean().optional(),
  username: zod_1.default.boolean().optional(),
  bio: zod_1.default.boolean().optional(),
  email: zod_1.default.boolean().optional(),
  emailVerified: zod_1.default.boolean().optional(),
  image: zod_1.default.boolean().optional(),
  coverImage: zod_1.default.boolean().optional(),
  profileImage: zod_1.default.boolean().optional(),
  hashedPassword: zod_1.default.boolean().optional(),
  createdAt: zod_1.default.boolean().optional(),
  updatedAt: zod_1.default.boolean().optional(),
  followingIds: zod_1.default.boolean().optional(),
  hasNotification: zod_1.default.boolean().optional(),
  posts: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.User$postsArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
  comments: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.User$commentsArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
  notifications: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.User$notificationsArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
  _count: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.UserCountOutputTypeArgs;
      }),
      zod_1.default.boolean(),
    ])
    .optional(),
});
exports.UserCreatefollowingIdsInput = zod_1.default.object({
  set: zod_1.default.union([
    zod_1.default.string(),
    zod_1.default.array(zod_1.default.string()),
  ]),
});
exports.PostCreatelikedIdsInput = zod_1.default.object({
  set: zod_1.default.union([
    zod_1.default.string(),
    zod_1.default.array(zod_1.default.string()),
  ]),
});
exports.CommentUncheckedCreateWithoutPostInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  userId: zod_1.default.string(),
});
exports.NotificationUncheckedCreateWithoutUserInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
});
exports.NotificationCreateWithoutUserInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
});
exports.NotificationCreateOrConnectWithoutUserInput = zod_1.default.object({
  where: zod_1.default.lazy(function () {
    return exports.NotificationWhereUniqueInput;
  }),
  create: zod_1.default.union([
    zod_1.default.object({}).and(
      zod_1.default.lazy(function () {
        return exports.NotificationUncheckedCreateWithoutUserInput;
      })
    ),
    zod_1.default.object({}).and(
      zod_1.default.lazy(function () {
        return exports.NotificationCreateWithoutUserInput;
      })
    ),
  ]),
});
exports.NotificationCreateManyUserInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
});
exports.NotificationCreateManyUserInputEnvelope = zod_1.default.object({
  data: zod_1.default.union([
    zod_1.default.lazy(function () {
      return exports.NotificationCreateManyUserInput;
    }),
    zod_1.default.array(
      zod_1.default.lazy(function () {
        return exports.NotificationCreateManyUserInput;
      })
    ),
  ]),
  skipDuplicates: zod_1.default.boolean().optional(),
});
exports.NotificationUncheckedCreateNestedManyWithoutUserInput =
  zod_1.default.object({
    create: zod_1.default
      .union([
        zod_1.default.object({}).and(
          zod_1.default.lazy(function () {
            return exports.NotificationUncheckedCreateWithoutUserInput;
          })
        ),
        zod_1.default.object({}).and(
          zod_1.default.lazy(function () {
            return exports.NotificationCreateWithoutUserInput;
          })
        ),
        zod_1.default
          .object({
            id: zod_1.default.undefined(),
            createdAt: zod_1.default.undefined(),
            body: zod_1.default.undefined(),
          })
          .and(
            zod_1.default.array(
              zod_1.default.lazy(function () {
                return exports.NotificationUncheckedCreateWithoutUserInput;
              })
            )
          ),
        zod_1.default
          .record(zod_1.default.number(), zod_1.default.undefined())
          .and(
            zod_1.default.lazy(function () {
              return exports.NotificationCreateWithoutUserInput;
            })
          ),
        zod_1.default
          .record(zod_1.default.number(), zod_1.default.undefined())
          .and(
            zod_1.default.lazy(function () {
              return exports.NotificationUncheckedCreateWithoutUserInput;
            })
          ),
        zod_1.default
          .object({
            id: zod_1.default.undefined(),
            createdAt: zod_1.default.undefined(),
            body: zod_1.default.undefined(),
          })
          .and(
            zod_1.default.array(
              zod_1.default.lazy(function () {
                return exports.NotificationCreateWithoutUserInput;
              })
            )
          ),
        zod_1.default.object({}).and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.NotificationUncheckedCreateWithoutUserInput;
            })
          )
        ),
        zod_1.default.object({}).and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.NotificationCreateWithoutUserInput;
            })
          )
        ),
      ])
      .optional(),
    connectOrCreate: zod_1.default
      .union([
        zod_1.default.lazy(function () {
          return exports.NotificationCreateOrConnectWithoutUserInput;
        }),
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.NotificationCreateOrConnectWithoutUserInput;
          })
        ),
      ])
      .optional(),
    createMany: zod_1.default
      .lazy(function () {
        return exports.NotificationCreateManyUserInputEnvelope;
      })
      .optional(),
    connect: zod_1.default
      .union([
        zod_1.default.lazy(function () {
          return exports.NotificationWhereUniqueInput;
        }),
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.NotificationWhereUniqueInput;
          })
        ),
      ])
      .optional(),
  });
exports.UserUncheckedCreateWithoutCommentsInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  name: zod_1.default.string().nullable().optional(),
  username: zod_1.default.string().nullable().optional(),
  bio: zod_1.default.string().nullable().optional(),
  email: zod_1.default.string().nullable().optional(),
  emailVerified: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .nullable()
    .optional(),
  image: zod_1.default.string().nullable().optional(),
  coverImage: zod_1.default.string().nullable().optional(),
  profileImage: zod_1.default.string().nullable().optional(),
  hashedPassword: zod_1.default.string().nullable().optional(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  followingIds: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.lazy(function () {
        return exports.UserCreatefollowingIdsInput;
      }),
    ])
    .optional(),
  hasNotification: zod_1.default.boolean().nullable().optional(),
  posts: zod_1.default
    .lazy(function () {
      return exports.PostUncheckedCreateNestedManyWithoutUserInput;
    })
    .optional(),
  notifications: zod_1.default
    .lazy(function () {
      return exports.NotificationUncheckedCreateNestedManyWithoutUserInput;
    })
    .optional(),
});
exports.CommentCreateOrConnectWithoutPostInput = zod_1.default.object({
  where: zod_1.default.lazy(function () {
    return exports.CommentWhereUniqueInput;
  }),
  create: zod_1.default.union([
    zod_1.default.object({ user: zod_1.default.undefined() }).and(
      zod_1.default.lazy(function () {
        return exports.CommentUncheckedCreateWithoutPostInput;
      })
    ),
    zod_1.default.object({ userId: zod_1.default.undefined() }).and(
      zod_1.default.lazy(function () {
        return exports.CommentCreateWithoutPostInput;
      })
    ),
  ]),
});
exports.CommentCreateManyPostInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  userId: zod_1.default.string(),
});
exports.CommentCreateManyPostInputEnvelope = zod_1.default.object({
  data: zod_1.default.union([
    zod_1.default.lazy(function () {
      return exports.CommentCreateManyPostInput;
    }),
    zod_1.default.array(
      zod_1.default.lazy(function () {
        return exports.CommentCreateManyPostInput;
      })
    ),
  ]),
  skipDuplicates: zod_1.default.boolean().optional(),
});
exports.CommentCreateNestedManyWithoutPostInput = zod_1.default.object({
  create: zod_1.default
    .union([
      zod_1.default.object({ user: zod_1.default.undefined() }).and(
        zod_1.default.lazy(function () {
          return exports.CommentUncheckedCreateWithoutPostInput;
        })
      ),
      zod_1.default.object({ userId: zod_1.default.undefined() }).and(
        zod_1.default.lazy(function () {
          return exports.CommentCreateWithoutPostInput;
        })
      ),
      zod_1.default
        .object({
          id: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          updatedAt: zod_1.default.undefined(),
          body: zod_1.default.undefined(),
          user: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.CommentUncheckedCreateWithoutPostInput;
            })
          )
        ),
      zod_1.default
        .record(zod_1.default.number(), zod_1.default.undefined())
        .and(
          zod_1.default.lazy(function () {
            return exports.CommentCreateWithoutPostInput;
          })
        ),
      zod_1.default
        .record(zod_1.default.number(), zod_1.default.undefined())
        .and(
          zod_1.default.lazy(function () {
            return exports.CommentUncheckedCreateWithoutPostInput;
          })
        ),
      zod_1.default
        .object({
          id: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          updatedAt: zod_1.default.undefined(),
          body: zod_1.default.undefined(),
          userId: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.CommentCreateWithoutPostInput;
            })
          )
        ),
      zod_1.default.object({}).and(
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.CommentUncheckedCreateWithoutPostInput;
          })
        )
      ),
      zod_1.default.object({}).and(
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.CommentCreateWithoutPostInput;
          })
        )
      ),
    ])
    .optional(),
  connectOrCreate: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.CommentCreateOrConnectWithoutPostInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.CommentCreateOrConnectWithoutPostInput;
        })
      ),
    ])
    .optional(),
  createMany: zod_1.default
    .lazy(function () {
      return exports.CommentCreateManyPostInputEnvelope;
    })
    .optional(),
  connect: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.CommentWhereUniqueInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.CommentWhereUniqueInput;
        })
      ),
    ])
    .optional(),
});
exports.PostCreateWithoutUserInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  likedIds: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.lazy(function () {
        return exports.PostCreatelikedIdsInput;
      }),
    ])
    .optional(),
  image: zod_1.default.string().nullable().optional(),
  comments: zod_1.default
    .lazy(function () {
      return exports.CommentCreateNestedManyWithoutPostInput;
    })
    .optional(),
});
exports.PostCreateOrConnectWithoutUserInput = zod_1.default.object({
  where: zod_1.default.lazy(function () {
    return exports.PostWhereUniqueInput;
  }),
  create: zod_1.default.union([
    zod_1.default.object({}).and(
      zod_1.default.lazy(function () {
        return exports.PostUncheckedCreateWithoutUserInput;
      })
    ),
    zod_1.default.object({}).and(
      zod_1.default.lazy(function () {
        return exports.PostCreateWithoutUserInput;
      })
    ),
  ]),
});
exports.PostCreateManyUserInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  likedIds: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.lazy(function () {
        return exports.PostCreatelikedIdsInput;
      }),
    ])
    .optional(),
  image: zod_1.default.string().nullable().optional(),
});
exports.PostCreateManyUserInputEnvelope = zod_1.default.object({
  data: zod_1.default.union([
    zod_1.default.lazy(function () {
      return exports.PostCreateManyUserInput;
    }),
    zod_1.default.array(
      zod_1.default.lazy(function () {
        return exports.PostCreateManyUserInput;
      })
    ),
  ]),
  skipDuplicates: zod_1.default.boolean().optional(),
});
exports.PostCreateNestedManyWithoutUserInput = zod_1.default.object({
  create: zod_1.default
    .union([
      zod_1.default.object({}).and(
        zod_1.default.lazy(function () {
          return exports.PostUncheckedCreateWithoutUserInput;
        })
      ),
      zod_1.default.object({}).and(
        zod_1.default.lazy(function () {
          return exports.PostCreateWithoutUserInput;
        })
      ),
      zod_1.default
        .object({
          id: zod_1.default.undefined(),
          image: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          updatedAt: zod_1.default.undefined(),
          comments: zod_1.default.undefined(),
          body: zod_1.default.undefined(),
          likedIds: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.PostUncheckedCreateWithoutUserInput;
            })
          )
        ),
      zod_1.default
        .record(zod_1.default.number(), zod_1.default.undefined())
        .and(
          zod_1.default.lazy(function () {
            return exports.PostCreateWithoutUserInput;
          })
        ),
      zod_1.default
        .record(zod_1.default.number(), zod_1.default.undefined())
        .and(
          zod_1.default.lazy(function () {
            return exports.PostUncheckedCreateWithoutUserInput;
          })
        ),
      zod_1.default
        .object({
          id: zod_1.default.undefined(),
          image: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          updatedAt: zod_1.default.undefined(),
          comments: zod_1.default.undefined(),
          body: zod_1.default.undefined(),
          likedIds: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.PostCreateWithoutUserInput;
            })
          )
        ),
      zod_1.default.object({}).and(
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.PostUncheckedCreateWithoutUserInput;
          })
        )
      ),
      zod_1.default.object({}).and(
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.PostCreateWithoutUserInput;
          })
        )
      ),
    ])
    .optional(),
  connectOrCreate: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostCreateOrConnectWithoutUserInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.PostCreateOrConnectWithoutUserInput;
        })
      ),
    ])
    .optional(),
  createMany: zod_1.default
    .lazy(function () {
      return exports.PostCreateManyUserInputEnvelope;
    })
    .optional(),
  connect: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostWhereUniqueInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.PostWhereUniqueInput;
        })
      ),
    ])
    .optional(),
});
exports.NotificationCreateNestedManyWithoutUserInput = zod_1.default.object({
  create: zod_1.default
    .union([
      zod_1.default.object({}).and(
        zod_1.default.lazy(function () {
          return exports.NotificationUncheckedCreateWithoutUserInput;
        })
      ),
      zod_1.default.object({}).and(
        zod_1.default.lazy(function () {
          return exports.NotificationCreateWithoutUserInput;
        })
      ),
      zod_1.default
        .object({
          id: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          body: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.NotificationUncheckedCreateWithoutUserInput;
            })
          )
        ),
      zod_1.default
        .record(zod_1.default.number(), zod_1.default.undefined())
        .and(
          zod_1.default.lazy(function () {
            return exports.NotificationCreateWithoutUserInput;
          })
        ),
      zod_1.default
        .record(zod_1.default.number(), zod_1.default.undefined())
        .and(
          zod_1.default.lazy(function () {
            return exports.NotificationUncheckedCreateWithoutUserInput;
          })
        ),
      zod_1.default
        .object({
          id: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          body: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.NotificationCreateWithoutUserInput;
            })
          )
        ),
      zod_1.default.object({}).and(
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.NotificationUncheckedCreateWithoutUserInput;
          })
        )
      ),
      zod_1.default.object({}).and(
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.NotificationCreateWithoutUserInput;
          })
        )
      ),
    ])
    .optional(),
  connectOrCreate: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.NotificationCreateOrConnectWithoutUserInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.NotificationCreateOrConnectWithoutUserInput;
        })
      ),
    ])
    .optional(),
  createMany: zod_1.default
    .lazy(function () {
      return exports.NotificationCreateManyUserInputEnvelope;
    })
    .optional(),
  connect: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.NotificationWhereUniqueInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.NotificationWhereUniqueInput;
        })
      ),
    ])
    .optional(),
});
exports.UserCreateWithoutCommentsInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  name: zod_1.default.string().nullable().optional(),
  username: zod_1.default.string().nullable().optional(),
  bio: zod_1.default.string().nullable().optional(),
  email: zod_1.default.string().nullable().optional(),
  emailVerified: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .nullable()
    .optional(),
  image: zod_1.default.string().nullable().optional(),
  coverImage: zod_1.default.string().nullable().optional(),
  profileImage: zod_1.default.string().nullable().optional(),
  hashedPassword: zod_1.default.string().nullable().optional(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  followingIds: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.lazy(function () {
        return exports.UserCreatefollowingIdsInput;
      }),
    ])
    .optional(),
  hasNotification: zod_1.default.boolean().nullable().optional(),
  posts: zod_1.default
    .lazy(function () {
      return exports.PostCreateNestedManyWithoutUserInput;
    })
    .optional(),
  notifications: zod_1.default
    .lazy(function () {
      return exports.NotificationCreateNestedManyWithoutUserInput;
    })
    .optional(),
});
exports.UserWhereUniqueInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  username: zod_1.default.string().optional(),
  email: zod_1.default.string().optional(),
});
exports.UserCreateOrConnectWithoutCommentsInput = zod_1.default.object({
  where: zod_1.default.lazy(function () {
    return exports.UserWhereUniqueInput;
  }),
  create: zod_1.default.union([
    zod_1.default.object({}).and(
      zod_1.default.lazy(function () {
        return exports.UserUncheckedCreateWithoutCommentsInput;
      })
    ),
    zod_1.default.object({}).and(
      zod_1.default.lazy(function () {
        return exports.UserCreateWithoutCommentsInput;
      })
    ),
  ]),
});
exports.UserCreateNestedOneWithoutCommentsInput = zod_1.default.object({
  create: zod_1.default
    .union([
      zod_1.default.object({}).and(
        zod_1.default.lazy(function () {
          return exports.UserUncheckedCreateWithoutCommentsInput;
        })
      ),
      zod_1.default.object({}).and(
        zod_1.default.lazy(function () {
          return exports.UserCreateWithoutCommentsInput;
        })
      ),
    ])
    .optional(),
  connectOrCreate: zod_1.default
    .lazy(function () {
      return exports.UserCreateOrConnectWithoutCommentsInput;
    })
    .optional(),
  connect: zod_1.default
    .lazy(function () {
      return exports.UserWhereUniqueInput;
    })
    .optional(),
});
exports.CommentCreateWithoutPostInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  user: zod_1.default.lazy(function () {
    return exports.UserCreateNestedOneWithoutCommentsInput;
  }),
});
exports.CommentUncheckedCreateNestedManyWithoutPostInput = zod_1.default.object(
  {
    create: zod_1.default
      .union([
        zod_1.default.object({ user: zod_1.default.undefined() }).and(
          zod_1.default.lazy(function () {
            return exports.CommentUncheckedCreateWithoutPostInput;
          })
        ),
        zod_1.default.object({ userId: zod_1.default.undefined() }).and(
          zod_1.default.lazy(function () {
            return exports.CommentCreateWithoutPostInput;
          })
        ),
        zod_1.default
          .object({
            id: zod_1.default.undefined(),
            createdAt: zod_1.default.undefined(),
            updatedAt: zod_1.default.undefined(),
            body: zod_1.default.undefined(),
            user: zod_1.default.undefined(),
          })
          .and(
            zod_1.default.array(
              zod_1.default.lazy(function () {
                return exports.CommentUncheckedCreateWithoutPostInput;
              })
            )
          ),
        zod_1.default
          .record(zod_1.default.number(), zod_1.default.undefined())
          .and(
            zod_1.default.lazy(function () {
              return exports.CommentCreateWithoutPostInput;
            })
          ),
        zod_1.default
          .record(zod_1.default.number(), zod_1.default.undefined())
          .and(
            zod_1.default.lazy(function () {
              return exports.CommentUncheckedCreateWithoutPostInput;
            })
          ),
        zod_1.default
          .object({
            id: zod_1.default.undefined(),
            createdAt: zod_1.default.undefined(),
            updatedAt: zod_1.default.undefined(),
            body: zod_1.default.undefined(),
            userId: zod_1.default.undefined(),
          })
          .and(
            zod_1.default.array(
              zod_1.default.lazy(function () {
                return exports.CommentCreateWithoutPostInput;
              })
            )
          ),
        zod_1.default.object({}).and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.CommentUncheckedCreateWithoutPostInput;
            })
          )
        ),
        zod_1.default.object({}).and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.CommentCreateWithoutPostInput;
            })
          )
        ),
      ])
      .optional(),
    connectOrCreate: zod_1.default
      .union([
        zod_1.default.lazy(function () {
          return exports.CommentCreateOrConnectWithoutPostInput;
        }),
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.CommentCreateOrConnectWithoutPostInput;
          })
        ),
      ])
      .optional(),
    createMany: zod_1.default
      .lazy(function () {
        return exports.CommentCreateManyPostInputEnvelope;
      })
      .optional(),
    connect: zod_1.default
      .union([
        zod_1.default.lazy(function () {
          return exports.CommentWhereUniqueInput;
        }),
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.CommentWhereUniqueInput;
          })
        ),
      ])
      .optional(),
  }
);
exports.PostUncheckedCreateWithoutUserInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  likedIds: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.lazy(function () {
        return exports.PostCreatelikedIdsInput;
      }),
    ])
    .optional(),
  image: zod_1.default.string().nullable().optional(),
  comments: zod_1.default
    .lazy(function () {
      return exports.CommentUncheckedCreateNestedManyWithoutPostInput;
    })
    .optional(),
});
exports.PostUncheckedCreateNestedManyWithoutUserInput = zod_1.default.object({
  create: zod_1.default
    .union([
      zod_1.default.object({}).and(
        zod_1.default.lazy(function () {
          return exports.PostUncheckedCreateWithoutUserInput;
        })
      ),
      zod_1.default.object({}).and(
        zod_1.default.lazy(function () {
          return exports.PostCreateWithoutUserInput;
        })
      ),
      zod_1.default
        .object({
          id: zod_1.default.undefined(),
          image: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          updatedAt: zod_1.default.undefined(),
          comments: zod_1.default.undefined(),
          body: zod_1.default.undefined(),
          likedIds: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.PostUncheckedCreateWithoutUserInput;
            })
          )
        ),
      zod_1.default
        .record(zod_1.default.number(), zod_1.default.undefined())
        .and(
          zod_1.default.lazy(function () {
            return exports.PostCreateWithoutUserInput;
          })
        ),
      zod_1.default
        .record(zod_1.default.number(), zod_1.default.undefined())
        .and(
          zod_1.default.lazy(function () {
            return exports.PostUncheckedCreateWithoutUserInput;
          })
        ),
      zod_1.default
        .object({
          id: zod_1.default.undefined(),
          image: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          updatedAt: zod_1.default.undefined(),
          comments: zod_1.default.undefined(),
          body: zod_1.default.undefined(),
          likedIds: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.PostCreateWithoutUserInput;
            })
          )
        ),
      zod_1.default.object({}).and(
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.PostUncheckedCreateWithoutUserInput;
          })
        )
      ),
      zod_1.default.object({}).and(
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.PostCreateWithoutUserInput;
          })
        )
      ),
    ])
    .optional(),
  connectOrCreate: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostCreateOrConnectWithoutUserInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.PostCreateOrConnectWithoutUserInput;
        })
      ),
    ])
    .optional(),
  createMany: zod_1.default
    .lazy(function () {
      return exports.PostCreateManyUserInputEnvelope;
    })
    .optional(),
  connect: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.PostWhereUniqueInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.PostWhereUniqueInput;
        })
      ),
    ])
    .optional(),
});
exports.CommentUncheckedCreateWithoutUserInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  postId: zod_1.default.string(),
});
exports.PostUncheckedCreateWithoutCommentsInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  userId: zod_1.default.string(),
  likedIds: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.lazy(function () {
        return exports.PostCreatelikedIdsInput;
      }),
    ])
    .optional(),
  image: zod_1.default.string().nullable().optional(),
});
exports.UserUncheckedCreateWithoutPostsInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  name: zod_1.default.string().nullable().optional(),
  username: zod_1.default.string().nullable().optional(),
  bio: zod_1.default.string().nullable().optional(),
  email: zod_1.default.string().nullable().optional(),
  emailVerified: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .nullable()
    .optional(),
  image: zod_1.default.string().nullable().optional(),
  coverImage: zod_1.default.string().nullable().optional(),
  profileImage: zod_1.default.string().nullable().optional(),
  hashedPassword: zod_1.default.string().nullable().optional(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  followingIds: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.lazy(function () {
        return exports.UserCreatefollowingIdsInput;
      }),
    ])
    .optional(),
  hasNotification: zod_1.default.boolean().nullable().optional(),
  comments: zod_1.default
    .lazy(function () {
      return exports.CommentUncheckedCreateNestedManyWithoutUserInput;
    })
    .optional(),
  notifications: zod_1.default
    .lazy(function () {
      return exports.NotificationUncheckedCreateNestedManyWithoutUserInput;
    })
    .optional(),
});
exports.CommentCreateOrConnectWithoutUserInput = zod_1.default.object({
  where: zod_1.default.lazy(function () {
    return exports.CommentWhereUniqueInput;
  }),
  create: zod_1.default.union([
    zod_1.default.object({ post: zod_1.default.undefined() }).and(
      zod_1.default.lazy(function () {
        return exports.CommentUncheckedCreateWithoutUserInput;
      })
    ),
    zod_1.default.object({ postId: zod_1.default.undefined() }).and(
      zod_1.default.lazy(function () {
        return exports.CommentCreateWithoutUserInput;
      })
    ),
  ]),
});
exports.CommentCreateManyUserInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  postId: zod_1.default.string(),
});
exports.CommentCreateManyUserInputEnvelope = zod_1.default.object({
  data: zod_1.default.union([
    zod_1.default.lazy(function () {
      return exports.CommentCreateManyUserInput;
    }),
    zod_1.default.array(
      zod_1.default.lazy(function () {
        return exports.CommentCreateManyUserInput;
      })
    ),
  ]),
  skipDuplicates: zod_1.default.boolean().optional(),
});
exports.CommentCreateNestedManyWithoutUserInput = zod_1.default.object({
  create: zod_1.default
    .union([
      zod_1.default.object({ post: zod_1.default.undefined() }).and(
        zod_1.default.lazy(function () {
          return exports.CommentUncheckedCreateWithoutUserInput;
        })
      ),
      zod_1.default.object({ postId: zod_1.default.undefined() }).and(
        zod_1.default.lazy(function () {
          return exports.CommentCreateWithoutUserInput;
        })
      ),
      zod_1.default
        .object({
          id: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          updatedAt: zod_1.default.undefined(),
          body: zod_1.default.undefined(),
          post: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.CommentUncheckedCreateWithoutUserInput;
            })
          )
        ),
      zod_1.default
        .record(zod_1.default.number(), zod_1.default.undefined())
        .and(
          zod_1.default.lazy(function () {
            return exports.CommentCreateWithoutUserInput;
          })
        ),
      zod_1.default
        .record(zod_1.default.number(), zod_1.default.undefined())
        .and(
          zod_1.default.lazy(function () {
            return exports.CommentUncheckedCreateWithoutUserInput;
          })
        ),
      zod_1.default
        .object({
          id: zod_1.default.undefined(),
          createdAt: zod_1.default.undefined(),
          updatedAt: zod_1.default.undefined(),
          body: zod_1.default.undefined(),
          postId: zod_1.default.undefined(),
        })
        .and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.CommentCreateWithoutUserInput;
            })
          )
        ),
      zod_1.default.object({}).and(
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.CommentUncheckedCreateWithoutUserInput;
          })
        )
      ),
      zod_1.default.object({}).and(
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.CommentCreateWithoutUserInput;
          })
        )
      ),
    ])
    .optional(),
  connectOrCreate: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.CommentCreateOrConnectWithoutUserInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.CommentCreateOrConnectWithoutUserInput;
        })
      ),
    ])
    .optional(),
  createMany: zod_1.default
    .lazy(function () {
      return exports.CommentCreateManyUserInputEnvelope;
    })
    .optional(),
  connect: zod_1.default
    .union([
      zod_1.default.lazy(function () {
        return exports.CommentWhereUniqueInput;
      }),
      zod_1.default.array(
        zod_1.default.lazy(function () {
          return exports.CommentWhereUniqueInput;
        })
      ),
    ])
    .optional(),
});
exports.UserCreateWithoutPostsInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  name: zod_1.default.string().nullable().optional(),
  username: zod_1.default.string().nullable().optional(),
  bio: zod_1.default.string().nullable().optional(),
  email: zod_1.default.string().nullable().optional(),
  emailVerified: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .nullable()
    .optional(),
  image: zod_1.default.string().nullable().optional(),
  coverImage: zod_1.default.string().nullable().optional(),
  profileImage: zod_1.default.string().nullable().optional(),
  hashedPassword: zod_1.default.string().nullable().optional(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  followingIds: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.lazy(function () {
        return exports.UserCreatefollowingIdsInput;
      }),
    ])
    .optional(),
  hasNotification: zod_1.default.boolean().nullable().optional(),
  comments: zod_1.default
    .lazy(function () {
      return exports.CommentCreateNestedManyWithoutUserInput;
    })
    .optional(),
  notifications: zod_1.default
    .lazy(function () {
      return exports.NotificationCreateNestedManyWithoutUserInput;
    })
    .optional(),
});
exports.UserCreateOrConnectWithoutPostsInput = zod_1.default.object({
  where: zod_1.default.lazy(function () {
    return exports.UserWhereUniqueInput;
  }),
  create: zod_1.default.union([
    zod_1.default.object({}).and(
      zod_1.default.lazy(function () {
        return exports.UserUncheckedCreateWithoutPostsInput;
      })
    ),
    zod_1.default.object({}).and(
      zod_1.default.lazy(function () {
        return exports.UserCreateWithoutPostsInput;
      })
    ),
  ]),
});
exports.UserCreateNestedOneWithoutPostsInput = zod_1.default.object({
  create: zod_1.default
    .union([
      zod_1.default.object({}).and(
        zod_1.default.lazy(function () {
          return exports.UserUncheckedCreateWithoutPostsInput;
        })
      ),
      zod_1.default.object({}).and(
        zod_1.default.lazy(function () {
          return exports.UserCreateWithoutPostsInput;
        })
      ),
    ])
    .optional(),
  connectOrCreate: zod_1.default
    .lazy(function () {
      return exports.UserCreateOrConnectWithoutPostsInput;
    })
    .optional(),
  connect: zod_1.default
    .lazy(function () {
      return exports.UserWhereUniqueInput;
    })
    .optional(),
});
exports.PostCreateWithoutCommentsInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  likedIds: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.lazy(function () {
        return exports.PostCreatelikedIdsInput;
      }),
    ])
    .optional(),
  image: zod_1.default.string().nullable().optional(),
  user: zod_1.default.lazy(function () {
    return exports.UserCreateNestedOneWithoutPostsInput;
  }),
});
exports.PostCreateOrConnectWithoutCommentsInput = zod_1.default.object({
  where: zod_1.default.lazy(function () {
    return exports.PostWhereUniqueInput;
  }),
  create: zod_1.default.union([
    zod_1.default.object({ user: zod_1.default.undefined() }).and(
      zod_1.default.lazy(function () {
        return exports.PostUncheckedCreateWithoutCommentsInput;
      })
    ),
    zod_1.default.object({ userId: zod_1.default.undefined() }).and(
      zod_1.default.lazy(function () {
        return exports.PostCreateWithoutCommentsInput;
      })
    ),
  ]),
});
exports.PostCreateNestedOneWithoutCommentsInput = zod_1.default.object({
  create: zod_1.default
    .union([
      zod_1.default.object({ user: zod_1.default.undefined() }).and(
        zod_1.default.lazy(function () {
          return exports.PostUncheckedCreateWithoutCommentsInput;
        })
      ),
      zod_1.default.object({ userId: zod_1.default.undefined() }).and(
        zod_1.default.lazy(function () {
          return exports.PostCreateWithoutCommentsInput;
        })
      ),
    ])
    .optional(),
  connectOrCreate: zod_1.default
    .lazy(function () {
      return exports.PostCreateOrConnectWithoutCommentsInput;
    })
    .optional(),
  connect: zod_1.default
    .lazy(function () {
      return exports.PostWhereUniqueInput;
    })
    .optional(),
});
exports.CommentCreateWithoutUserInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  body: zod_1.default.string(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  post: zod_1.default.lazy(function () {
    return exports.PostCreateNestedOneWithoutCommentsInput;
  }),
});
exports.CommentUncheckedCreateNestedManyWithoutUserInput = zod_1.default.object(
  {
    create: zod_1.default
      .union([
        zod_1.default.object({ post: zod_1.default.undefined() }).and(
          zod_1.default.lazy(function () {
            return exports.CommentUncheckedCreateWithoutUserInput;
          })
        ),
        zod_1.default.object({ postId: zod_1.default.undefined() }).and(
          zod_1.default.lazy(function () {
            return exports.CommentCreateWithoutUserInput;
          })
        ),
        zod_1.default
          .object({
            id: zod_1.default.undefined(),
            createdAt: zod_1.default.undefined(),
            updatedAt: zod_1.default.undefined(),
            body: zod_1.default.undefined(),
            post: zod_1.default.undefined(),
          })
          .and(
            zod_1.default.array(
              zod_1.default.lazy(function () {
                return exports.CommentUncheckedCreateWithoutUserInput;
              })
            )
          ),
        zod_1.default
          .record(zod_1.default.number(), zod_1.default.undefined())
          .and(
            zod_1.default.lazy(function () {
              return exports.CommentCreateWithoutUserInput;
            })
          ),
        zod_1.default
          .record(zod_1.default.number(), zod_1.default.undefined())
          .and(
            zod_1.default.lazy(function () {
              return exports.CommentUncheckedCreateWithoutUserInput;
            })
          ),
        zod_1.default
          .object({
            id: zod_1.default.undefined(),
            createdAt: zod_1.default.undefined(),
            updatedAt: zod_1.default.undefined(),
            body: zod_1.default.undefined(),
            postId: zod_1.default.undefined(),
          })
          .and(
            zod_1.default.array(
              zod_1.default.lazy(function () {
                return exports.CommentCreateWithoutUserInput;
              })
            )
          ),
        zod_1.default.object({}).and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.CommentUncheckedCreateWithoutUserInput;
            })
          )
        ),
        zod_1.default.object({}).and(
          zod_1.default.array(
            zod_1.default.lazy(function () {
              return exports.CommentCreateWithoutUserInput;
            })
          )
        ),
      ])
      .optional(),
    connectOrCreate: zod_1.default
      .union([
        zod_1.default.lazy(function () {
          return exports.CommentCreateOrConnectWithoutUserInput;
        }),
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.CommentCreateOrConnectWithoutUserInput;
          })
        ),
      ])
      .optional(),
    createMany: zod_1.default
      .lazy(function () {
        return exports.CommentCreateManyUserInputEnvelope;
      })
      .optional(),
    connect: zod_1.default
      .union([
        zod_1.default.lazy(function () {
          return exports.CommentWhereUniqueInput;
        }),
        zod_1.default.array(
          zod_1.default.lazy(function () {
            return exports.CommentWhereUniqueInput;
          })
        ),
      ])
      .optional(),
  }
);
exports.UserUncheckedCreateInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  name: zod_1.default.string().nullable().optional(),
  username: zod_1.default.string().nullable().optional(),
  bio: zod_1.default.string().nullable().optional(),
  email: zod_1.default.string().nullable().optional(),
  emailVerified: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .nullable()
    .optional(),
  image: zod_1.default.string().nullable().optional(),
  coverImage: zod_1.default.string().nullable().optional(),
  profileImage: zod_1.default.string().nullable().optional(),
  hashedPassword: zod_1.default.string().nullable().optional(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  followingIds: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.lazy(function () {
        return exports.UserCreatefollowingIdsInput;
      }),
    ])
    .optional(),
  hasNotification: zod_1.default.boolean().nullable().optional(),
  posts: zod_1.default
    .lazy(function () {
      return exports.PostUncheckedCreateNestedManyWithoutUserInput;
    })
    .optional(),
  comments: zod_1.default
    .lazy(function () {
      return exports.CommentUncheckedCreateNestedManyWithoutUserInput;
    })
    .optional(),
  notifications: zod_1.default
    .lazy(function () {
      return exports.NotificationUncheckedCreateNestedManyWithoutUserInput;
    })
    .optional(),
});
exports.UserCreateInput = zod_1.default.object({
  id: zod_1.default.string().optional(),
  name: zod_1.default.string().nullable().optional(),
  username: zod_1.default.string().nullable().optional(),
  bio: zod_1.default.string().nullable().optional(),
  email: zod_1.default.string().nullable().optional(),
  emailVerified: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .nullable()
    .optional(),
  image: zod_1.default.string().nullable().optional(),
  coverImage: zod_1.default.string().nullable().optional(),
  profileImage: zod_1.default.string().nullable().optional(),
  hashedPassword: zod_1.default.string().nullable().optional(),
  createdAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  updatedAt: zod_1.default
    .union([zod_1.default.string(), zod_1.default.date()])
    .optional(),
  followingIds: zod_1.default
    .union([
      zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.array(zod_1.default.string()),
      ]),
      zod_1.default.lazy(function () {
        return exports.UserCreatefollowingIdsInput;
      }),
    ])
    .optional(),
  hasNotification: zod_1.default.boolean().nullable().optional(),
  posts: zod_1.default
    .lazy(function () {
      return exports.PostCreateNestedManyWithoutUserInput;
    })
    .optional(),
  comments: zod_1.default
    .lazy(function () {
      return exports.CommentCreateNestedManyWithoutUserInput;
    })
    .optional(),
  notifications: zod_1.default
    .lazy(function () {
      return exports.NotificationCreateNestedManyWithoutUserInput;
    })
    .optional(),
});
var UserCreateArgs = zod_1.default.object({
  select: zod_1.default
    .lazy(function () {
      return exports.UserSelect;
    })
    .nullable()
    .optional(),
  include: zod_1.default
    .lazy(function () {
      return exports.UserInclude;
    })
    .nullable()
    .optional(),
  data: zod_1.default.union([
    zod_1.default.object({}).and(
      zod_1.default.lazy(function () {
        return exports.UserUncheckedCreateInput;
      })
    ),
    zod_1.default.object({}).and(
      zod_1.default.lazy(function () {
        return exports.UserCreateInput;
      })
    ),
  ]),
});
// works!!!
console.log(
  UserCreateArgs.parse({
    data: {
      id: "foo",
      name: "dude",
      posts: {
        create: {
          body: "blah",
        },
      },
    },
  })
);
// doesn't work because the way XOR is implemented relies
// on the fact that Array<whatever> extends object; but
// z.object() doesn't accept an array
console.log(
  UserCreateArgs.parse({
    data: {
      id: "foo",
      name: "blah",
      posts: {
        create: [
          {
            body: "blah",
          },
        ],
      },
    },
  })
);
