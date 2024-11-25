import { z } from "zod";
import { usePostStore } from "~/stores/post";

type Failure = {
  status: number;
};

const schema = z.object({
  id: z.string()
});

type PostId = z.infer<typeof schema>;

export default defineEventHandler(async (event) => {
  const store = usePostStore();
  const postId = await readBody<PostId>(event);

  const validatedFields = schema.safeParse(postId);
  if (validatedFields.success) {
    try {
      await store.deletePost(parseInt(postId.id));
      console.log("post deleted successfully");
      await sendRedirect(event, "/post");
    } catch (error) {
      console.log(error);
      await sendRedirect(event, "/post?error=somethingwentwrong", (error as Failure).status);
    }
  } else {
    console.log("Error deleting post");
    console.log(postId);
    await sendRedirect(event, `/post/${postId.id}`, 400);
  }
});