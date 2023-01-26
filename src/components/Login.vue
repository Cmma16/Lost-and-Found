<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    checkInput() {
      if (this.inputValue === "") {
        alert("The input is empty!");
      } else {
        alert("The input is not empty.");
      }
    },
  },
};
</script>

<template>
  <div class="form bg-white flex flex-col content-center mx-auto h-screen">
    <div class="my-auto bg-[#4DEC9A] mx-auto py-20 px-20 flex flex-col">
      <h1 class="text-black my-2 font-bold text-2xl">Log in</h1>
      <p class="text-black mt-1">Username</p>
      <input
        type="text"
        v-model="inputValue"
        class="focus:outline-none mb-1 border-[1px] border-black"
      />
      <p class="text-black mt-1">Password</p>
      <input
        type="text"
        name="username"
        class="focus:outline-none mb-1 border-[1px] border-black w-64"
      />
      <button @click="checkInput()" class="bg-green-700 rounded-sm h-9 mt-4">
        <RouterLink to="/posts">Login</RouterLink>
      </button>
      <p class="mt-3">
        Do not have an account?
        <a class="text-blue-700" href=""><u>Sign up</u></a>
      </p>
    </div>
  </div>
</template>
