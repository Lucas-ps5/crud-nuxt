<script setup lang="ts">
const route = useRoute();

const layout = computed(() => {
  if (route.path.startsWith("/user")) {
    return "structure";
  }
  return "default";
});
</script>

<template>
  <section class="flex flex-col items-center justify-center">
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </section>
</template>
