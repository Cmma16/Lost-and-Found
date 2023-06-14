<script>
import { useRoute, useRouter } from "vue-router";
import { storeKey, useStore } from "vuex";
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { doc, updateDoc, getDoc, collection } from "firebase/firestore";
import { async } from "@firebase/util";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    return {
      store,
    };
  },
  data() {
    const newReportCategory = ref("");
    const newReportHeader = ref("");
    const newReportDate = ref("");
    const newReportLocation = ref("");
    const newReportInfo = ref("None");
    const newReportTime = ref("");
    const username = ref("");

    onMounted(async () => {
      const docRef = doc(db, "reports", this.postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        newReportCategory.value = docSnap.data().category;
        newReportHeader.value = docSnap.data().header;
        newReportLocation.value = docSnap.data().location;
        newReportDate.value = docSnap.data().date;
        newReportTime.value = docSnap.data().time;
        newReportInfo.value = docSnap.data().more_info;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });

    return {
      newReportCategory,
      newReportHeader,
      newReportDate,
      newReportLocation,
      newReportInfo,
      newReportTime,
    };
  },
  computed: {
    postId() {
      return this.store.state.post_id;
    },
  },
  methods: {
    usePostId() {
      if (this.postId) {
        console.log(`The post id is: ${this.postId}`);
      }
    },
  },
};
</script>

<template>
  <div
    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row h-[100vh] w-full dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      class="object-contain w-full bg-black rounded-t-lg h-96 md:h-full md:rounded-none md:rounded-l-lg"
      src="/img/empty.jpg"
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
            <span class="font-semibold">Username</span>
            <p class="text-gray-600 text-xs font-bold">Today, 4hrs ago</p>
          </div>
        </div>
        <span class="font-semibold text-base">Lost</span>
      </div>
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        header
      </h5>
      <p>Location: report.location</p>
      <p>Date: report.date</p>
      <p>Time: report.time</p>
      <div class="border-2 border-green-600 w-200 py-1 rounded mt-2">
        <h1 class="font-bold m-2">Additional information:</h1>
        <p class="m-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique
          consequuntur sapiente, cupiditate officia optio reprehenderit sint
          eligendi laboriosam neque quisquam atque molestias vitae magnam minima
          odio, quidem, ex quis?
        </p>
      </div>
      <div class="flex justify-center my-4">
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-black bg-transparent border border-b border-red-500 rounded-l-md hover:bg-red-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-red-500 focus:bg-red-500 focus:text-white"
          >
            Close
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-black bg-transparent border-t border-b border-green-500 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-green-500 focus:bg-green-500 focus:text-white"
          >
            Message
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-black bg-transparent border border-b border-green-500 rounded-r-md hover:bg-green-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-green-500 focus:bg-green-500 focus:text-white"
          >
            Options
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
