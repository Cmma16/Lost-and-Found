<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="material-symbols-outlined">menu</span>
  </button>
  <div class="flex flex-row py-10 bg-gray-100 h-[100vh]">
    <aside
      id="default-sidebar"
      class="fixed top-10 left-0 z-40 flex bg-white flex-col py-4 h-4/5 rounded-xl transition-transform -translate-x-[108%] sm:translate-x-5"
      aria-label="Sidebar"
    >
      <div class="flex mx-4 mb-4 px-7 flex-row bg-green-400 rounded-full">
        <input
          class="block w-full p-2 text-sm text-gray-900 rounded-full border-0 bg-transparent focus:ring-0 focus:outline-none"
          type="search"
          placeholder="Search chats here..."
        />
        <button class="material-symbols-outlined">Search</button>
      </div>
      <div class="h-full py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li v-for="convo in conversations">
            <a
              href="#"
              @click="loadMessages(convo)"
              class="flex flex-col bg-pink-400 md:bg-yellow-300 sm:bg-orange-400 px-2"
            >
              <div class="flex flex-row justify-between">
                <span class="font-bold text-xl">{{ convo.chatTopic }}</span>
                <span class="text-sm font-normal">
                  {{ calculateTimeElapsed(convo.updatedAt) }}
                </span>
              </div>
              <span class="font-normal">
                {{
                  convo.participants[0] != currentUser.email
                    ? convo.participants[0]
                    : convo.participants[1]
                }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <div
      v-if="currentConvo.chatID != null"
      class="bg-white flex flex-col mx-5 sm:ml-80 h-[80vh] w-screen rounded-xl"
      ref="scrollToElement"
    >
      <div
        class="bg-green-500 w-full flex flex-row items-center justify-between rounded-t-xl p-2"
      >
        <div class="flex flex-col">
          <h1 class="font-bold text-xl">{{ currentConvo.chatTopic }}</h1>
          <p>
            Participant:
            {{
              currentConvo.participants[0] != currentUser.email
                ? currentConvo.participants[0]
                : currentConvo.participants[1]
            }}
          </p>
        </div>
        <div class="flex flex-row">
          <span class="material-symbols-outlined"> delete </span>
          <span class="material-symbols-outlined"> block </span>
          <span class="material-symbols-outlined"> report </span>
        </div>
      </div>
      <div class="h-full bg-white overflow-y-auto px-4">
        <div
          v-for="(message, index) in convoMessages"
          :class="
            message.sender == currentUser.email
              ? 'flex-row-reverse'
              : 'flex-row'
          "
          class="my-1 flex items-end gap-2"
        >
          <div
            class="max-w-md rounded-3xl px-4 py-3"
            :class="isSameMessageSource(index, currentUser.email)"
          >
            <p>{{ message.messageContent }}</p>
          </div>
        </div>
        <div
          v-if="convoMessages.length == 0 && currentConvo.chatID != null"
          class="flex justify-center"
        >
          No messages yet
        </div>
      </div>
      <div class="flex p-3 flex-row h-[15%] bg-white rounded-b-xl">
        <input
          v-model="messageDraft"
          class="rounded-l-lg w-full bg-green-400 border-0 focus:ring-0 focus:outline-none placeholder:text-white"
          type="text"
          placeholder="Type your message here..."
        />
        <button
          @click="sendMessage(currentConvo, currentUser.email)"
          class="material-symbols-outlined bg-green-400 px-2 rounded-r-lg hover:bg-green-700"
        >
          Send
        </button>
      </div>
    </div>

    <div
      v-if="currentConvo.chatID == null"
      class="flex items-center justify-center flex-col mx-5 sm:ml-80 h-[80vh] w-screen rounded-xl"
    >
      <p class="text-xl">Select a conversation to load messages</p>
    </div>
  </div>
</template>

<script>
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from "flowbite";
import {
  query,
  where,
  collection,
  getDocs,
  updateDoc,
  Timestamp,
  deleteDoc,
  addDoc,
  orderBy,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase";
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    const auth = getAuth();
    const conversations = ref([]);
    const convoMessages = ref([]);
    const currentConvo = ref({});

    const messageDraft = ref("");
    const scrollToElement = ref();
    let chats = [];
    const currentUser = ref({});

    onMounted(async () => {
      const q = query(
        collection(db, "conversations"),
        where("participants", "array-contains-any", [
          this.$store.state.user.email,
        ])
      );
      const querySnapshot = await getDocs(q);
      for (const doc of querySnapshot.docs) {
        const chat = {
          chatID: doc.id,
          chatTopic: doc.data().chat_Topic,
          createdAt: doc.data().created_At,
          participants: doc.data().participants,
          updatedAt: doc.data().updated_At,
        };
        chats.push(chat);
      }
      conversations.value = chats;

      onAuthStateChanged(auth, (user) => {
        if (user) {
          getCurrentUser(user.uid);
        }
      });

      initAccordions();
      initCarousels();
      initCollapses();
      initDials();
      initDismisses();
      initDrawers();
      initDropdowns();
      initModals();
      initPopovers();
      initTabs();
      initTooltips();
    });

    async function getCurrentUser(userUID) {
      const q = query(collection(db, "users"), where("uid", "==", userUID));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        const tempCurrUser = {
          username: doc.data().username,
          email: doc.data().email,
        };
        currentUser.value = tempCurrUser;
      });
    }

    async function loadMessages(chat) {
      let messages = [];
      currentConvo.value = chat;
      const q = query(
        collection(db, "messages"),
        where("chat_id", "==", chat.chatID),
        orderBy("created_at")
      );
      const querySnapshot = await getDocs(q);
      for (const doc of querySnapshot.docs) {
        const message = {
          messageID: doc.id,
          chatID: doc.data().chat_id,
          createdAt: doc.data().created_at,
          messageContent: doc.data().message_content,
          sender: doc.data().sender_email,
        };
        //console.log(message);
        messages.push(message);
      }
      convoMessages.value = messages;
    }

    function calculateTimeElapsed(timeUpdated) {
      const now = new Date();
      var timeElapsed = now - timeUpdated.toDate();
      /*const options = { year: "numeric", month: "long", day: "numeric" };
      const dateString = timeUpdated.toDate().toLocaleString("en-US", options);*/
      timeElapsed = timeElapsed / 1000;
      var unitDisc = " second(s) ago";
      var timePassed = Math.floor(timeElapsed);
      if (timeElapsed > 60 && timeElapsed < 3600) {
        timePassed = Math.floor(timeElapsed / 60);
        if (Math.floor(timeElapsed / 60) > 1) unitDisc = " mins ago";
        else unitDisc = " min ago";
      } else if (timeElapsed > 3600 && timeElapsed < 86400) {
        timePassed = Math.floor(timeElapsed / 3600);
        if (Math.floor(timeElapsed / 3600) > 1) unitDisc = " hrs ago";
        else unitDisc = " hr ago";
      } else if (timeElapsed > 86400 && timeElapsed < 604800) {
        timePassed = Math.floor(timeElapsed / 86400);
        if (Math.floor(timeElapsed / 86400) > 1) unitDisc = " days ago";
        else unitDisc = " day ago";
      } else {
        timePassed = dateCreated;
        unitDisc = "";
      }
      return timePassed + unitDisc;
    }

    // send a message & clear input field
    function sendMessage(chat, sender) {
      const docRef = addDoc(collection(db, "messages"), {
        chat_id: chat.chatID,
        created_at: Timestamp.now(),
        message_content: messageDraft.value,
        sender_email: sender,
      }).then((docRef) => {
        loadMessages(chat);
        messageDraft.value = "";
        scrollToElement.value.scrollTop = scrollContainer.value.scrollHeight;
      });
    }

    function isSameMessageSource(chat_id, user) {
      var classes = "";

      if (
        chat_id + 1 < convoMessages.value.length &&
        convoMessages.value[chat_id].sender ==
          convoMessages.value[chat_id + 1].sender
      ) {
        classes +=
          convoMessages.value[chat_id].sender == user
            ? " rounded-br-none"
            : " rounded-bl-none";
      }

      if (
        chat_id - 1 >= 0 &&
        convoMessages.value[chat_id].sender ==
          convoMessages.value[chat_id - 1].sender
      ) {
        classes +=
          convoMessages.value[chat_id].sender == user
            ? " rounded-tr-none"
            : " rounded-tl-none";
      }

      // use green color if message source is me
      classes +=
        convoMessages.value[chat_id].sender == user
          ? " bg-green-700 text-white"
          : " bg-gray-300";

      return classes;
    }

    return {
      conversations,
      getCurrentUser,
      currentUser,
      calculateTimeElapsed,
      convoMessages,
      isSameMessageSource,
      loadMessages,
      sendMessage,
      currentConvo,
      messageDraft,
      scrollToElement,
    };
  },
  created() {},
};
</script>
