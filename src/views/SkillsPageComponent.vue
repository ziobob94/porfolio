<template>
    <TheSkillsTimeline :logosList="logosList" />
</template>

<script setup lang="ts">

import TheSkillsTimeline from "@/components/TheSkillsTimeline.vue";
const props = {
    logosList: []
};

const { logosList } = props;

</script>




