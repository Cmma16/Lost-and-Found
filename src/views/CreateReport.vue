<script>
import {
  addDoc,
  collection,
  doc,
  getDocs,
  Timestamp,
  where,
  query,
  snapshotEqual,
} from "firebase/firestore";
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import {
  getStorage,
  ref as stRef,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import router from "../router";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  setup() {
    return {};
  },
  data() {
    const auth = getAuth();
    const storage = getStorage();

    const newReportCategory = ref("");
    const newReportHeader = ref("");
    const newReportDate = ref("");
    const newReportLocation = ref("");
    const newReportInfo = ref("");
    const newReportTime = ref("");
    const username = ref("");
    const imgPath = ref("");

    const alertContent = ref("");

    onMounted(async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          getUserUID(user.uid);
        }
      });
    });

    async function getUserUID(userID) {
      //console.log(userID);
      const q = query(collection(db, "users"), where("uid", "==", userID));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        const tempUsername = doc.data().username;
        username.value = tempUsername;
      });
    }
    async function uploadImage(img) {
      //console.log(img.name);
      if (img) {
        const storageRef = stRef(storage, "postImages/" + img.name);
        const taskUpload = uploadBytesResumable(storageRef, img);
        await taskUpload;
        const imageURL = getDownloadURL(storageRef);
        return await imageURL;
      } else {
        return "";
      }
    }

    async function createNewReport(imgURL) {
      const docRef = addDoc(collection(db, "reports"), {
        category: newReportCategory.value,
        date: newReportDate.value,
        header: newReportHeader.value,
        location: newReportLocation.value,
        more_info: newReportInfo.value,
        time: newReportTime.value,
        user: this.username,
        created_at: Timestamp.now(),
        imageURL: await imgURL,
      }).then((docRef) => {
        const uid = docRef.id;
        //console.log("The UID of the created document is:", uid);
      });
      alertContent.value = "Report published successfully";
      setTimeout(() => {
        alertContent.value = "";
        router.push({ path: "/posts" });
      }, 2000);
    }

    /*const createReport = () => {
      const docRef = addDoc(collection(db, "reports"), {
        category: newReportCategory.value,
        date: newReportDate.value,
        header: newReportHeader.value,
        location: newReportLocation.value,
        more_info: newReportInfo.value,
        time: newReportTime.value,
        user: this.username,
        timeCreated: this.currentTime,
        dateCreated: this.currentDate,
        imageURL: imgPath.value,
      }).then((docRef) => {
        const uid = docRef.id;
        //console.log("The UID of the created document is:", uid);
      });
      alertContent.value = "Report published successfully"
      this.$router.push({ path: "/posts" });
    };*/
    return {
      //createReport,
      createNewReport,
      uploadImage,
      imagePreview: null,
      isOpen: false,
      newReportCategory,
      alertContent,
      newReportHeader,
      newReportDate,
      newReportLocation,
      newReportInfo,
      newReportTime,
      maxDate: new Date().toISOString().split("T")[0],
      imgPath,
      username,
      storage,
      img: null,
      currentDate: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }), // Get current date in "Month day, year" format
      currentTime: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }), // Get current time in "hour:minute:second" format
    };
  },
  components: {},
  methods: {
    toggleAddImageBtn() {
      this.isOpen = !this.isOpen;
    },
    selectImage() {
      this.$refs.fileInput.click();
    },
    async handleUploadImage() {
      const inputFile = this.$refs.imgInput;
      const file = inputFile.files[0];
      const imgURL = await this.uploadImage(file);
      return imgURL;
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

<template>
  <!---Alert dialog-->
  <div
    v-if="alertContent != ''"
    ref="animatedDiv"
    class="flex p-4 z-50 fixed top-1 w-80 text-sm items-center justify-between text-green-800 rounded-lg bg-green-50 transition-opacity duration-1000 ease-out animate-slide-in-left"
  >
    <div class="flex items-center">
      <span class="material-symbols-outlined pr-2"> check_circle </span>
      <span class="font-medium">{{ alertContent }}</span>
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
        Add a new report
      </h2>
      <form action="#" @submit.prevent="createNewReport(handleUploadImage())">
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
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Report Title</label
            >
            <input
              type="text"
              name="title"
              id="title"
              v-model="newReportHeader"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type report title"
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
            class="inline-flex items-center mx-1 px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-green-800"
          >
            Publish report
          </button>
          <RouterLink to="/posts" class="flex flex-row mx-1">
            <button
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm border-green-700 border-2 font-medium text-center bg-white text-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-green-50"
            >
              Cancel
            </button>
          </RouterLink>
        </div>
      </form>
    </div>
  </section>
</template>

<style>
.image-holder {
  background-image: url("/img/empty.jpg");
}
</style>
