import { z } from "zod";
import { CreatePostDTO, OpenAPI } from "~/services/post";
import { usePostStore } from "~/stores/post";

type Failure = {
  status: number;
};

const schema = z.object({
  userId: z.string(),
  title: z.string().min(5).max(100),
  body: z.string().min(10).max(1000)
});

type Post = z.infer<typeof schema>;

const buildPost = (post: {
  userId: string;
  body: string;
  title: string;
}): CreatePostDTO => {
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

  const validatedFields = schema.safeParse(post);
  if (validatedFields.success) {
    try {
      await store.createPost(buildPost(post));
      await sendRedirect(event, "/post/succeed");
    } catch (error) {
      await sendRedirect(
        event,
        "/post/create?error=somethingwentwrong",
        (error as Failure).status
      );
    }
  } else {
    await sendRedirect(event, "/post/create?error=true");

  }
});
