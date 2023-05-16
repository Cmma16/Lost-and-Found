<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { db } from "@/firebase";
import { query, where, collection, getDocs, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, onMounted } from "vue";
import { async } from "@firebase/util";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
  },
  data() {
    const auth = getAuth();
    const usr = ref({});
    const userUID = ref("");

    //const tempUser = {};

    onMounted(async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          getUserUID(user.uid);
        }
      });
    });

    async function getUserUID(userID) {
      //console.log(userID);
      const q = query(collection(db, "users"), where("uid", "==", userID));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        const tempUser = {
          username: doc.data().username,
          email: doc.data().email,
        };
        usr.value = tempUser;
      });
    }

    return {
      getUserUID,
      usr,
      userUID,
    };
  },
};
</script>

<template>
  <div
    class="left-sidebar mt-14 sticky top-12 z-20 bg-white mx-1 max-h-[470px] hidden md:flex flex-col p-2 rounded-md shadow-sm"
  >
    <div class="m-5 flex flex-col">
      <button
        class="material-symbols-outlined flex self-end"
        @click="$store.dispatch('logout')"
      >
        logout
      </button>
      <form class="flex flex-col bg-[#4DEC9A] p-4 mt-2 rounded-md pr-6 mx-auto">
        <div class="flex flex-row items-center">
          <img
            src="/img/profile.jpg"
            class="rounded-full max-h-20 aspect-square mx-auto"
          />
        </div>
        <span class="font-normal text-base mt-2">Username</span>
        <p
          class="font-medium pr-1 pb-1 text-base w-50 bg-transparent pointer-events-none"
        >
          {{ usr.username }}
        </p>
        <span class="font-normal text-base mt-2">Email Address</span>
        <input
          class="font-medium pr-1 pb-1 text-base w-50 bg-transparent pointer-events-none"
          type="text"
          v-model="usr.email"
        />
      </form>
      <RouterLink to="/create-report" class="flex flex-col">
        <button class="rounded-full bg-[#00A651] h-10 m-3 active:scale-[0.9]">
          Create New Report
        </button>
      </RouterLink>
    </div>
  </div>
</template>
