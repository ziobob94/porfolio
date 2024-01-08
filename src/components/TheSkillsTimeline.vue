<template>
    <v-container id="skill-timeline-container" class="w-100" position="relative">
        <v-timeline v-if="display.mdAndUp.value"  class="pb-8" truncate-line="end" :side="(display.smAndDown.value) ? 'end' : undefined">
            <v-timeline-item v-for="(logo, index) in logosList"  
            :key="index"
            :dot-color="`${getRandomColor(index+5)}-lighten-2`"
            fill-dot
            class="item-timeline mb-4 w-100"
            min-width="86%"
            >
            <v-card min-height="12rem">
                <v-card-title 
                :class="{'timeline-card-title d-flex align-center justify-start': true, [`bg-${getRandomColor(index)}-lighten-2`]: true, 'justify-end': index % 2 === 0 }"
                >
                <v-img v-if="logo.url"
                        contain
                        :width="50"
                        :src="'./assets' + logo.url" 
                        class="timeline-logo"
                        :style="{order: (index%2===0) ? 2 : 0}"
                />
                <h2 class="card-title" :style="{order: 1 }">
                    {{ logo.name.toUpperCase() }}
                </h2>
            </v-card-title>
            <v-card-text class="card-text pa-4">
                {{ logo.description }}
            </v-card-text>
        </v-card>
            </v-timeline-item>
        </v-timeline> 
        <div v-else >
            <div v-for="(logo, index) in logosList"  
            :key="index"
            :dot-color="`${getRandomColor(index+5)}-lighten-2`"
            fill-dot
            class="item-timeline mb-4 w-100"
            min-width="86%"
            >
            <v-card min-height="12rem">
                <v-card-title 
                :class="{'timeline-card-title d-flex align-center justify-start': true, [`bg-${getRandomColor(index)}-lighten-2`]: true, 'justify-end': index % 2 === 0 }"
                >
                <v-img v-if="logo.url"
                        contain
                        :width="50"
                        :src="'./assets' + logo.url" 
                        class="timeline-logo"
                        :style="{}"
                />
                <h2 class="card-title" :style="{}">
                    {{ logo.name.toUpperCase() }}
                </h2>
            </v-card-title>
            <v-card-text class="card-text pa-4">
                {{ logo.description }}
            </v-card-text>
        </v-card>
    </div>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import seedrandom from 'seedrandom';
import { computed } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

type RouteLink = {
  name: string;
  description: string;
  des_img: string;
  url: string;
  link: string;
  visible: boolean;
};

type SkillsPageComponentProps = {
    logosList: any[];
}

const props = defineProps<SkillsPageComponentProps>();
const logosList = computed(() => props.logosList);

const id = 'skills';
let selectedSkill = null;
let items = [];
let isVisible = false;
const colors = [
  "red",
  "pink",
  "purple",
  "deep-purple",
  "indigo",
  "blue",
  "light-blue",
  "cyan",
  "teal",
  "green",
  "light-green",
  "lime",
  "yellow",
  "amber",
  "orange"
];

const display = useDisplay();

function openDescription(skill: any) {
  selectedSkill = skill;
  isVisible = !isVisible;
}

function getImgUrl(url: string) {
  return './assets' + url;
}

function goTo(url: string) {
  window.open(url, "_blank");
}

function getRandomColor(seed: any) {
  const rng = seedrandom(seed);
  const n = Math.floor(rng() * colors.length);
  return colors[n];
}
</script>

<style lang="scss" scoped>
.list{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;
    gap: 1rem;
    padding: 0;
}
.list-item{
    display: flex;
    justify-content: center;
    margin: 1rem 0.2rem 1rem 0.6rem;
    flex-direction: column;
    align-items: revert;
    flex: 1 1 10%;
    gap: 12px;
    border-bottom: 1px solid #80808047;
    border-top: 1px solid #80808047;
}

.timeline-logo{
    max-width: 30px;
    height: 30px;
    align-self: start;
}

#content{
    flex: 0 0 65%;
    display: flex;
    flex-direction: column;
    & > p{
        line-height: 2rem;
        text-align: left;
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

#header{
    flex: 0 0 25%;
    gap: 1rem;
}

#skill-timeline-container{
    position: relative;
    padding: 0;
    height: 100%;
    overflow-y: auto;
}

.thickness{
    width: 0;
    height: 4rem;
}

.item-timeline{
    max-width: 100%;
}
.timeline-card-title{
    gap: 1rem;
}

.card-text{
    font-size: 16px;
    display: flex;
    align-items: center;
}

.card-title{
    color: black;
    font-weight: 300;
    font-size: x-large;
}
</style>