<script>
import { RouterLink, RouterView } from "vue-router";

import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
};
</script>

<template>
  <body class="bg-cover bg-center bg-green-500">
    <RouterView />
  </body>
</template>
