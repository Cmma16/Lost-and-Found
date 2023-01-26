<script setup></script>

<template>
  <div
    class="left-sidebar mt-12 sticky top-12 z-50 bg-white mx-1 max-h-[470px] hidden md:flex flex-col p-2 rounded-md shadow-sm"
  >
    <div class="m-5 flex flex-col">
      <button class="material-symbols-outlined flex self-end">Settings</button>
      <div class="flex flex-col bg-[#4DEC9A] p-4 mt-2 rounded-md pr-14">
        <div class="flex flex-row items-center">
          <img
            src="/img/userprofile.jpeg"
            class="rounded-full max-h-20 aspect-square"
          />
          <h1 class="font-medium text-2xl ml-2">@USERNAME</h1>
        </div>
        <span class="font-normal text-base mt-2">Name</span>
        <p class="font-medium text-xl">Your Name Here</p>
        <span class="font-normal text-base mt-2">Phone Number</span>
        <p class="font-medium text-xl">0912-345-6789</p>
        <span class="font-normal text-base mt-2">Email Address</span>
        <p class="font-medium text-xl">YourEmail@email.com</p>
      </div>
      <button class="rounded-full bg-[#00A651] h-10 m-3">
        Create New Report
      </button>
    </div>
  </div>
</template>
