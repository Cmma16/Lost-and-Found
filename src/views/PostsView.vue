<script>
import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import NavBar from "../components/NavBar.vue";
import Posts from "../components/Posts.vue";
import SideBar from "../components/SideBar.vue";

export default {
  data() {
    const reports = ref([]);
    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, "reports"));
      let fbReports = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
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
    return {
      count: 3,
      reports,
    };
  },
  components: {
    Posts,
    NavBar,
    SideBar,
  },
  methods: {},
};
</script>

<template>
  <div class="body flex bg-[#F4F4F4]">
    <div class="mx-auto flex flex-row">
      <div class="flex flex-col items-stretch">
        <NavBar />
        <div v-for="report in reports">
          <div
            class="postcard mt-1 mx-0 flex flex-col p-6 bg-white rounded-lg shadow-xl"
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
              class="border-2 border-green-600 w-200 py-1 rounded mx-1 mt-2 max-w-[484.92px] hidden"
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
              <button class="">See more...</button>
            </div>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  </div>
</template>

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
