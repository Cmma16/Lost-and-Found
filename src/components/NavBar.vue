<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  data() {},
});
</script>

<template>
  <nav
    class="menu sticky top-0 z-50 bg-white sm:mx-auto mx-0 rounded-lg shadow-md"
  >
    <ul class="flex flex-row items-stretch justify-between">
      <li class="mx-1 my-2 px-3 rounded-full sm:block hidden">
        <a class="flex justify-items-center" href="">
          <span class="material-symbols-outlined"> menu </span>
          All
        </a>
      </li>
      <li class="mx-1 my-2 px-3 rounded-full sm:block hidden">
        <a class="flex justify-items-center" href="">
          <span class="material-symbols-outlined"> help_center </span>
          Lost
        </a>
      </li>
      <li class="mx-1 my-2 px-3 rounded-full sm:block hidden">
        <a class="flex justify-items-center" href="">
          <span class="material-symbols-outlined"> search_check </span>
          Found
        </a>
      </li>
      <li class="mx-1 flex items-stretch">
        <div
          class="bg-[#4DEC9A] flex flex-row justify-items-center my-1 py-1 w-lg rounded-full"
        >
          <input
            type="text"
            placeholder="Search"
            class="bg-[#4DEC9A] placeholder:text-white ml-3 focus:outline-none max-w-[320px]"
          />
          <button
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
</template>
