<script>
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from "flowbite";
import {
  query,
  where,
  collection,
  getDocs,
  updateDoc,
  Timestamp,
  deleteDoc,
  addDoc,
  orderBy,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase";
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged, updateEmail } from "firebase/auth";
import { useStore } from "vuex";
import router from "../router";

export default {
  props: {
    currentUserUID: {
      type: String,
      default: null,
    },
  },
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  data() {
    const auth = getAuth();
    const myPosts = ref([]);
    let posts = [];
    const currentUser = ref({});
    const userProfile = ref({});
    const defaultImgPath = "./img/download.png";
    const logoPath = "./img/foundIt icon.png";
    const defaultProfilePic = "./img/profile.jpg";

    onMounted(async () => {
      await getCurrentUser(this.$store.state.user.uid);

      const q = query(
        collection(db, "reports"),
        where("user", "==", this.currentUser.username)
      );
      const querySnapshot = await getDocs(q);
      for (const doc of querySnapshot.docs) {
        const post = {
          post_id: doc.id,
          category: doc.data().category,
          header: doc.data().header,
          location: doc.data().location,
          date: doc.data().date,
          time: doc.data().time,
          more_info: doc.data().more_info,
          user: doc.data().user,
          created_at: doc.data().created_at,
          imageURL: doc.data().imageURL,
          isOpen: false,
          showFullDescription: false,
        };
        posts.push(post);
      }
      myPosts.value = posts;

      initAccordions();
      initCarousels();
      initCollapses();
      initDials();
      initDismisses();
      initDropdowns();
      initModals();
      initPopovers();
      initTabs();
      initTooltips();
    });

    async function getCurrentUser(userUID) {
      const q = query(collection(db, "users"), where("uid", "==", userUID));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        const tempCurrUser = {
          username: doc.data().username,
          email: doc.data().email,
        };
        currentUser.value = tempCurrUser;
        const tempUserProfile = {
          userDocUID: doc.id,
          username: doc.data().username,
          email: doc.data().email,
          password: doc.data.password,
        };
        userProfile.value = tempUserProfile;
      });
    }

    async function updateProfile() {
      updateEmail(auth.currentUser, userProfile.email).then(() => {
        console.log("Email Updated");
      });
      const userRef = doc(db, "users", userProfile.value.userDocUID);
      await updateDoc(userRef, {
        email: userProfile.value.email,
        username: userProfile.value.username,
      });
    }

    async function deleteReport(id) {
      myPosts.value = myPosts.value.filter((post) => post.post_id !== id);
      await deleteDoc(doc(db, "reports", id));
    }

    function calculateTimeElapsed(timeUpdated) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const dateString = timeUpdated.toDate().toLocaleString("en-US", options);

      const now = new Date();
      var timeElapsed = now - timeUpdated.toDate();
      timeElapsed = timeElapsed / 1000;
      var unitDisc = " second(s) ago";
      var timePassed = Math.floor(timeElapsed);
      if (timeElapsed > 60 && timeElapsed < 3600) {
        timePassed = Math.floor(timeElapsed / 60);
        if (Math.floor(timeElapsed / 60) > 1) unitDisc = " mins ago";
        else unitDisc = " min ago";
      } else if (timeElapsed > 3600 && timeElapsed < 86400) {
        timePassed = Math.floor(timeElapsed / 3600);
        if (Math.floor(timeElapsed / 3600) > 1) unitDisc = " hrs ago";
        else unitDisc = " hr ago";
      } else if (timeElapsed > 86400 && timeElapsed < 604800) {
        timePassed = Math.floor(timeElapsed / 86400);
        if (Math.floor(timeElapsed / 86400) > 1) unitDisc = " days ago";
        else unitDisc = " day ago";
      } else if (timeElapsed > 604800) {
        timePassed = dateString;
        unitDisc = "";
      } else {
        timePassed = Math.floor(timeElapsed);
        unitDisc = "s ago";
      }
      return timePassed + unitDisc;
    }

    return {
      getCurrentUser,
      updateProfile,
      currentUser,
      userProfile,
      defaultImgPath,
      logoPath,
      defaultProfilePic,
      myPosts,
      calculateTimeElapsed,
      items: [
        {
          label: "Resolve",
          action: async (id) => {
            myPosts.value = myPosts.value.filter((post) => post.post_id !== id);
            const reportRef = doc(db, "reports", id);
            await updateDoc(reportRef, {
              category: "Resolved",
            });
          },
        },
        {
          label: "Delete",
          action: async (id) => {
            myPosts.value = myPosts.value.filter((post) => post.post_id !== id);
            await deleteDoc(doc(db, "reports", id));
          },
        },
        {
          label: "Modify",
          action: (id) => {
            this.store.dispatch("updateData", id);
            router.push({ name: "postEdit" });
          },
        },
      ],
    };
  },
  methods: {
    toggleDropdown(report) {
      const index = this.myPosts.indexOf(report);
      const value = this.myPosts[index].isOpen;
      this.myPosts[index].isOpen = !value;
    },
    executeAction(action, id) {
      this.isOpen = false;
      action(id);
    },
  },
};
</script>

<template>
  <nav
    class="fixed top-0 z-50 py-2 w-full bg-[#003300] border-b border-gray-200 dark:bg-[#003300] dark:border-gray-700"
  >
    <div class="px-3 py-1 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="material-symbols-outlined inline-flex items-center p-2 text-white rounded-lg sm:hidden hover:bg-white hover:text-[#003300] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            menu
          </button>
          <RouterLink :to="{ path: '/' }" class="flex ml-2 md:mr-24">
            <img :src="logoPath" class="h-8 mr-3" alt="FoundIt! Logo" />
            <span
              class="self-center text-xl text-white font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
              >FoundIt!</span
            >
          </RouterLink>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <div>
              <button
                type="button"
                class="flex text-sm rounded-full"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  :src="defaultProfilePic"
                  alt="user photo"
                />
                <span
                  class="text-center hidden md:block text-white px-2 text-xl"
                  >{{ currentUser.username }}</span
                >
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user"
            >
              <div class="px-4 py-3" role="none">
                <p
                  class="text-sm text-gray-900 md:hidden dark:text-white"
                  role="none"
                >
                  {{ currentUser.username }}
                </p>
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                  role="none"
                >
                  {{ currentUser.email }}
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <RouterLink :to="{ path: '/posts' }">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      >Home</a
                    >
                  </RouterLink>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Messages</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    @click="$store.dispatch('logout')"
                    >Sign out</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <section
    class="flex flex-col md:flex-row justify-center pt-20 w-auto h-auto md:h-[100vh]"
  >
    <div class="h-fit md:h-modal mx-0 md:mx-2 w-full md:w-72">
      <header
        class="flex py-2 rounded-none md:rounded-3xl gap-1 shadow-xl flex-row md:flex-col justify-center items-center bg-white h-[100%]"
      >
        <img
          :src="defaultProfilePic"
          alt="profile_pic"
          class="border-2 aspect-square rounded-full h-36 md:h-[30%] w-fit"
        />
        <div class="flex flex-col items-center mx-10">
          <h1 class="text-xl font-bold text-center">
            {{ currentUser.username }}
          </h1>
          <h2>{{ currentUser.email }}</h2>
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              class="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Edit Profile
            </button>
            <button
              type="button"
              class="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Change Password
            </button>
          </div>
          <RouterLink to="/create-report" class="flex flex-col">
            <button
              class="rounded-full px-5 bg-[#00A651] h-10 m-3 active:scale-[0.9]"
            >
              Create New Report
            </button>
          </RouterLink>
        </div>
      </header>
    </div>
    <div
      class="w-full md:w-[40rem] rounded-none md:rounded-3xl bg-white h-[100vh] md:h-modal mx-0 md:mx-2"
    >
      <h1 class="py-2 text-xl font-bold pl-4 shadow-md">My Reports</h1>
      <div class="h-[85%] px-2">
        <div
          class="flex flex-col items-center p-4 rounded-lg h-full overflow-y-auto"
        >
          <p v-if="myPosts.length == 0" class="font-medium text-xl">
            No reports yet
          </p>
          <div
            v-for="(post, index) in myPosts"
            :key="post.post_id"
            class="bg-white border w-auto min-w-[444px] my-1 max-w-lg border-gray-200 rounded-lg"
          >
            <div class="flex justify-between px-4 pt-4">
              <p class="font-bold text-lg">{{ post.category }}</p>
              <div
                class="flex rounded-full border-[1px] hover:bg-[#4DEC9A] justify-center relative"
              >
                <button
                  class="rounded-full px-[1.5px] flex justify-items-center hover:bg-green-500 transition-all duration-500 ease-in-out"
                  @click="toggleDropdown(post)"
                  :class="{ 'bg-green-500': post.isOpen }"
                >
                  <span
                    class="material-symbols-outlined active:rotate-90 transition-all"
                  >
                    {{ post.isOpen ? "close" : "more_horiz" }}
                  </span>
                </button>
                <div
                  v-if="post.isOpen"
                  class="flex bg-gray-300 flex-col top-[1.8rem] rounded-lg absolute"
                >
                  <button
                    v-for="item in items"
                    @click="executeAction(item.action, post.post_id)"
                    class="mx-1 hover:bg-green-500 rounded-lg px-2"
                  >
                    {{ item.label }}
                  </button>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col items-center bg-white border-gray-200 rounded-lg"
            >
              <img
                class="object-scale-down w-full rounded-t-lg h-52"
                :src="!post.imageURL ? defaultImgPath : post.imageURL"
              />
              <div class="flex flex-col p-4 w-full leading-normal">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ post.header }}
                </h5>
                <p>Location: {{ post.location }}</p>
                <p>Date: {{ post.date }}</p>
                <p>Time: {{ post.time }}</p>
                <div class="border-2 border-green-600 w-200 py-1 rounded mt-2">
                  <h1 class="font-bold m-2">Additional information:</h1>
                  <p class="m-2">
                    {{ post.more_info }}
                  </p>
                </div>
                <div class="flex flex-col justify-between mt-2">
                  <div class="flex">
                    <span>
                      {{ post.user }}
                    </span>
                  </div>
                  <p class="text-gray-600 text-sm font-normal">
                    {{ calculateTimeElapsed(post.created_at) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center z-50"
      v-if="myPosts == null"
    >
      <div class="loader">Loading reports</div>
    </div>
  </section>
  <!-- Main modal -->
  <div
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Update your user profile
          </h3>
          <form class="space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                v-model="userProfile.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your username</label
              >
              <input
                type="text"
                name="username"
                id="username"
                v-model="userProfile.username"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              type="button"
              data-modal-hide="authentication-modal"
              @click="updateProfile"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update profile
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
