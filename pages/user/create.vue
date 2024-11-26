<script setup lang="ts">
import { useRoute } from "#app";

const config = useRuntimeConfig();

const route = useRoute();
const loginFailed = route.query.error as unknown;
</script>

<template>
  <section>
    <h1 class="text-4xl font-bold">Create User</h1>

    <div
      v-if="loginFailed"
      class="mb-6 bg-red-400 border-l-4 border-red-800 text-white p-4"
      role="alert"
    >
      <p data-test="error-login-message" class="font-bold">
        {{ t("errors.login_failed") }}
      </p>
    </div>
    <form method="post" action="/api/users/user" class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <label for="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          class="border px-2 py-1"
          data-test="name"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          class="border px-2 py-1"
          data-test="email"
        />
      </div>
      <button
        type="submit"
        data-test="submit-user"
        class="py-2 px-4 bg-green-500 hover:bg-green-600 w-full"
      >
        Submit
      </button>
    </form>
  </section>
</template>
