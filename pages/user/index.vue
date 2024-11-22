<script setup lang="ts">
import type { User } from "~/services/user";
import { useUserStore } from "~/stores/user";

const store = useUserStore();
const { data: users, status, error } = await useAsyncData<User[]>("users", store.fetchAllUsers, {
  lazy: true
});

const isLoading = computed<boolean>(() => status.value === "pending");
</script>

<template>
  <div class="p-20 space-y-7">
    <div class="flex justify-between">
      <h1 class="border-b font-bold text-lg text-gray-800 pb-2">Users list page</h1>
      <NuxtLink to="/user/create">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Create New User
        </button>
      </NuxtLink>
    </div>

    <span v-if="isLoading">Loading...</span>
    <span v-else-if="error" class="bg-red-100 text-red-500">{{ error.message }}</span>
    <div v-else-if="users" class="grid grid-cols-4 gap-5">
      <NuxtLink class="border rounded-lg p-10" v-for="user in users" :key="user.id" :to="`/user/${user.id}`">
        {{ user.username }} - {{ user.email }}
      </NuxtLink>
    </div>
    <span v-else>Nothing for the moment</span>
  </div>
</template>