<script setup lang="ts">
import type { PostDTO } from "~/services/post";
import { usePostStore } from "~/stores/post";

const route = useRoute();

const postStore = usePostStore();
const { data: post, status, error } = await useAsyncData<PostDTO>("post", () => postStore.fetchPostById(route.params.id.toString()), {
  lazy: true
});

const isLoading = computed<boolean>(() => status.value === "pending");
</script>

<template>
  <section class="flex flex-col gap-7">
    <h1 class="text-4xl py-8">Post details - {{ route.params.id }}</h1>
    <section>
      <span v-if="isLoading">Loading...</span>
      <div v-else class="flex flex-col gap-8">
        <h2>{{ post?.title }}</h2>
        <p>{{ post?.body }}</p>
      </div>
    </section>
    <div class="flex items-center gap-2">
      <form method="post" action="/api/posts/delete-post">
        <input type="hidden" name="id" :value="post?.id" />
        <button class="bg-red-500 px-4 py-3" type="submit">Delete</button>
      </form>
      <NuxtLink :to="`/post/edit?postId=${post?.id}`" class="bg-blue-500 px-6 py-3">Edit</NuxtLink>
    </div>
  </section>
</template>