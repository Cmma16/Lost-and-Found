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

      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful");
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          default:
            alert("Something went wrong");
            console.error(error);
        }

        return;
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
        alert("Account registration successful");
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/operation-not-allowed":
            alert("Operation not allowed");
            break;
          case "auth/weak-password":
            alert("Weak password");
            break;
          default:
            alert("Something went wrong");
            console.error(error);
        }

        return;
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
