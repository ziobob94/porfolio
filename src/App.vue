<template>
  <v-app style="background-color: #b5b5b50d;">

    <v-main class="d-flex">

      <v-layout :theme="themeName">

        <!-- MOBILE -->
        <v-app-bar v-if="display.smAndDown.value" color="primary" name="app-bar"
          class="d-flex justify-space-between align-center" style="position: fixed;">
          <v-app-bar-nav-icon @click="drawer = !drawer" />
          <TheThemeSwitcher />
        </v-app-bar>

        <!-- DESKTOP -->
        <v-app-bar v-else color="primary" name="app-bar" style="position: fixed;">
          <TheMenuComponent :isTab="true" />
        </v-app-bar>

        <!-- MOBILE -->
        <v-navigation-drawer v-if="display.smAndDown.value" v-model="drawer" temporary>
          <TheMenuComponent :isSide="true" />
        </v-navigation-drawer>

        <!-- MOBILE -->
        <v-main v-if="display.smAndDown.value" id="main" class="d-flex align-center justify-center h-100 ">
          <v-container class="w-75 d-flex align-center justify-center px-0" fluid>
            <router-view />
          </v-container>
        </v-main>

        <!-- DESKTOP -->
        <v-main v-else id="main" class="d-flex align-center justify-center h-100">
          <v-container class="h-100 w-75 d-flex align-center justify-center bg-white" id="container" fluid>
            <router-view />
          </v-container>
        </v-main>

      </v-layout>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay, useTheme } from 'vuetify/lib/framework.mjs'
import TheThemeSwitcher from '@/utils/TheThemeSwitcher.vue';
import TheMenuComponent from './layouts/TheMenuComponent.vue';
import { computed, ref } from 'vue';
//import TheFooterComponent from './components/layout/TheFooterComponent.vue'; 

const theme = useTheme();
const display = useDisplay()
const themeName = computed(() => theme.global.name.value);
const drawer = ref<boolean>(false);
</script>



<style lang="scss" >
.logo {
  height: 50px;
  width: 50px;
}

#app {
  height: 100vh;
}

#container {
  height: 100%;
  max-width: 2048px;
  padding: 0 1rem !important;
  border-left: 1px solid #80808033;
  border-right: 1px solid #80808033;
  overflow-y: auto;
}
</style>
