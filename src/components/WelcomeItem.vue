<template>
  <div class="flex flex-col items-stretch mx-auto max-w-[532.92px]">
    <div
      class="postcard mt-1 mx-0 flex flex-col p-6 bg-white rounded-lg shadow-xl"
    >
      <div class="flex justify-between">
        <p class="font-bold">
          <slot name="category"></slot>
        </p>
        <p class="text-gray-600 font-bold"><slot name="time-passed"></slot></p>
      </div>
      <div class="flex sm:flex-col justify-between">
        <div class="flex flex-col m-1">
          <p class="text-2xl font-bold"><slot name="header"></slot></p>
          <p>Location: <slot name="Location"></slot></p>
          <p>Date:</p>
          <p>Time:</p>
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
          <slot name="add-info"></slot>
        </p>
      </div>
      <div class="flex justify-between mt-2">
        <div class="flex">
          <img src="/img/userprofile.jpeg" class="h-7 w-7 rounded-full mr-1" />
          <a href="">User</a>
        </div>
        <button class="">See more...</button>
      </div>
    </div>
  </div>
</template>