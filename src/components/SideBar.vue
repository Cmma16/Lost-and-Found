<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onMounted } from "vue";
import { ref } from "vue";
import { async } from "@firebase/util";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const auth = getAuth();
    const user_email = ref("");
    const number = ref("");
    const uid = ref("");

    onMounted(async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          uid.value = user.uid;
        }
      });
    });

    const goToLogin = () => {
      router.push({ name: "home" });
    };

    return {
      user_email,
      number,
      uid,
    };
  },
};
</script>

<template>
  <div
    class="left-sidebar mt-14 sticky top-12 z-50 bg-white mx-1 max-h-[470px] hidden md:flex flex-col p-2 rounded-md shadow-sm"
  >
    <div class="m-5 flex flex-col">
      <button
        class="material-symbols-outlined flex self-end"
        @click="$store.dispatch('logout')"
      >
        Settings
      </button>
      <div class="flex flex-col bg-[#4DEC9A] p-4 mt-2 rounded-md pr-14">
        <div class="flex flex-row items-center">
          <img
            src="/img/userprofile.jpeg"
            class="rounded-full max-h-20 aspect-square"
          />
          <h1 class="font-medium text-2xl ml-2">@USERNAME</h1>
        </div>
        <span class="font-normal text-base mt-2">Name</span>
        <p class="font-medium text-xl">Your Name Here</p>
        <span class="font-normal text-base mt-2">Phone Number</span>
        <input
          class="font-medium text-xl bg-transparent pointer-events-none"
          type="text"
          v-model="number"
        />
        <span class="font-normal text-base mt-2">Email Address</span>
        <input
          class="font-medium text-xl bg-transparent pointer-events-none"
          type="text"
          v-model="user_email"
        />
      </div>
      <RouterLink to="/create-report" class="flex flex-col">
        <button class="rounded-full bg-[#00A651] h-10 m-3">
          Create New Report
        </button>
      </RouterLink>
    </div>
  </div>
</template>
