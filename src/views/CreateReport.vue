<script>
import SideBar from "../components/SideBar.vue";
import { ref } from "vue";

//const
/*
const createReport = () => {
  const newReport = {
    post_id: "id1",
    category: "",
    time_passed: "",
    header: "",
    location: "",
    date: "",
    time: "",
    more_info: "",
    user: "",
  };
};*/
export default {
  data() {
    return {};
  },
  components: {
    SideBar,
  },
  methods: {},
};
</script>

<template>
  <div class="body flex bg-[#F4F4F4]">
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
          <div class="mx-8 flex flex-col h">
            <span class="flex">
              <select
                name=" optionlist "
                placeholder="Select Category"
                onChange="combo(this, 'demo')"
                class="p-1 border-green-700 border-[1px] my-3 sm:w-64 rounded-md focus:outline-none"
              >
                <option>Select Category</option>
                <option>Lost</option>
                <option>Found</option>
              </select>
            </span>
            <div class="flex flex-row mb-7">
              <img src="/img/images.jpg" class="max-h-28 aspect-square" />
              <div class="flex flex-col justify-items-end ml-3 pt-8">
                <button class="bg-green-800 text-white mt-auto mb-0 px-2">
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
              name="title"
              placeholder="Post Title"
              class="p-1 border-[1.5px] border-gray-500 focus: outline-none my-1 rounded-md"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              class="p-1 border-[1.5px] border-gray-500 focus: outline-none my-1 rounded-md"
            />
            <div class="flex flex-row">
              <div class="flex flex-col mr-1">
                <p>Date</p>
                <input
                  type="text"
                  name="date"
                  placeholder="DD-MM-YYYY"
                  class="p-1 border-[1.5px] border-gray-500 focus: outline-none my-1 rounded-md placeholder:text-black"
                />
              </div>
              <div class="flex flex-col ml-1">
                <p>Time</p>
                <input
                  type="text"
                  name="time"
                  placeholder="HH : MM"
                  class="p-1 border-[1.5px] border-gray-500 focus: outline-none my-1 rounded-md placeholder:text-black"
                />
              </div>
            </div>
            <textarea
              name="more-info"
              cols="30"
              rows="5"
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
              <button class="bg-green-800 text-white ml-2 px-2 rounded">
                Publish
              </button>
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
