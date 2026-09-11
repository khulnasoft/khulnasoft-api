import { User, UserSelection } from "../users/models";
import { Comment, CommentSelection } from "../comments/models";
import prisma from "../../libs/prismadb";
import { khulnasoft } from "../../libs/khulnasoft";
import { z } from "khulnasoft";
import { PrismaModel, PrismaModelLoader } from "@khulnasoft-api/prisma";
import { PostResponse as PostResponseSchema } from "../../.khulnasoft-codegen/api/posts/models";
import { Post as RawPrismaPost } from "@prisma/client";

export const IncludableUserSchema = z.lazy(() => User).includable();
export const SelectableUserSchema = z.lazy(() => UserSelection).selectable();
export const IncludableCommentsSchema = z
  .array(z.lazy(() => Comment))
  .includable();
export const IncludableCommentsFieldSchema = z
  .array(z.lazy(() => CommentSelection))
  .selectable();

type PostProps = {
  id: z.UUID;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  userId: z.UUID;
  likedIds: z.UUID[];
  image?: string | null;
  user: z.ZodSchema<{ schema: typeof IncludableUserSchema }>;
  user_fields: z.ZodSchema<{ schema: typeof SelectableUserSchema }>;
  comments: z.ZodSchema<{ schema: typeof IncludableCommentsSchema }>;
  comments_fields: z.ZodSchema<{
    schema: typeof IncludableCommentsFieldSchema;
  }>;
};

export class PostResponse extends PrismaModel<PostProps> {
  model = prisma.post;
}

export class PostIdLoader extends PrismaModelLoader<RawPrismaPost, string> {
  model = prisma.post;
}

export const Post = khulnasoft.codegenSchema<PostResponse>(PostResponseSchema);
type PostOut = z.output<typeof Post>;

export const PostSelection = Post.selection();

export const PostPage = z.pageResponse(Post);
