<script>
import { ref, onMounted } from "vue";
import {
  query,
  where,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  orderBy,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase";
import {
  getStorage,
  ref as stRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
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
    const author = ref({});
    const thisPost = ref({});
    const currentUser = ref({});

    onMounted(async () => {
      const storage = getStorage();

      const q = query(
        collection(db, "reports"),
        where("category", "!=", "Resolved")
      );
      const querySnapshot = await getDocs(q);
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
    async function messageThisUser() {
      router.push({
        name: "conversations",
      });
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
        const tempCurrUser = {
          username: doc.data().username,
          email: doc.data().email,
        };
        currentUser.value = tempCurrUser;
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
        const tempAuthor = {
          username: doc.data().username,
          email: doc.data().email,
        };
        author.value = tempAuthor;
      });
    }

    async function getPostDetail(post) {
      const tempPost = {
        id: post.post_id,
        category: post.category,
        header: post.header,
        location: post.location,
        date: post.date,
        time: post.time,
        more_info: post.more_info,
        user: post.user,
        dateCreated: post.dateCreated,
        timeCreated: post.timeCreated,
        imageURL: post.imageURL,
        isOpen: false,
      };
      thisPost.value = tempPost;
    }

    return {
      reports,
      search,
      author,
      thisPost,
      currentUser,

      regex: /[\n\r]/,

      postID: null,
      showModal: false,

      showFullDescription: false,
      maxDescriptionLength: 30,

      getUserInfo,
      getCurrentUser,
      getPostDetail,

      searchReports,
      deleteReport,
      lostOnly,
      messageThisUser,
      foundOnly,
      calculateTimeElapsed,
      displayAll,
      activeTab,
      items: [
        {
          label: "Resolve",
          action: async (id) => {
            reports.value = reports.value.filter(
              (report) => report.post_id !== id
            );
            const reportRef = doc(db, "reports", id);
            await updateDoc(reportRef, {
              category: "Resolved",
            });
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
            router.push({ name: "postEdit" });
          },
        },
      ],
    };
  },
  computed: {},
  components: {},
  methods: {
    togglePostDropdown(report) {
      const value = this.thisPost.isOpen;
      this.thisPost.isOpen = !value;
    },
    toggleDropdown(report) {
      const index = this.reports.indexOf(report);
      const value = this.reports[index].isOpen;
      this.reports[index].isOpen = !value;
    },
    toggleUserInfo(report) {
      //const index = this.reports.indexOf(report);
      const value = report.user;
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
      if (user === this.currentUser.username) return true;
      else return false;
    },
    displayPostDetails(post) {
      const bool = this.showFullDescription;
      this.showFullDescription = !bool;
      //console.log(post);
      this.getPostDetail(post);
    },
  },
};
</script>

<template>
  <nav
    class="fixed top-0 z-50 w-full bg-[#003300] border-b border-gray-200 dark:bg-[#003300] dark:border-gray-700"
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
          <a href="#" class="flex ml-2 md:mr-24">
            <img
              src="/img/foundIt icon.png"
              class="h-8 mr-3"
              alt="FoundIt! Logo"
            />
            <span
              class="self-center text-xl text-white font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
              >FoundIt!</span
            >
          </a>
        </div>
        <div class="flex">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            class="md:hidden text-white bg-[#4DEC9A] dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 rounded-full text-sm p-2.5 mr-1"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
          <div class="relative hidden md:block">
            <div class="flex flex-row">
              <input
                type="text"
                id="search-navbar"
                v-model="search"
                class="block w-full p-2 pr-10 text-sm text-gray-900 rounded-full bg-[#4DEC9A] focus:border-0 focus:my-[1px] focus:outline-none focus:ring-0"
                placeholder="Search..."
              />
              <button
                @click="searchReports"
                class="material-symbols-outlined rounded-full text-white mr-3 active:scale-[0.9]"
              >
                search
              </button>
            </div>
          </div>
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
                  src="/img/profile.jpg"
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
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Profile</a
                  >
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
                    >Settings</a
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

  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-search"
      >
        <div class="relative mt-3 md:hidden">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      </div>
      <ul class="space-y-2 font-medium">
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-400 dark:hover:bg-gray-700"
            @click="
              displayAll();
              activeTab = 'allTab';
            "
            :class="{ 'bg-green-500': activeTab === 'allTab' }"
          >
            <span class="material-symbols-outlined font-bold"> apps </span>
            <span class="ml-3">All Posts</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-400 dark:hover:bg-gray-700"
            @click="
              lostOnly();
              activeTab = 'lostTab';
            "
            :class="{ 'bg-green-500': activeTab === 'lostTab' }"
          >
            <span class="material-symbols-outlined font-bold">
              conditions
            </span>
            <span class="flex-1 ml-3 whitespace-nowrap">Lost Category</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-400 dark:hover:bg-gray-700"
            @click="
              foundOnly();
              activeTab = 'foundTab';
            "
            :class="{ 'bg-green-500': activeTab === 'foundTab' }"
          >
            <span class="material-symbols-outlined font-bold">
              search_check
            </span>
            <span class="flex-1 ml-3 whitespace-nowrap">Found Category</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Resolved</span>
          </a>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'conversations' }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="material-symbols-outlined">chat</span>
            <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
              >3</span
            >
          </RouterLink>
        </li>
        <li>
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
  </aside>

  <div class="body flex flex-col sm:ml-64 mt-12 flex-wrap content-center">
    <div class="flex flex-row flex-wrap bg-gray-100">
      <div
        v-for="(report, index) in reports"
        :key="report.post_id"
        class="bg-white border w-[390px] grow shrink mb-1 max-w-lg border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex justify-between px-4 pt-4">
          <p class="font-bold text-lg">{{ report.category }}</p>
          <div
            class="flex rounded-full hover:bg-[#4DEC9A] justify-center relative"
            :class="{ 'border-[1px]': isCurrentUser(report.user) }"
          >
            <button
              v-if="isCurrentUser(report.user)"
              class="rounded-full px-[1.5px] flex justify-items-center hover:bg-green-500 transition-all duration-500 ease-in-out"
              @click="toggleDropdown(report)"
              :class="{ 'bg-green-500': report.isOpen }"
            >
              <span
                class="material-symbols-outlined active:rotate-90 transition-all"
              >
                {{ report.isOpen ? "close" : "more_horiz" }}
              </span>
            </button>
            <div
              v-if="report.isOpen"
              class="flex bg-gray-300 flex-col top-[1.8rem] rounded-lg absolute"
            >
              <button
                v-for="item in items"
                @click="executeAction(item.action, report.post_id)"
                class="mx-1 hover:bg-green-500 rounded-lg px-2"
              >
                {{ item.label }}
              </button>
            </div>
          </div>
        </div>
        <div
          @click="displayPostDetails(report)"
          class="flex flex-col items-center bg-white border-t border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            :src="!report.imageURL ? '/img/empty.jpg' : report.imageURL"
          />
          <div class="flex flex-col p-4 w-full md:w-2/3 leading-normal">
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
                <span>
                  {{ report.user }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center z-50"
      v-if="reports.length === 0"
    >
      <div class="loader">Loading reports</div>
    </div>
    <div
      v-if="showFullDescription"
      class="fixed top-0 left-0 right-0 bottom-0 z-45"
    >
      <div
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row h-[100vh] w-full dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-contain w-auto bg-black rounded-t-lg h-52 md:w-full md:h-full md:rounded-none md:rounded-l-lg"
          :src="!thisPost.imageURL ? '/img/empty.jpg' : thisPost.imageURL"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 md:w-2/5 leading-normal">
          <div class="flex justify-between">
            <div class="flex flex-row">
              <img
                class="w-11 h-11 rounded-full border border-black"
                src="/img/profile.jpg"
                alt="user photo"
              />
              <div class="px-2 flex flex-col">
                <button @click="toggleUserInfo(thisPost)" class="font-semibold">
                  {{ thisPost.user }}
                </button>
                <div
                  v-if="showModal"
                  class="fixed top-0 left-0 right-0 bottom-0 z-50"
                >
                  <div
                    class="bg-green-400 p-6 rounded max-w-sm mx-auto mt-16 flex flex-col"
                  >
                    <div class="flex flex-col">
                      <span class="font-normal text-base mt-2">Username</span>
                      <p
                        class="font-medium pr-1 pb-1 text-base w-50 bg-transparent pointer-events-none"
                      >
                        {{ author.username }}
                      </p>
                      <span class="font-normal text-base mt-2"
                        >Email Address</span
                      >
                      <input
                        class="font-medium pr-1 pb-1 text-base w-50 bg-transparent pointer-events-none"
                        type="text"
                        v-model="author.email"
                      />
                    </div>
                    <button
                      @click="toggleUserInfo(thisPost)"
                      class="bg-red-500 p-2 text-white rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
                <p class="text-gray-600 text-xs font-bold">
                  {{
                    calculateTimeElapsed(
                      thisPost.dateCreated,
                      thisPost.timeCreated
                    )
                  }}
                </p>
              </div>
            </div>
            <span class="font-semibold text-base">{{ thisPost.category }}</span>
          </div>
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ thisPost.header }}
          </h5>
          <p>Location: {{ thisPost.location }}</p>
          <p>Date: {{ thisPost.date }}</p>
          <p>Time: {{ thisPost.time }}</p>
          <div class="border-2 border-green-600 w-200 py-1 rounded mt-2">
            <h1 class="font-bold m-2">Additional information:</h1>
            <p class="m-2">
              {{ thisPost.more_info }}
            </p>
          </div>
          <div class="flex justify-center my-4">
            <div class="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                @click="displayPostDetails(thisPost)"
                class="px-4 py-2 text-sm font-medium text-black bg-transparent border border-b border-red-500 rounded-l-md hover:bg-red-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-red-500 focus:bg-red-500 focus:text-white"
              >
                Close
              </button>
              <button
                v-if="!isCurrentUser(thisPost.user)"
                type="button"
                class="px-4 py-2 text-sm font-medium text-black bg-transparent border border-b border-green-500 rounded-r-md hover:bg-green-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-green-500 focus:bg-green-500 focus:text-white"
              >
                Message
              </button>
              <button
                v-if="isCurrentUser(thisPost.user)"
                type="button"
                @click="togglePostDropdown(thisPost)"
                class="px-4 py-2 text-sm font-medium text-black bg-transparent border border-b border-green-500 rounded-r-md hover:bg-green-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-green-500 focus:bg-green-500 focus:text-white"
              >
                Options
              </button>
              <div
                v-if="thisPost.isOpen"
                class="flex bg-gray-300 flex-col rounded-lg absolute"
              >
                <button
                  v-for="item in items"
                  @click="executeAction(item.action, thisPost.post_id)"
                  class="mx-1 hover:bg-green-500 rounded-lg px-2"
                >
                  {{ item.label }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
