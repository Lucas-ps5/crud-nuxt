import { z } from "zod";
import { OpenAPI } from "~/services/user";
import { useUserStore } from "~/stores/user";

const schema = z.object({
  email: z.string().email(),
  name: z.string()
});

type User = z.infer<typeof schema>;

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  OpenAPI.BASE = config.public.restApiBaseUrl;
  console.log("server rest Api Base Url:", OpenAPI.BASE);

  const store = useUserStore();
  const user = await readBody<User>(event);
  console.log("BODY", user);

  const validatedFields = schema.safeParse(user);
  if (validatedFields.success) {
    console.log("fetch all users");
    const users = await useAsyncData("user:get", anchstore.fetchAllUsers);
    await sendRedirect(
      event,
      users.length ? "/user/succeed" : "/user/create?error=true"
    );
  } else await sendRedirect(event, "/user/create", 400);
});
