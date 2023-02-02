<script>
import {
  addDoc,
  collection,
  doc,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { ref, onMounted } from "vue";
import { db } from "@/firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  setup() {
    return {};
  },
  data() {
    const auth = getAuth();

    const newReportCategory = ref("");
    const newReportHeader = ref("");
    const newReportDate = ref("");
    const newReportLocation = ref("");
    const newReportInfo = ref("None");
    const newReportTime = ref("");
    const username = ref("");

    onMounted(async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          getUserUID(user.uid);
        }
      });
    });

    async function getUserUID(userID) {
      console.log(userID);
      const q = query(collection(db, "users"), where("uid", "==", userID));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const tempUsername = doc.data().username;
        username.value = tempUsername;
      });
    }

    const createReport = () => {
      addDoc(collection(db, "reports"), {
        category: newReportCategory.value,
        date: newReportDate.value,
        header: newReportHeader.value,
        location: newReportLocation.value,
        more_info: newReportInfo.value,
        time: newReportTime.value,
        user: this.username,
      });
      this.$router.push({ path: "/posts" });
      alert("Report published successfully");
    };
    return {
      createReport,
      incomplete: true,
      newReportCategory,
      newReportHeader,
      newReportDate,
      newReportLocation,
      newReportInfo,
      newReportTime,
      username,
    };
  },
  components: {},
  methods: {
    postReport() {
      if (
        newReportCategory &&
        newReportDate &&
        newReportHeader &&
        newReportInfo &&
        newReportLocation &&
        newReportTime
      ) {
        this.incomplete = false;
      } else this.incomplete = true;
    },
  },
};
</script>

<template>
  <div
    class="body flex pt-5 bg-cover bg-center bg-fixed bg-gradient-to-b from-[#1ebe1e] to-white"
  >
    <div class="mx-auto flex flex-row">
      <div class="flex flex-col items-stretch">
        <div
          class="flex flex-col bg-white min-h-screen sm:min-h-full shadow-lg"
        >
          <div class="bg-green-700 h-12 flex">
            <p class="font-bold my-auto text-xl self-start ml-3">
              Create Report
            </p>
          </div>
          <form class="mx-8 flex flex-col h" @submit.prevent="createReport">
            <span class="flex">
              <select
                name=" optionlist "
                placeholder="Select Category"
                v-model="newReportCategory"
                class="p-1 border-green-700 border-[1px] my-3 sm:w-64 rounded-md focus:outline-none"
              >
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
              </select>
            </span>
            <div class="flex flex-row mb-7">
              <img src="/img/images.jpg" class="max-h-28 aspect-square" />
              <div class="flex flex-col justify-items-end ml-3 pt-8">
                <button
                  class="bg-green-800 text-white mt-auto mb-0 px-2"
                  @click=""
                >
                  Add Photo
                </button>
                <button
                  class="border-green-800 border-[1px] text-black mt-auto mb-0 px-2"
                >
                  Remove Photo
                </button>
              </div>
            </div>
            <input
              type="text"
              v-model="newReportHeader"
              placeholder="Post Title"
              class="p-1 border-[1.5px] border-gray-500 focus: outline-none my-1 rounded-md"
              required
            />
            <input
              type="text"
              v-model="newReportLocation"
              placeholder="Location"
              class="p-1 border-[1.5px] border-gray-500 focus: outline-none my-1 rounded-md"
              required
            />
            <div class="flex flex-row">
              <div class="flex flex-col mr-1">
                <p>Date</p>
                <input
                  type="text"
                  v-model="newReportDate"
                  placeholder="DD-MM-YYYY"
                  class="p-1 border-[1.5px] border-gray-500 focus: outline-none my-1 rounded-md placeholder:text-black"
                  required
                />
              </div>
              <div class="flex flex-col ml-1">
                <p>Time</p>
                <input
                  type="text"
                  v-model="newReportTime"
                  placeholder="HH : MM"
                  class="p-1 border-[1.5px] border-gray-500 focus: outline-none my-1 rounded-md placeholder:text-black"
                  required
                />
              </div>
            </div>
            <textarea
              name="more-info"
              cols="30"
              rows="5"
              v-model="newReportInfo"
              placeholder="More Information (optional)"
              class="focus: outline-none border-[1.5px] border-gray-500 p-1"
            ></textarea>
            <div class="flex flex-row my-3 justify-end">
              <RouterLink to="/posts" class="flex flex-row">
                <button
                  class="border-green-800 border-[1.5px] text-black px-2 rounded"
                >
                  Cancel
                </button>
              </RouterLink>
              <button
                class="bg-green-800 text-white ml-2 px-2 rounded"
                type="submit"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
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
