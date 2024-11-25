<script setup lang="ts">
import type { PostDTO } from "~/services/post";
import { usePostStore } from "~/stores/post";

const postStore = usePostStore();

const {
  data: posts,
  status,
  error
} = await useAsyncData<PostDTO[]>("posts", postStore.fetchAllPosts, {
  lazy: true
});

const isLoading = computed<boolean>(() => status.value === "pending");
</script>

<template>
  <div class="p-20 space-y-7">
    <div class="flex justify-between">
      <h1 class="border-b font-bold text-lg text-gray-800 pb-2">
        Posts list page
      </h1>
      <NuxtLink to="/post/create">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Create New Post
        </button>
      </NuxtLink>
    </div>

    <span v-if="isLoading">Loading...</span>
    <span v-else-if="error" class="bg-red-100 text-red-500">{{
      error.message
    }}</span>
    <div v-else-if="posts" class="flex flex-col gap-5">
      <NuxtLink
      v-for="post in posts"
      :key="post.id"
      :to="`/post/${post.id}`"
      class="border rounded-lg p-10"
      >
        {{ post.title }}
      </NuxtLink>
    </div>
    <span v-else>Nothing for the moment</span>
  </div>
</template>