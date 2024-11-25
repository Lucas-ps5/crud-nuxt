import { defineStore } from "pinia";
import { DefaultService, type CreatePostDTO, type PostDTO } from "~/services/post";

export const usePostStore = defineStore("post", () => {
  const fetchAllPosts = async (): Promise<PostDTO[]> => {
    try {
      console.log("Posts store");
      const posts = await DefaultService.getPosts();
      return posts;
    } catch (e) {
      return [] as PostDTO[];
    }
  };

  const fetchPostById = async (id: string): Promise<PostDTO> => {
    try {
      const post = await DefaultService.getPosts1({ id });
      return post;
    } catch (e) {
      return {} as PostDTO;
    }
  };

  const createPost = async (post: CreatePostDTO): Promise<PostDTO> => {
    try {
      const newPost = await DefaultService.postPosts({ requestBody: post });
      return newPost;
    } catch (e) {
      return {} as PostDTO;
    }
  };

  const updatePost = async (
    id: number,
    post: CreatePostDTO
  ): Promise<PostDTO> => {
    try {
      const updatedPost = await DefaultService.putPosts({
        id,
        requestBody: post
      });
      return updatedPost;
    } catch (e) {
      return {} as PostDTO;
    }
  };

  const deletePost = async (id: number): Promise<void> => {
    try {
      await DefaultService.deletePosts({ id });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    fetchAllPosts,
    createPost,
    fetchPostById,
    updatePost,
    deletePost
  };
});
