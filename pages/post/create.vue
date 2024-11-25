<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <section>
    <h1 class="text-4xl font-bold">Create post</h1>
    <form method="post" action="/api/posts/create" class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <label for="userId">UserId:</label>
        <input id="userId" type="number" name="userId" min="1" class="border px-2 py-1" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="title">Title:</label>
        <input id="title" type="text" name="title" class="border px-2 py-1" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="body">Body:</label>
        <textarea id="body" name="body" class="border px-2 py-1 h-32" />
      </div>
      <button
        type="submit"
        class="py-2 px-4 bg-green-500 hover:bg-green-600 w-full"
      >
        Submit
      </button>
    </form>
  </section>
</template>