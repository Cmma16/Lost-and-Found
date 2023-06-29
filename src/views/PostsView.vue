<script>
import { ref, onMounted } from "vue";
import {
  query,
  where,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  Timestamp,
  orderBy,
  doc,
  getDoc,
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

    const defaultImgPath = "./img/download.png";
    const logoPath = "./img/foundIt icon.png";
    const defaultProfilePic = "./img/profile.jpg";

    onMounted(async () => {
      const storage = getStorage();

      const q = query(collection(db, "reports"), orderBy("created_at", "desc"));
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
          created_at: doc.data().created_at,
          imageURL: doc.data().imageURL,
          isOpen: false,
          showFullDescription: false,
        };
        //console.log(report);
        fbReports.push(report);
      }
      reports.value = fbReports;

      this.displayAll();
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
      console.log(search.value);
      reports.value = fbReports;
      reports.value = reports.value.filter(
        (report) =>
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
    function resolvedOnly() {
      reports.value = fbReports;
      reports.value = reports.value.filter((report) =>
        report.category.includes("Resolved")
      );
    }
    function displayAll() {
      const excludedCategory = "Resolved";
      reports.value = fbReports;
      reports.value = reports.value.filter(
        (report) => report.category !== excludedCategory
      );
    }

    async function getUser(userName) {
      //console.log(userID);
      var aUser = {};
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
        aUser = tempAuthor;
      });
      return aUser;
    }

    async function messageThisUser(report, currUser) {
      const reportCreator = await getUser(report.user);
      const docRef = addDoc(collection(db, "conversations"), {
        chat_Topic: report.header,
        created_At: Timestamp.now(),
        participants: [reportCreator.email, currUser.email],
        updated_At: Timestamp.now(),
      }).then((docRef) => {
        const uid = docRef.id;
        //console.log("The UID of the created document is:", uid);
        router.push({
          path: "/conversations/" + uid,
        });
      });
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
        created_at: post.created_at,
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

      defaultImgPath,
      logoPath,
      defaultProfilePic,

      regex: /[\n\r]/,

      postID: null,
      showModal: false,

      showFullDescription: false,
      maxDescriptionLength: 30,

      getUserInfo,
      getUser,
      getCurrentUser,
      getPostDetail,

      searchReports,
      lostOnly,
      messageThisUser,
      foundOnly,
      resolvedOnly,
      calculateTimeElapsed,
      displayAll,
      activeTab,
      items: [
        {
          label: "Resolve",
          icon: "check_box",
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
          label: "Modify",
          icon: "edit",
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
          <a href="#" class="flex ml-2 md:mr-24">
            <img :src="logoPath" class="h-8 mr-3" alt="FoundIt! Logo" />
            <span
              class="self-center text-xl text-white font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
              >FoundIt!</span
            >
          </a>
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
                  <RouterLink :to="{ path: '/profile' }">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Profile
                    </a>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'conversations' }">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Messages
                    </a>
                  </RouterLink>
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
      <div class="flex mx-4 mb-4 pl-2 flex-row bg-green-400 rounded-lg">
        <input
          class="block w-full p-2 text-sm text-gray-900 rounded-full border-0 bg-transparent placeholder:text-white focus:ring-0 focus:outline-none"
          type="text"
          id="search-navbar"
          v-model="search"
          placeholder="Search..."
        />
        <button
          class="material-symbols-outlined rounded-lg px-2 hover:bg-green-600"
          @click="searchReports"
        >
          Search
        </button>
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
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-400 dark:hover:bg-gray-700"
            @click="
              resolvedOnly();
              activeTab = 'resolvedTab';
            "
            :class="{ 'bg-green-500': activeTab === 'resolvedTab' }"
          >
            <span class="material-symbols-outlined font-bold"> check_box </span>
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

  <div class="body p-4 sm:ml-64 bg-gray-100">
    <div class="p-4 mt-7 rounded-lg">
      <div class="grid-container">
        <div
          v-for="(report, index) in reports"
          :key="report.post_id"
          class="bg-white border w-auto min-w-[444px] max-w-lg border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
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
                  class="mx-1 flex flex-row py-1 hover:bg-green-500 font-medium pr-2 rounded-lg"
                >
                  <span class="material-symbols-outlined mr-2">
                    {{ item.icon }}
                  </span>
                  {{ item.label }}
                </button>
              </div>
            </div>
          </div>
          <div
            @click="displayPostDetails(report)"
            class="flex flex-col items-center bg-white border-gray-200 rounded-lg md:flex-row md:max-w-xl"
          >
            <img
              class="object-scale-down w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              :src="!report.imageURL ? defaultImgPath : report.imageURL"
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
              <div class="flex flex-col justify-between mt-2">
                <div class="flex">
                  <span>
                    {{ report.user }}
                  </span>
                </div>
                <p class="text-gray-600 text-sm font-normal">
                  {{ calculateTimeElapsed(report.created_at) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center z-50"
      v-if="currentUser.email == null"
    >
      <div class="loader">Loading reports</div>
    </div>
    <div
      v-if="showFullDescription"
      class="fixed top-0 left-0 right-0 bottom-0 z-50"
    >
      <div
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row h-[100vh] w-full dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-scale-down w-auto bg-black rounded-t-lg h-52 md:w-full md:h-[30vw] md:rounded-none md:rounded-l-lg"
          :src="!thisPost.imageURL ? defaultImgPath : thisPost.imageURL"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 md:w-2/5 leading-normal">
          <div class="flex justify-between">
            <div class="flex flex-row">
              <img
                class="w-11 h-11 rounded-full border border-black"
                :src="defaultProfilePic"
                alt="user photo"
              />
              <div class="px-2 flex flex-col">
                <button @click="toggleUserInfo(thisPost)" class="font-semibold">
                  {{ thisPost.user }}
                </button>
                <div
                  v-if="showModal"
                  class="fixed top-0 left-0 right-0 bottom-0 z-60"
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
                  {{ calculateTimeElapsed(thisPost.created_at) }}
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
                @click="messageThisUser(thisPost, currentUser)"
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
html {
  background-color: rgb(243 244 246);
}

* {
  scroll-behavior: smooth;
}

.grid-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
