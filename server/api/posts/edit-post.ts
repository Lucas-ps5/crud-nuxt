import { z } from "zod";
import { CreatePostDTO, OpenAPI } from "~/services/post";
import { usePostStore } from "~/stores/post";

type Failure = {
  status: number;
};

const schema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string().min(5).max(100),
  body: z.string().min(10).max(1000)
});

type Post = z.infer<typeof schema>;

const buildPost = (post: Post): CreatePostDTO => {
  return {
    userId: parseInt(post.userId),
    title: post.title,
    body: post.body
  };
};

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  OpenAPI.BASE = config.public.restApiBaseUrl;
  console.log("server rest Api Base Url:", OpenAPI.BASE);

  const store = usePostStore();
  const post = await readBody<Post>(event);
  console.log(111, post)
  const validatedFields = schema.safeParse(post);
  if (validatedFields.success) {
    try {
      await store.updatePost(parseInt(post.id), buildPost(post));
      console.log("post updated successfully");
      await sendRedirect(event, "/post");
    } catch (error) {
      console.log(error);
      await sendRedirect(event, "/post?error=somethingwentwrong", (error as Failure).status);
    }
  } else {
    console.log("Error creating");
    console.log(post);
    await sendRedirect(event, `/post/edit?postId=${post?.id}`, 400);
  }
});