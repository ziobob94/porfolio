<template>
  <div class="main-container">
    <MenuComponent></MenuComponent>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transitionName">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>

</template>

<script>
import './assets/main.scss';
import 'primevue/resources/primevue.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-dark-indigo/theme.css';
import MenuComponent from './components/MenuComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent,
    FooterComponent
  }
}
</script>



<style lang="scss">

/* *********** TRANSITIONS *************** */

.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  //top: calc(50px + 1rem);
  transition: all 1s ease-out;
  //height: calc(100vh - (50px + 1rem));
}

.slide-up-enter-to {
  position: absolute;
  top: 0;
  //height: calc(100vh - (50px + 1rem));
  //margin-top: calc(50px + 1rem);
}
.slide-up-enter-from {
  position: absolute;
  top: 100vh;
  //margin-top: calc(50px + 1rem);
}
.slide-up-leave-to {
  //margin-top: calc(50px + 1rem);
  position: absolute;
  //height: 100vh;
  top:  -100vh;
}
.slide-up-leave-from {
  position: absolute;
  //height: 100vh;
  top: 0;
}



.slide-down-enter-from {
  // margin-top: calc(50px + 1rem);
  position: absolute;
  //height: 100vh;
  top:  -100vh;
}
.slide-down-enter-to {
  position: absolute;
  //height: 100vh;
  top: 0;
}
.slide-down-leave-from {
  position: absolute;
  //height: 100vh;
  top: 0
}
.slide-down-leave-to {
  //margin-top: calc(50px + 1rem);
  position: absolute;
  //height: 100vh;
  top: 100vh;
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
