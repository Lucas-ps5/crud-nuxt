<script setup lang="ts">
import type { PostDTO } from "~/services/post";
import { usePostStore } from "~/stores/post";

const postStore = usePostStore();
const route = useRoute();
const postId = route.query.postId!.toString();

const { data: post, status, error } = await useAsyncData<PostDTO>("post", () => postStore.fetchPostById(postId), {
  lazy: true
});
</script>

<template>
<section>
  <h1>Edit post</h1>
  <form method="post" action="/api/posts/edit-post" class="flex flex-col gap-6">
  <div>
    <input type="hidden" :value="post?.id" name="id" />
    <input type="hidden" :value="post?.userId" name="userId" />
  </div>
    <div>
      <label for="title">Title:</label>
      <input id="title" type="text" name="title" :value="post?.title" />
    </div>
    <div>
      <label for="body">Content:</label>
      <textarea id="body" name="body" :value="post?.body" />
    </div>
    <button type="submit" class="bg-blue-500 w-full py-3">Update</button>
  </form>
</section>
</template>

<style scoped>
div {
  @apply flex flex-col gap-2;
}

input, textarea {
  @apply resize-none w-full border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-700 border-gray-200 focus:outline-none;
}
</style>
