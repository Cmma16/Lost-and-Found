<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center z-50"
    v-if="newReportTime == ''"
  >
    <div class="loader">Loading reports</div>
  </div>

  <!---Alert dialog-->
  <div
    v-if="alertDetails.alertContent != null"
    ref="animatedDiv"
    class="flex p-4 z-50 fixed top-1 w-80 text-sm items-center justify-between text-green-800 rounded-lg bg-green-50 transition-opacity duration-1000 ease-out animate-slide-in-left"
  >
    <div class="flex items-center">
      <span class="material-symbols-outlined pr-2">
        {{ alertDetails.alertIcon }}
      </span>
      <span class="font-medium">{{ alertDetails.alertContent }}</span>
    </div>
    <button
      type="button"
      id="closeBtn"
      @click="closeDiv"
      class="text-xl font-bold"
    >
      &times;
    </button>
  </div>
  <!---Alert dialog-->

  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Update report
      </h2>
      <form action="#" @submit.prevent="updateReport">
        <div class="flex flex-row mb-7"></div>
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="user_avatar"
            >
              Upload a picture<span class="font-normal">(optional)</span>
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              ref="imgInput"
              type="file"
            />
            <div
              class="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="user_avatar_help"
            ></div>
          </div>
          <div>
            <label
              for="category"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Category</label
            >
            <select
              id="category"
              name=" optionlist "
              v-model="newReportCategory"
              required=""
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option value="" disabled selected>Select category</option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>
          <div class="sm:col-span-2">
            <label
              for="item_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Item name</label
            >
            <input
              type="text"
              name="item_name"
              id="item_name"
              v-model="newReportHeader"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type item name"
              required=""
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="location"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Location</label
            >
            <input
              type="text"
              name="location"
              id="location"
              v-model="newReportLocation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type location"
              required=""
            />
          </div>
          <div class="w-full">
            <label
              for="date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Date</label
            >
            <input
              type="date"
              name="date"
              id="date"
              :max="maxDate"
              v-model="newReportDate"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder=""
              required=""
            />
          </div>
          <div class="w-full">
            <label
              for="time"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Time</label
            >
            <input
              type="time"
              v-model="newReportTime"
              name="time"
              id="time"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder=""
              required=""
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Description<span class="font-normal">(optional)</span></label
            >
            <textarea
              id="description"
              rows="8"
              v-model="newReportInfo"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your description here"
            ></textarea>
          </div>
        </div>
        <div class="flex flex-row">
          <button
            type="submit"
            class="inline-flex items-center mx-1 px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-green-800"
          >
            <span class="material-symbols-outlined"> save </span>
            Update report
          </button>
          <button
            type="button"
            id="deleteButton"
            data-modal-toggle="deleteModal"
            class="inline-flex items-center mx-1 px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center border-2 border-red-500 bg-white text-red-500 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-red-100"
          >
            <span class="material-symbols-outlined"> delete </span>
            Delete
          </button>
          <RouterLink to="/posts" class="flex flex-row mx-1">
            <button
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm border-green-700 border-2 font-medium text-center bg-white text-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-green-50"
            >
              <span class="material-symbols-outlined"> cancel </span>
              Cancel
            </button>
          </RouterLink>
        </div>
      </form>
    </div>
  </section>

  <!-- Main modal -->
  <div
    id="deleteModal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
  >
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      <!-- Modal content -->
      <div
        class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
      >
        <button
          type="button"
          class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="deleteModal"
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
        <svg
          class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p class="mb-4 text-gray-500 dark:text-gray-300">
          Are you sure you want to delete this item?
        </p>
        <div class="flex justify-center items-center space-x-4">
          <button
            data-modal-toggle="deleteModal"
            type="button"
            class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            No, cancel
          </button>
          <button
            type="button"
            @click="deleteReport(this.postId)"
            data-modal-toggle="deleteModal"
            class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Yes, I'm sure
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { storeKey, useStore } from "vuex";
import { ref, onMounted } from "vue";
import router from "../router";
import { db } from "@/firebase";
import {
  doc,
  updateDoc,
  getDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { initFlowbite } from "flowbite";

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
    const alertDetails = ref({});

    let triggerAlert = false;

    onMounted(async () => {
      initFlowbite();

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
      this.toggleAlert("Post successfully updated!", "update");
      setTimeout(() => {
        alertDetails.value.alertContent = null;
        this.$router.push({ path: "/posts" });
      }, 2000);
    };

    async function deleteReport(id) {
      await deleteDoc(doc(db, "reports", id));
      this.toggleAlert("Post successfully deleted!", "delete");
      setTimeout(() => {
        alertDetails.value.alertContent = null;
        router.push({ path: "/posts" });
      }, 2000);
    }

    function toggleAlert(alertContent, action_type) {
      let alertIcon;
      switch (action_type) {
        case "update":
          alertIcon = "check_circle";
          break;
        case "delete":
          alertIcon = "delete";
          break;
      }
      const tempAlertD = {
        alertContent: alertContent,
        action_type: action_type,
        alertIcon: alertIcon,
      };
      alertDetails.value = tempAlertD;
      //triggerAlert = true;
    }

    return {
      updateReport,
      alertDetails,
      deleteReport,
      newReportCategory,
      newReportHeader,
      maxDate: new Date().toISOString().split("T")[0],
      newReportDate,
      triggerAlert: false,
      toggleAlert,
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

    closeDiv() {
      this.$refs.animatedDiv.classList.add("animate-slide-out-left");
      this.$refs.animatedDiv.classList.remove("animate-slide-in-left");
      setTimeout(() => {
        this.alertDetails.alertContent = null;
      }, 500);
    },
  },
};
</script>
