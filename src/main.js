import { createApp, ref } from "vue";
import { createPinia } from "pinia";
import { createStore } from "vuex";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import App from "./App.vue";
import router from "./router";
import "./index.css";

import "./assets/main.css";

const app = createApp(App);
const auth = getAuth();
export const store = createStore({
  state: {
    user: null,
    post_id: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state, user) {
      state.user = null;
    },
    SEND_POST_ID(state, post_id) {
      state.post_id = post_id;
    },
  },
  actions: {
    updateData({ commit }, newData) {
      commit("SEND_POST_ID", newData);
    },
    async login({ commit }, details) {
      const { email, password } = details;
      let message;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        message = "Login Successful";
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            message = "User not found";
            break;
          case "auth/wrong-password":
            message = "Wrong password";
            break;
          default:
            message = "Something went wrong";
            console.error(error);
        }

        return message;
      }

      commit("SET_USER", auth.currentUser);

      router.push({ name: "posts" });
    },

    async logout({ commit }) {
      await signOut(auth);

      commit("CLEAR_USER");

      router.push({ name: "home" });
    },

    async register({ commit }, details) {
      const { email, password, username, phone_number } = details;
      let regMessage;

      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const usr = auth.currentUser;
        addDoc(collection(db, "users"), {
          uid: usr.uid,
          email: email,
          username: username,
          password: password,
        });
        regMessage = "Account registration successful";
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            regMessage = "Email already in use";
            break;
          case "auth/invalid-email":
            "Invalid email";
            break;
          case "auth/operation-not-allowed":
            regMessage = "Operation not allowed";
            break;
          case "auth/weak-password":
            regMessage = "Weak password";
            break;
          default:
            regMessage = "Something went wrong";
            console.error(error);
        }

        return regMessage;
      }

      commit("SET_USER", auth.currentUser);

      router.push({ path: "/posts" });
    },

    fetchUser({ commit }) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit("CLEAR_USER");
        } else {
          commit("SET_USER", user);

          if (router.isReady() && router.currentRoute.value.path === "/") {
            router.push("/posts");
          }
        }
      });
    },
  },
});

app.use(createPinia());
app.use(router);
app.use(store);

app.mount("#app");
