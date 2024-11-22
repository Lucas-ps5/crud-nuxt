<script setup lang="ts">
import type { User } from "~/services/user";
import { useUserStore } from "~/stores/user";

const route = useRoute();

const store = useUserStore();
const { data: user, status, error } = await useAsyncData<User>("user", () => store.fetchUserById(route.params.id.toString()), {
  lazy: true
});

const isLoading = computed<boolean>(() => status.value === "pending");
</script>

<template>
  <section>
    <h1 class="text-4xl py-8">User details - {{ route.params.id }}</h1>
    <section>
      <span v-if="isLoading">Loading...</span>
      <div v-else class="flex flex-col gap-8">
        <h2>{{ user?.username }}</h2>
        <p>{{ user?.email }}</p>
        <p>{{ user?.name }}</p>
      </div>
    </section>
  </section>
</template>