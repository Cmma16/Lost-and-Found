<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { db } from "@/firebase";
</script>

<template>
  <RouterView />
</template>
