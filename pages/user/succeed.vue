<!--<script setup lang="ts">-->
<!--// import type { User } from "~/services/user";-->

<!--const router = useRouter();-->
<!--// const store = useUserStore();-->
<!--const config = useRuntimeConfig();-->

<!--const formData = new FormData();-->
<!--console.log(formData);-->

<!--const user = reactive({-->
<!--  email: formData.get("email"),-->
<!--  name: formData.get("name")-->
<!--});-->

<!--// const rule = {-->
<!--//   email: {-->
<!--//     required,-->
<!--//     email-->
<!--//   },-->
<!--//   name: {-->
<!--//     required-->
<!--//   }-->
<!--// };-->

<!--// const v$ = useVuelidate(user, rule);-->
<!--const createUser = async () => {-->
<!--  console.log("USER", user);-->
<!--  // const isOk = await v$.value.$validate();-->
<!--  // console.log(isOk);-->
<!--  // if (isOk) {-->
<!--  await useAsyncData(-->
<!--    "user:create",-->
<!--    () =>-->
<!--      $fetch(`${config.public.restApiBaseUrl}user`, {-->
<!--        method: "POST",-->
<!--        body: JSON.stringify(user)-->
<!--      }),-->
<!--    {-->
<!--      lazy: true-->
<!--    }-->
<!--  );-->
<!--  // } else await router.push("/user/create");-->
<!--};-->

<!--onBeforeMount(() => {-->
<!--  console.log("validating...");-->
<!--  createUser();-->
<!--});-->
<!--</script>-->

<template>
  <div>SUCCEED USER PAGE</div>
</template>
