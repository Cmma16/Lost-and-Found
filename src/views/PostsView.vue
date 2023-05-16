<script>
import { ref, onMounted } from "vue";
import {
  query,
  where,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase";
import Posts from "../components/Posts.vue";
import SideBar from "../components/SideBar.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import router from "../router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  data() {
    const auth = getAuth();
    const reports = ref([]);
    const search = ref("");
    let fbReports = [];
    let activeTab = "allTab";
    const usr = ref({});
    const currentUser = ref("");

    onMounted(async () => {
      // Simulate loading data
      setTimeout(() => {
        // Once loading is complete, set isLoading to false
        this.isLoading = false;
      }, 3000); // Delay for 2 seconds
      const querySnapshot = await getDocs(collection(db, "reports"));
      querySnapshot.forEach((doc) => {
        const report = {
          post_id: doc.id,
          category: doc.data().category,
          header: doc.data().header,
          location: doc.data().location,
          date: doc.data().date,
          time: doc.data().time,
          more_info: doc.data().more_info,
          user: doc.data().user,
          dateCreated: doc.data().dateCreated,
          timeCreated: doc.data().dateCreated,
          isOpen: false,
          showModal: false,
        };
        fbReports.push(report);
      });
      reports.value = fbReports;
      onAuthStateChanged(auth, (user) => {
        if (user) {
          getCurrentUser(user.uid);
        }
      });
    });
    function searchReports() {
      //incomplete
      reports.value = fbReports;
      reports.value = reports.value.filter(
        (report) =>
          report.category.toLowerCase().includes(search.value.toLowerCase()) ||
          report.header.toLowerCase().includes(search.value.toLowerCase()) ||
          report.location.toLowerCase().includes(search.value.toLowerCase()) ||
          report.date.toLowerCase().includes(search.value.toLowerCase()) ||
          report.time.toLowerCase().includes(search.value.toLowerCase()) ||
          report.more_info.toLowerCase().includes(search.value.toLowerCase()) ||
          report.user.toLowerCase().includes(search.value.toLowerCase())
      );
    }
    function lostOnly() {
      reports.value = fbReports;
      reports.value = reports.value.filter((report) =>
        report.category.includes("Lost")
      );
    }
    function foundOnly() {
      reports.value = fbReports;
      reports.value = reports.value.filter((report) =>
        report.category.includes("Found")
      );
    }
    function displayAll() {
      reports.value = fbReports;
    }

    async function deleteReport(id) {
      reports.value = reports.value.filter((report) => report.post_id !== id);
      await deleteDoc(doc(db, "reports", id));
    }

    async function getCurrentUser(userUID) {
      const q = query(collection(db, "users"), where("uid", "==", userUID));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        currentUser.value = doc.data().username;
      });
    }

    async function getUserInfo(userName) {
      //console.log(userID);
      const q = query(
        collection(db, "users"),
        where("username", "==", userName)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        const tempUser = {
          username: doc.data().username,
          phone_number: doc.data().phone_number,
          email: doc.data().email,
        };
        usr.value = tempUser;
      });
    }

    return {
      reports,
      search,
      usr,
      currentUser,

      postID: null,
      showModal: false,

      isLoading: true,

      getUserInfo,
      getCurrentUser,

      searchReports,
      deleteReport,
      lostOnly,
      foundOnly,
      displayAll,
      activeTab,
      isOpen: false,
      items: [
        {
          label: "Delete",
          action: async (id) => {
            reports.value = reports.value.filter(
              (report) => report.post_id !== id
            );
            await deleteDoc(doc(db, "reports", id));
          },
        },
        {
          label: "Modify",
          action: (id) => {
            this.store.dispatch("updateData", id);
            router.push({ name: "postDetail" });
          },
        },
      ],
    };
  },
  mounted() {},
  components: {
    Posts,
    SideBar,
  },
  methods: {
    toggleDropdown(report) {
      //this.isOpen = !this.isOpen;
      const index = this.reports.indexOf(report);
      const value = this.reports[index].isOpen;
      this.reports[index].isOpen = !value;
      //console.log(value);
    },
    toggleUserInfo(report) {
      const index = this.reports.indexOf(report);
      const value = this.reports[index].user;
      const bool = this.showModal;
      this.showModal = !bool;
      //console.log(value);
      this.getUserInfo(value);
    },
    executeAction(action, id) {
      this.isOpen = false;
      action(id);
    },
    isCurrentUser(user) {
      if (user === this.currentUser) return true;
      else return false;
    },
  },
};
</script>

<template>
  <div class="body flex flex-col justify-center">
    <nav class="menu sticky top-0 z-50 bg-[#003300] mb-2 shadow-md">
      <ul class="flex flex-row items-stretch justify-between">
        <li class="mx-1 my-2 px-1 rounded-full sm:block hidden">
          <button
            class="flex justify-items-center text-white px-2 py-1 rounded-full active:scale-[0.9]"
            @click="
              displayAll();
              activeTab = 'allTab';
            "
            :class="{ 'bg-green-500': activeTab === 'allTab' }"
          >
            <span class="material-symbols-outlined text-white"> menu </span>
            All
          </button>
        </li>
        <li
          class="mx-1 my-2 px-1 rounded-full sm:block hidden active:scale-[0.9]"
        >
          <button
            class="flex justify-items-center px-2 py-1 text-white rounded-full"
            @click="
              lostOnly();
              activeTab = 'lostTab';
            "
            :class="{ 'bg-green-500': activeTab === 'lostTab' }"
          >
            <span class="material-symbols-outlined text-white">
              help_center
            </span>
            Lost
          </button>
        </li>
        <li class="mx-1 my-2 px-1 rounded-full sm:block hidden">
          <button
            class="flex justify-items-center px-2 py-1 text-white rounded-full active:scale-[0.9]"
            @click="
              foundOnly();
              activeTab = 'foundTab';
            "
            :class="{ 'bg-green-500': activeTab === 'foundTab' }"
          >
            <span class="material-symbols-outlined text-white">
              search_check
            </span>
            Found
          </button>
        </li>
        <li class="mx-1 flex items-stretch">
          <div
            class="bg-[#4DEC9A] flex flex-row justify-items-center my-1 py-1 w-lg rounded-full"
          >
            <input
              type="text"
              placeholder="Search"
              v-model="search"
              class="bg-[#4DEC9A] placeholder:text-white ml-3 focus:outline-none max-w-[320px]"
            />
            <button
              @click="searchReports"
              class="material-symbols-outlined rounded-full text-white mr-3 active:scale-[0.9]"
            >
              search
            </button>
          </div>
        </li>
        <li class="mx-1 my-2 pr-1 rounded-full">
          <button
            class="material-symbols-outlined flex self-end text-white"
            @click="$store.dispatch('logout')"
          >
            logout
          </button>
        </li>
      </ul>
    </nav>
    <div class="self-center flex flex-row flex-wrap">
      <div
        v-for="report in reports"
        :key="report.post_id"
        class="postcard mb-1 flex shrink flex-col py-6 mx-1 bg-white min-w-[390px] shadow-xl"
      >
        <div
          class="card-image flex justify-center bg-black top-0 bottom-0 left-0 right-0 absolute"
        >
          <img src="/img/images.jpg" class="max-w-full h-auto" />
        </div>
        <div class="post-description">
          <div class="flex justify-between px-4">
            <p class="font-bold">{{ report.category }}</p>
            <p class="text-gray-600 font-bold">Today, 4hrs ago</p>
          </div>
          <div class="flex sm:flex-col justify-between px-4">
            <div class="flex flex-col m-1">
              <p class="text-2xl font-bold">{{ report.header }}</p>
              <p>Location: {{ report.location }}</p>
              <p>Date: {{ report.date }}</p>
              <p>Time: {{ report.time }}</p>
            </div>
          </div>
          <div class="border-2 border-green-600 w-200 py-1 rounded mx-4 mt-2">
            <h1 class="font-bold m-2">Additional information:</h1>
            <p class="m-2">
              {{ report.more_info }}
            </p>
          </div>
          <div class="flex justify-between mt-2">
            <div class="flex">
              <img src="" class="h-7 w-7 rounded-full mr-1" />
              <button @click="toggleUserInfo(report)">
                {{ report.user }}
              </button>
              <div
                v-if="showModal"
                class="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black opacity-50"
              >
                <div
                  class="bg-white p-6 rounded max-w-sm mx-auto mt-16 flex flex-col"
                >
                  <div class="flex flex-col">
                    <span class="font-normal text-base mt-2">Username</span>
                    <p
                      class="font-medium pr-1 pb-1 text-base w-50 bg-transparent pointer-events-none"
                    >
                      {{ usr.username }}
                    </p>
                    <span class="font-normal text-base mt-2">Phone Number</span>
                    <input
                      class="font-medium pr-1 pb-1 text-base w-50 bg-transparent pointer-events-none"
                      type="text"
                      v-model="usr.phone_number"
                    />
                    <span class="font-normal text-base mt-2"
                      >Email Address</span
                    >
                    <input
                      class="font-medium pr-1 pb-1 text-base w-50 bg-transparent pointer-events-none"
                      type="text"
                      v-model="usr.email"
                    />
                  </div>
                  <button
                    @click="toggleUserInfo(report)"
                    class="bg-red-500 p-2 text-white rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            <div
              class="flex rounded-full hover:bg-[#4DEC9A]"
              :class="{ 'border-[1px]': isCurrentUser(report.user) }"
            >
              <button
                v-if="isCurrentUser(report.user)"
                class="rounded-full px-[1.5px] flex justify-items-center hover:bg-green-500 z-10 transition-all duration-500 ease-in-out"
                @pointerenter="toggleDropdown(report)"
                :class="{ 'bg-green-500': report.isOpen }"
              >
                <span class="material-symbols-outlined"> more_horiz </span>
              </button>
              <transition name="fade">
                <div
                  v-if="report.isOpen"
                  @pointerleave="toggleDropdown(report)"
                  class=""
                >
                  <button
                    v-for="item in items"
                    @click="executeAction(item.action, report.post_id)"
                    class="mx-1 hover:bg-green-500 rounded-full px-2"
                  >
                    {{ item.label }}
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center z-50"
      v-if="isLoading"
    >
      <div class="loader">Loading reports</div>
    </div>
  </div>
</template>

<style>
* {
  scroll-behavior: smooth;
}

.postcard {
  height: 386px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  overflow: hidden;
}

.post-description {
  display: flex;
  position: absolute;
  gap: 0.5em;
  flex-direction: column;
  background-color: white;
  color: #212121;
  height: auto;
  width: 100%;
  bottom: 0;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 1rem;
}

/* Hover states */
.card-image:hover ~ .post-description {
  transform: translateY(100%);
}

.loader {
  font-size: 2rem;
  font-family: sans-serif;
  font-variant: small-caps;
  font-weight: 900;
  background: conic-gradient(
    #5790d1 0 25%,
    #ff904f 25% 50%,
    #18e006 50% 75%,
    #ffde2b 75%
  );
  background-size: 200% 200%;
  animation: animateBackground 4.5s ease-in-out infinite;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

@keyframes animateBackground {
  25% {
    background-position: 0 100%;
  }

  50% {
    background-position: 100% 100%;
  }

  75% {
    background-position: 100% 0%;
  }

  100% {
    background-position: 0 0;
  }
}
</style>
