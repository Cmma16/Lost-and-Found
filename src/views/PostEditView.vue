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
            <p class="font-bold my-auto text-xl self-start ml-3">Edit Report</p>
          </div>
          <form class="mx-8 flex flex-col h" @submit.prevent="updateReport">
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
                  type="date"
                  v-model="newReportDate"
                  placeholder="DD-MM-YYYY"
                  class="p-1 border-[1.5px] border-gray-500 focus: outline-none my-1 rounded-md placeholder:text-black"
                  required
                />
              </div>
              <div class="flex flex-col ml-1">
                <p>Time</p>
                <input
                  type="time"
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

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

    const updateReport = async () => {
      const reportRef = doc(db, "reports", this.postId);
      await updateDoc(reportRef, {
        category: newReportCategory.value,
        date: newReportDate.value,
        header: newReportHeader.value,
        location: newReportLocation.value,
        more_info: newReportInfo.value,
        time: newReportTime.value,
      });
      this.$router.push({ path: "/posts" });
      alert("Report updated successfully");
    };

    return {
      updateReport,
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
