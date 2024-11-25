<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <section>
    <h1 class="text-4xl font-bold">Create User</h1>
    <form method="post" action="/api/users/user" class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <label for="name">Name:</label>
        <input id="name" type="text" name="name" class="border px-2 py-1" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email">Email:</label>
        <input id="email" type="email" name="email" class="border px-2 py-1" />
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
