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
        username: username.value,
      });
    };

    return {
      emailL,
      passwordL,
      emailR,
      passwordR,
      username,
      login,
      register,
    };
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onInput() {
      // Update the name data property whenever the input value changes
      this.name = target.value;
    },

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
  <div class="body flex flex-col-reverse md:flex-row">
    <div
      class="container_one bg-cover bg-right flex bg-[url('/img/vsu2.jpg')] w-full md:w-1/2"
    >
      <div
        class="mx-auto flex flex-row justify-center bg-white h-[82vh] md:h-screen rounded-tr-[100px] w-full"
      >
        <section>
          <div class="main max-h-screen">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <h1
              class="text-black my-2 font-bold sm:mt-28 text-2xl border-l-8 pl-2 border-green-600"
            >
              <span class="text-green-600">FoundIt! </span>
              User Portal
              <p class="text-sm text-gray-500">Begin your session now</p>
            </h1>
            <div class="logins">
              <form class="form mb-[50px]" @submit.prevent="login">
                <label class="lab" for="chk" aria-hidden="true">Log in</label>
                <div class="inputbox">
                  <input type="email" v-model="emailL" class="" required />
                  <span>Email Address</span>
                  <i></i>
                </div>
                <div class="inputbox">
                  <input
                    type="password"
                    v-model="passwordL"
                    class=""
                    required
                  />
                  <span>Password</span>
                  <i></i>
                </div>
                <button
                  type="submit"
                  class="login bg-green-700 h-9 mt-4 text-white"
                >
                  Login
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button>
              </form>
            </div>

            <div class="register">
              <span class="lab self-center text-dec" id="border_text">or</span>
              <form class="form" @submit.prevent="register">
                <label class="lab" for="chk" aria-hidden="true">Register</label>
                <input
                  class="input"
                  type="text"
                  v-model="username"
                  name="txt"
                  placeholder="Username"
                  required
                />
                <input
                  class="input"
                  type="email"
                  v-model="emailR"
                  name="email"
                  placeholder="Email"
                  required
                />
                <input
                  class="input"
                  type="text"
                  v-model="passwordR"
                  name="pswd"
                  placeholder="Password"
                  required=""
                />
                <button
                  type="submit"
                  class="login bg-green-700 h-9 mt-4 text-white"
                >
                  Register
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="container_two bg-white w-full md:w-1/2 h-[25vh] md:h-screen">
      <div
        class="flex flex-col items-center pt-7 md:pt-0 justify-start md:justify-center h-screen bg-contain md:bg-cover bg-[url('/img/vsu.jpg')] rounded-bl-[100px]"
      >
        <img src="/img/vsu-logo1.png" alt="" class="max-h-14 md:max-h-28" />
        <h1
          class="text-white font-medium text-base md:text-3xl font-serif mt-1 md:mt-5"
        >
          Lost and Found Website
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inputbox {
  position: relative;
  padding-top: 10px;
  width: 356px;
  margin-bottom: 10px;
}

.inputbox input {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: black;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
}

.inputbox span {
  position: absolute;
  left: 0;
  padding: 20px 10px 10px;
  font-size: 1em;
  color: black;
  font-weight: 500;
  text-align: center;
  letter-spacing: 00.05em;
  transition: 0.5s;
  pointer-events: none;
}

.inputbox input:valid ~ span,
.inputbox input:focus ~ span {
  color: #59d559;
  transform: translateX(-10px) translateY(-34px);
  font-size: 0, 75em;
}

.inputbox i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #59d559;
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
  z-index: 9;
}

.inputbox input:valid ~ i,
.inputbox input:focus ~ i {
  height: 44px;
}

.login {
  --primary-color: rgb(21 128 61);
  --secondary-color: #fff;
  --hover-color: #59d559;
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  color: var(--secondary-color);
  padding: 1em 1.8em;
  background: var(--primary-color);
  display: flex;
  transition: 0.2s background;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
  font-weight: bold;
}

.login .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login .arrow {
  margin-top: 1px;
  width: var(--arrow-width);
  background: var(--primary-color);
  height: var(--arrow-stroke);
  position: relative;
  transition: 0.2s;
}

.login .arrow::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  border: solid var(--secondary-color);
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -3px;
  right: 3px;
  transition: 0.2s;
  padding: 3px;
  transform: rotate(-45deg);
}

.login:hover {
  background-color: var(--hover-color);
}

.login:hover .arrow {
  background: var(--secondary-color);
}

.login:hover .arrow:before {
  right: 0;
}

.login:active {
  transform: scale(0.9);
}

.main {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0px 24px 24px;
}

#chk {
  display: none;
}

/*Login*/
.logins {
  position: relative;
  width: 100%;
  height: 100%;
}

.lab {
  color: green;
  font-size: 2rem;
  justify-content: center;
  display: flex;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.input {
  width: 100%;
  height: 40px;
  background: #e0dede;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
}

/*Register*/
.register {
  background-color: white;
  border-top-color: black;
  border-top-width: 1px;
  transform: translateY(5%);
  transition: 0.8s ease-in-out;
  z-index: 13;
}

.register label {
  transform: scale(0.6);
}

#chk:checked ~ .register {
  transform: translateY(-90%);
}

#chk:checked ~ .register label {
  transform: scale(1);
  margin: 5% 0 5%;
}

#chk:checked ~ .login label {
  transform: scale(0.6);
  margin: 10% 0 5%;
}

#border_text {
  position: absolute;
  top: -18px;
  left: 50%;
  color: black;
  font-size: larger;
  transform: translateX(-50%);
  background-color: white;
  padding: 0 5px;
}

/*Button*/
.form button {
  cursor: pointer;
  transition: 0.2s ease-in;
}

.body {
  overflow: hidden;
}
</style>
