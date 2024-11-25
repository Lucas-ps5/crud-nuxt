import { defineStore } from "pinia";
import { DefaultService, OpenAPI, type User } from "~/services/user";

export const useUserStore = defineStore("user", () => {
  const fetchAllUsers = async (): Promise<User[]> => {
    console.log("BASE_URL", OpenAPI);
    try {
      const users = await DefaultService.getUsers({});
      console.log(users);
      return users;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const fetchUserById = async (userId: string): Promise<User> => {
    try {
      const user = await DefaultService.getUserById({ id: userId });
      console.log(user);
      return user;
    } catch (e) {
      console.log(e);
      return {};
    }
  };

  const createUser = async (user: { email: string; name: string }) => {
    try {
      console.log("call service create user");
      const response = await DefaultService.createUser({
        requestBody: {
          email: user.email,
          username: user.name,
          password: "d2lsZnJpZWQ="
        }
      });

      return response.id;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    fetchAllUsers,
    fetchUserById,
    createUser
  };
});
