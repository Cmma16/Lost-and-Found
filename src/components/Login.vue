<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const emailL = ref("");
    const passwordL = ref("");
    const emailR = ref("");
    const passwordR = ref("");
    const username = ref("");
    const phone_number = ref("");

    const login = () => {
      store.dispatch("login", {
        email: emailL.value,
        password: passwordL.value,
      });
    };

    const register = () => {
      store.dispatch("register", {
        email: emailR.value,
        password: passwordR.value,
        phone_number: phone_number.value,
        username: username.value,
      });
    };

    return {
      emailL,
      passwordL,
      emailR,
      passwordR,
      username,
      phone_number,
      login,
      register,
    };
  },
  data() {
    return {};
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
  <div
    class="form bg-cover bg-center flex flex-col content-center bg-gradient-to-b from-[#1ebe1e] to-white mx-auto h-screen shadow-xl"
  >
    <div class="my-auto mx-auto flex flex-row items-center">
      <section
        class="form flex flex-col mx-2 bg-[url('/img/prk.png')] bg-cover py-8 px-7 rounded-lg"
      >
        <h1 class="text-white my-2 font-bold text-2xl self-center">Register</h1>
        <form class="flex flex-col" @submit.prevent="register">
          <input
            type="email"
            v-model="emailR"
            placeholder="Email address"
            class="focus:outline-none my-3 border-b-[1px] bg-transparent border-white text-white text-center placeholder:text-white placeholder:text-center placeholder:font-medium focus:text-white focus:text-center focus:font-medium"
            required
          />
          <input
            type="text"
            v-model="username"
            placeholder="Username"
            class="focus:outline-none my-3 border-b-[1px] bg-transparent border-white text-white text-center placeholder:text-white placeholder:text-center placeholder:font-medium focus:text-white focus:text-center focus:font-medium w-64"
            required
          />
          <input
            type="tel"
            v-model="phone_number"
            placeholder="Phone Number"
            class="focus:outline-none my-3 border-b-[1px] bg-transparent border-white text-white text-center placeholder:text-white placeholder:text-center placeholder:font-medium focus:text-white focus:text-center focus:font-medium"
            required
          />
          <input
            type="text"
            v-model="passwordR"
            placeholder="Password"
            class="focus:outline-none my-3 border-b-[1px] bg-transparent border-white text-white text-center placeholder:text-white placeholder:text-center placeholder:font-medium focus:text-white focus:text-center focus:font-medium w-64"
            required
          />
          <button
            type="submit"
            class="bg-green-700 rounded-full h-9 mt-4 text-white"
          >
            Register
          </button>
        </form>
      </section>
      <section
        class="form flex flex-col mx-2 bg-[url('/img/prk.png')] bg-cover py-20 px-7 rounded-lg"
      >
        <h1 class="text-white my-2 font-bold text-2xl self-center">Log in</h1>
        <form class="flex flex-col" @submit.prevent="login">
          <input
            type="email"
            v-model="emailL"
            placeholder="Email Address"
            class="focus:outline-none my-3 border-b-[1px] bg-transparent border-white text-white text-center placeholder:text-white placeholder:text-center placeholder:font-medium focus:text-white focus:text-center focus:font-medium"
            required
          />
          <input
            type="text"
            v-model="passwordL"
            placeholder="Password"
            class="focus:outline-none my-3 border-b-[1px] bg-transparent border-white text-white text-center placeholder:text-white placeholder:text-center placeholder:font-medium focus:text-white focus:text-center focus:font-medium w-64"
            required
          />
          <button
            type="submit"
            class="bg-green-700 h-9 mt-4 text-white rounded-full"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  </div>
</template>
