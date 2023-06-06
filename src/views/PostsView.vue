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
import {
  getStorage,
  ref as stRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import Posts from "../components/Posts.vue";
import SideBar from "../components/SideBar.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import router from "../router";
import { useStore } from "vuex";
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
import { async } from "@firebase/util";

export default {
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  data() {
    const auth = getAuth();
    const storage = getStorage();
    const reports = ref([]);
    const search = ref("");
    let fbReports = [];
    let activeTab = "allTab";
    const usr = ref({});
    const currentUser = ref("");

    onMounted(async () => {
      const storage = getStorage();
      // Simulate loading data
      setTimeout(() => {
        // Once loading is complete, set isLoading to false
        this.isLoading = false;
      }, 3000); // Delay for 2 seconds
      const querySnapshot = await getDocs(collection(db, "reports"));
      for (const doc of querySnapshot.docs) {
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
          timeCreated: doc.data().timeCreated,
          imageURL: doc.data().imageURL,
          isOpen: false,
          showFullDescription: false,
          needsTruncation: false,
          showModal: false,
        };
        fbReports.push(report);
      }
      reports.value = fbReports;
      onAuthStateChanged(auth, (user) => {
        if (user) {
          getCurrentUser(user.uid);
        }
      });

      initAccordions();
      initCarousels();
      initCollapses();
      initDials();
      initDismisses();
      initDrawers();
      initDropdowns();
      initModals();
      initPopovers();
      initTabs();
      initTooltips();
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
    function calculateTimeElapsed(dateCreated, timeCreated) {
      var timeNow = new Date();
      var dateTime = dateCreated + " " + timeCreated;
      var date = new Date(dateTime);
      var timeElapsed = timeNow - date;
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
      } else {
        timePassed = dateCreated;
        unitDisc = "";
      }
      return timePassed + unitDisc;
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

      regex: /[\n\r]/,

      postID: null,
      showModal: false,

      isLoading: true,

      showFullDescription: false,
      maxDescriptionLength: 30,

      getUserInfo,
      getCurrentUser,

      searchReports,
      deleteReport,
      lostOnly,
      foundOnly,
      calculateTimeElapsed,
      displayAll,
      activeTab,
      isOpen: false,
      items: [
        {
          label: "Resolve",
          action: async (id) => {
            reports.value = reports.value.filter(
              (report) => report.post_id !== id
            );
            await deleteDoc(doc(db, "reports", id));
          },
        },
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
  computed: {},
  components: {
    Posts,
    SideBar,
  },
  methods: {
    toggleDropdown(report) {
      const index = this.reports.indexOf(report);
      const value = this.reports[index].isOpen;
      this.reports[index].isOpen = !value;
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
    truncateMoreInfo(report) {
      const index = this.reports.indexOf(report);
      const value = this.reports[index].showFullDescription;

      this.reports[index].needsTruncation = !value;
      this.reports[index].showFullDescription = !value;
    },
    truncatedMoreInfo(report) {
      const disc = report.more_info;
      const containsLineBreaks = this.regex.test(disc);

      if (containsLineBreaks && !report.needsTruncation) {
        const index = disc.indexOf("\n");
        if (index !== -1) {
          return disc.slice(0, index);
        }
      } else if (
        disc.length > this.maxDescriptionLength &&
        !report.showFullDescription
      ) {
        return `${disc.slice(0, this.maxDescriptionLength)}...`;
      } else {
        return disc;
      }
    },
  },
};
</script>

<template>
  <div class="body flex flex-col justify-center">
    <nav class="menu sticky top-0 z-50 bg-[#003300] mb-0 shadow-md h-[50px]">
      <ul class="flex flex-row justify-between">
        <li class="ml-9 my-2 px-1 sm:block hidden">
          <button
            class="flex justify-items-center text-white px-2 py-1 rounded-full active:scale-[0.9]"
            @click="
              displayAll();
              activeTab = 'allTab';
            "
            :class="{ '': activeTab === 'allTab' }"
          >
            <span class="material-symbols-outlined text-white"> menu </span>
          </button>
        </li>
        <li class="flex flex-row my-2 px-1 max-h-10">
          <img class="max-h-10" src="/img/foundIt icon.png" />
          <span class="text-white font-bold font-sans text-2xl max-h-10"
            >FoundIt!</span
          >
        </li>
        <li class="mx-1 flex items-stretch">
          <div
            class="bg-[#4DEC9A] flex flex-row justify-items-center my-1 max-h-9 py-1 w-lg rounded-full"
          >
            <input
              type="text"
              placeholder="Search"
              v-model="search"
              class="bg-[#4DEC9A] placeholder:text-white max-h-8 border-0 ml-3 focus:border-none max-w-[420px]"
            />
            <button
              @click="searchReports"
              class="material-symbols-outlined rounded-full text-white mr-3 active:scale-[0.9]"
            >
              search
            </button>
          </div>
        </li>
        <li class="mx-1 my-2 pr-10 rounded-full">
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            class="text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            {{ currentUser }}
            <svg
              class="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div
            id="dropdownDivider"
            class="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Profile</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Messages</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Settings</a
                >
              </li>
            </ul>
            <div class="py-2">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                @click="$store.dispatch('logout')"
                >Logout</a
              >
            </div>
          </div>
        </li>
        <li>
          <div class="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-green-400 rounded-full focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 text-sm px-0.5 items-center"
            >
              <span class="material-symbols-outlined"> more_horiz </span>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdown"
              class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li v-for="item in items">
                  <button
                    @click="executeAction(item.action, report.post_id)"
                    class="mx-1 hover:bg-green-500 rounded-full px-2"
                  >
                    {{ item.label }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <div class="flex flex-row">
      <div
        class="categories flex sticky top-[50px] z-40 w-[285px] min-w-[285px] bg-[#d9d9d9] flex-col"
      >
        <ul class="flex flex-col grow">
          <li class="my-2">
            <button
              class="flex w-[285px] font-black pl-9 py-1 active:scale-[0.99]"
              @click="
                displayAll();
                activeTab = 'allTab';
              "
              :class="{ 'bg-green-500': activeTab === 'allTab' }"
            >
              <span class="material-symbols-outlined mr-5 font-bold">
                apps
              </span>
              All Posts
            </button>
          </li>
          <li class="my-2">
            <button
              class="flex w-[285px] font-black pl-9 py-1 active:scale-[0.99]"
              @click="
                lostOnly();
                activeTab = 'lostTab';
              "
              :class="{ 'bg-green-500': activeTab === 'lostTab' }"
            >
              <span class="material-symbols-outlined mr-5 font-bold">
                conditions
              </span>
              Lost Category
            </button>
          </li>
          <li class="my-2">
            <button
              class="flex w-[285px] font-black pl-9 py-1 active:scale-[0.99]"
              @click="
                foundOnly();
                activeTab = 'foundTab';
              "
              :class="{ 'bg-green-500': activeTab === 'foundTab' }"
            >
              <span class="material-symbols-outlined mr-5 font-bold">
                search_check
              </span>
              Found Category
            </button>
          </li>
          <li class="my-2">
            <RouterLink to="/create-report" class="flex flex-col">
              <button
                class="rounded-full bg-[#00A651] h-10 m-3 active:scale-[0.9]"
              >
                Create New Report
              </button>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-row flex-wrap">
        <div
          v-for="report in reports"
          :key="report.post_id"
          class="h-fit mb-1 flex grow rounded-lg shrink flex-col mx-1 bg-white w-[390px] max-w-lg shadow-xl"
        >
          <div
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover h-auto md:w-1/3 rounded-none rounded-l-lg"
              :src="!report.imageURL ? '/img/empty.jpg' : report.imageURL"
              alt=""
            />
            <div class="flex flex-col p-4 w-full md:w-2/3 leading-normal">
              <div class="flex justify-between px-4 bg-gree">
                <p class="font-bold">{{ report.category }}</p>
                <div
                  class="flex rounded-full hover:bg-[#4DEC9A]"
                  :class="{ 'border-[1px]': isCurrentUser(report.user) }"
                >
                  <button
                    v-if="isCurrentUser(report.user)"
                    class="rounded-full px-[1.5px] flex justify-items-center hover:bg-green-500 transition-all duration-500 ease-in-out"
                    @click="toggleDropdown(report)"
                    :class="{ 'bg-green-500': report.isOpen }"
                  >
                    <span class="material-symbols-outlined"> more_horiz </span>
                  </button>
                  <transition name="fade">
                    <div v-if="report.isOpen" class="flex flex-row">
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
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ report.header }}
              </h5>
              <p>Location: {{ report.location }}</p>
              <p>Date: {{ report.date }}</p>
              <p>Time: {{ report.time }}</p>
              <div class="flex justify-between mt-2">
                <p class="text-gray-600 font-bold">
                  {{
                    calculateTimeElapsed(report.dateCreated, report.timeCreated)
                  }}
                </p>
                <div class="flex">
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
              </div>
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

.dropdown-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  width: 100px; /* Adjust the width as needed */
  height: 30px; /* Adjust the height as needed */
}

.postcard {
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
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
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

.categories {
  height: calc(100vh - 50px);
}

.truncate-button {
  font-weight: 600;
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
