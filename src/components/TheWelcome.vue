<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #category> Lost </template>
    <template #time-passed>Today, 4hrs ago</template>
    <template #header>A Very Long Header</template>
    <template #Location>Opong, Tolosa, Lteyte</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #category> Found </template>
    <template #time-passed>Yesterday</template>
    <template #header>A Very Long Header</template>
    <template #Location>Somewher</template>
  </WelcomeItem>
</template>
