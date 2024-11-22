import { defineStore } from "pinia";
import { DefaultService, type User } from "~/services/user";

export const useUserStore = defineStore("user", () => {
  const fetchAllUsers = async (): Promise<User[]> => {
    try {
      const users = await DefaultService.getUsers({});
      console.log(users);
      return users;
    }
    catch (e) {
      console.log(e);
      return [];
    }
  };

  const fetchUserById = async (userId: string): Promise<User> => {
    try {
      const user = await DefaultService.getUserById({ id: userId });
      console.log(user);
      return user;
    }
    catch (e) {
      console.log(e);
      return {};
    }
  };


  return {
    fetchAllUsers,
    fetchUserById,
  };
});