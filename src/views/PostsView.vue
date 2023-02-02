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
import NavBar from "../components/NavBar.vue";
import Posts from "../components/Posts.vue";
import SideBar from "../components/SideBar.vue";
import router from "../router";

export default {
  data() {
    const reports = ref([]);
    const search = ref("");
    let fbReports = [];
    let activeTab = "allTab";

    onMounted(async () => {
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
        };
        fbReports.push(report);
      });
      reports.value = fbReports;
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

    return {
      reports,
      search,
      searchReports,
      deleteReport,
      lostOnly,
      foundOnly,
      displayAll,
      activeTab,
      isOpen: false,
      items: [
        { label: "Delete", action:async (id) => {
          reports.value = reports.value.filter((report) => report.post_id !== id);
          await deleteDoc(doc(db, "reports", id));
        }},
        { label: "Modify", action: (id) => router.push({ name: "postsDetails" }) },
      ],
    };
  },
  components: {
    Posts,
    NavBar,
    SideBar,
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    executeAction(action, id) {
      this.isOpen = false;
      action(id);
    }
  },
};
</script>

<template>
  <div
    class="body flex bg-cover bg-center bg-fixed bg-gradient-to-b from-[#1ebe1e] to-white"
  >
    <div class="mx-auto flex flex-row">
      <div class="flex flex-col items-stretch">
        <nav
          class="menu sticky top-0 z-50 bg-white sm:mx-auto mx-0 mb-2 rounded-lg shadow-md"
        >
          <ul class="flex flex-row items-stretch justify-between">
            <li class="mx-1 my-2 px-1 rounded-full sm:block hidden">
              <button
                class="flex justify-items-center px-2 py-1 rounded-full"
                @click="
                  displayAll();
                  activeTab = 'allTab';
                "
                :class="{ 'bg-green-500': activeTab === 'allTab' }"
              >
                <span class="material-symbols-outlined"> menu </span>
                All
              </button>
            </li>
            <li class="mx-1 my-2 px-1 rounded-full sm:block hidden">
              <button
                class="flex justify-items-center px-2 py-1 rounded-full"
                @click="
                  lostOnly();
                  activeTab = 'lostTab';
                "
                :class="{ 'bg-green-500': activeTab === 'lostTab' }"
              >
                <span class="material-symbols-outlined"> help_center </span>
                Lost
              </button>
            </li>
            <li class="mx-1 my-2 px-1 rounded-full sm:block hidden">
              <button
                class="flex justify-items-center px-2 py-1 rounded-full"
                @click="
                  foundOnly();
                  activeTab = 'foundTab';
                "
                :class="{ 'bg-green-500': activeTab === 'foundTab' }"
              >
                <span class="material-symbols-outlined"> search_check </span>
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
                  class="material-symbols-outlined rounded-full text-white mr-3"
                >
                  search
                </button>
              </div>
            </li>
            <li class="mx-1 my-2 pr-1 rounded-full">
              <button class="material-symbols-outlined">filter_list</button>
            </li>
          </ul>
        </nav>
        <div v-for="report in reports" :key="report.post_id">
          <div
            class="postcard mb-1 mx-0 flex flex-col p-6 bg-white rounded-lg shadow-xl"
          >
            <div class="flex justify-between">
              <p class="font-bold">{{ report.category }}</p>
              <p class="text-gray-600 font-bold">Today, 4hrs ago</p>
            </div>
            <div class="flex sm:flex-col justify-between">
              <div class="flex flex-col m-1">
                <p class="text-2xl font-bold">{{ report.header }}</p>
                <p>Location: {{ report.location }}</p>
                <p>Date: {{ report.date }}</p>
                <p>Time: {{ report.time }}</p>
              </div>
              <div
                class="bg-black rounded-lg sm:rounded-none sm:flex sm:justify-center sm:m-1"
              >
                <img
                  src="/img/images.jpg"
                  class="h-[120px] w-[120px] rounded-lg sm:h-fit sm:w-fit sm:rounded-none"
                />
              </div>
            </div>
            <div
              class="border-2 border-green-600 w-200 py-1 rounded mx-1 mt-2 max-w-[484.92px]"
            >
              <h1 class="font-bold m-2">Additional information:</h1>
              <p class="m-2">
                {{ report.more_info }}
              </p>
            </div>
            <div class="flex justify-between mt-2">
              <div class="flex">
                <img
                  src="/img/userprofile.jpeg"
                  class="h-7 w-7 rounded-full mr-1"
                />
                <a href="">{{ report.user }}</a>
              </div>
              <div class="flex border-[1px] rounded-full hover:bg-[#4DEC9A]">
                <button
                  class="rounded-full px-[1.5px] flex justify-items-center hover:bg-green-500 z-10 transition-all duration-500 ease-in-out"
                  @pointerenter="toggleDropdown"
                  :class="{ 'bg-green-500': isOpen }"
                >
                  <span class="material-symbols-outlined"> more_horiz </span>
                </button>
                <transition name="fade">
                  <div v-if="isOpen" @pointerleave="toggleDropdown" class="">
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
      <SideBar />
    </div>
  </div>
</template>

<style>
/*.body {
  background-image: url("/img/bgs.jpg");
}*/
</style>
<!--<div class="posts">
    <h1>Posts</h1>

    <ul>
      <li>
        <RouterLink to="/postDetail/id1">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id2">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id3">Post 3</RouterLink>
      </li>
    </ul>
  </div>-->
