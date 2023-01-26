<script>
import NavBar from "../components/NavBar.vue";
import Posts from "../components/Posts.vue";
import SideBar from "../components/SideBar.vue";
import CreateReport from "../components/CreateReport.vue";

export default {
  data() {
    return {
      count: 3,
    };
  },
  components: {
    Posts,
    NavBar,
    SideBar,
    CreateReport,
  },
  methods: {},
};
</script>

<template>
  <div class="body flex bg-[#F4F4F4]">
    <div class="mx-auto flex flex-row">
      <div class="flex flex-col items-stretch">
        <NavBar />
        <div v-for="i in count" :key="i">
          <Posts />
        </div>
        <CreateReport />
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
