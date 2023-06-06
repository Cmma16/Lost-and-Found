<script>
import {
  addDoc,
  collection,
  doc,
  getDocs,
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
import "firebase/storage";

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
      const storageRef = stRef(storage, "postImages/" + img.name);
      const taskUpload = uploadBytesResumable(storageRef, img);
      await taskUpload;
      const imageURL = getDownloadURL(storageRef);
      return await imageURL;
    }

    const createReport = () => {
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
        imagePath: imgPath.value,
      }).then((docRef) => {
        const uid = docRef.id;
        //console.log("The UID of the created document is:", uid);
      });
      this.$router.push({ path: "/posts" });
      alert("Report published successfully");
    };
    return {
      createReport,
      uploadImage,
      imagePreview: null,
      isOpen: false,
      newReportCategory,
      newReportHeader,
      newReportDate,
      newReportLocation,
      newReportInfo,
      newReportTime,
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
    async handleUploadImage(event) {
      const img = event.target.files[0];
      this.imagePreview = URL.createObjectURL(img);
      this.imgPath = await this.uploadImage(img);
      console.log("ImageURL:" + this.imgPath);
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
                <option value="" disabled selected>Select Category</option>
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
              </select>
            </span>
            <div class="flex flex-row mb-7">
              <div
                class="image-holder border-[1px] border-black aspect-square min-w-[112px] bg-cover bg-center flex flex-col justify-center relative"
                @pointerenter="toggleAddImageBtn"
                @pointerleave="toggleAddImageBtn"
              >
                <img
                  v-if="imagePreview"
                  :src="imagePreview"
                  class="max-h-28 aspect-square object-cover"
                />
                <button
                  v-if="isOpen"
                  class="border-green-800 border-[1px] text-black py-[1px] px-3 rounded-full absolute self-center hover:bg-green-400"
                  @click="selectImage"
                  type="button"
                >
                  Add Photo
                </button>
                <input
                  type="file"
                  ref="fileInput"
                  @change="handleUploadImage"
                  class="hidden"
                />
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
                  placeholder="<Month> <Day>, <Year>"
                  class="p-1 border-[1.5px] border-gray-500 focus: outline-none my-1 rounded-md"
                  required
                />
              </div>
              <div class="flex flex-col ml-20">
                <p>Time</p>
                <input
                  type="time"
                  v-model="newReportTime"
                  placeholder="HH:MM AM/PM"
                  class="p-1 border-[1.5px] border-gray-500 focus: outline-none my-1 rounded-md"
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

<style>
.image-holder {
  background-image: url("/img/empty.jpg");
}
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
