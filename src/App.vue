
<template>
          <!-- MOBILE -->
        <v-layout :theme="themeName" v-if="display.sm.value" >
      <v-app-bar  name="app-bar" class="d-flex justify-space-between">
          <v-app-bar-nav-icon @click="drawer = !drawer"/>
          <TheThemeSwhitcher />
      </v-app-bar>
  
      <v-navigation-drawer
          v-model="drawer"
          temporary
      >
          <TheMenuComponent :isSide="true"/>
      </v-navigation-drawer>

      <v-main  id="main" class="d-flex align-center justify-center h-100" >
          <v-container class="w-75 d-flex align-center justify-center px-0"  fluid>
              <router-view/>
          </v-container>
      </v-main>
  </v-layout>
  <!-- DESKTOP -->
  <v-layout theme="dark" v-else class="rounded rounded-md d-flex justify-center align-center h-100">
        <v-app-bar name="app-bar" >
          <TheMenuComponent :isTab="true"/>
      </v-app-bar>
  
      <v-main id="main" class="d-flex align-center justify-center h-100" :style="{'background-color': (themeName === 'dark') ?'black': '#d9d9d966'}">
          <v-container class="h-100 w-75 d-flex align-center justify-center" :style="{'background-color': (themeName === 'dark') ?'#272626': 'white'}" id="container" fluid>
              <router-view/>
          </v-container>
      </v-main>
  </v-layout>

  

</template>

<script >
import { useDisplay, useTheme } from 'vuetify/lib/framework.mjs'

import TheMenuComponent from './layouts/TheMenuComponent.vue';
//import TheFooterComponent from './components/layout/TheFooterComponent.vue'; 

export default {
name: 'App',
components: {
   TheMenuComponent,
/*    TheFooterComponent */
},
data(){
    return{
          drawer: false,

      }
},
computed:{
  display:{
      get(){
          return useDisplay();
      }
  },
  themeObject:{
      get(){
          return useTheme();
      }
  },
  themeName:{
    get(){
        return useTheme().global.name.value;
    }
  }
},
async mounted() {
  console.log(this.display)
  console.log(this.$vuetify.theme.current)

},
methods:{
}
}
</script>



<style lang="scss" >
.logo{
  height: 50px;
  width: 50px;
}

#app{
  height: 100vh;
}

#container {
  height: 100%;
  max-width: 1200px;
  padding: 1rem 0 !important;
  border-left: 1px solid #80808033;
  border-right: 1px solid #80808033;
}

/* Hide both vertical and horizontal scrollbars */
*::-webkit-scrollbar {
  width: 0.5em;
  height: 0.5em;
}

/* Track */
*::-webkit-scrollbar-track {
  background: transparent; /* You can use a specific color here */
}

/* Handle */
*::-webkit-scrollbar-thumb {
  background: transparent; /* You can use a specific color here */
}

/* Optional: Hover styles for the scrollbar handle */
*::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.2); /* Change the color or add a border on hover */
}






</style>
