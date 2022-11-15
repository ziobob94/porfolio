<template>
  <div  class="menu-container">
<!--    <TabMenu v-model="items" ></TabMenu>-->
    <TabMenu @tab-change="getIndex()" :model="items" class="tab-menu"/>
  </div>
</template>
<script>
//import * as _ from 'lodash';
import TabMenu from 'primevue/tabmenu';
//import MenuBar from 'primevue/menubar';


export default {
  name: "MenuComponent",
  components: {
    TabMenu,
    //MenuBar
  },
  mounted() {
    this.location = window.location.pathname;
  },
  data() {
    return {
      active: '',
      location: '',
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: {path: '/home', hash: '#home'},
          hash: 'home',
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-calendar',
          to: {path: '/about', hash:'#about'},
          hash: 'about',
        },
        {
          label: 'Life',
          icon: 'pi pi-fw pi-heart',
          to: {path: '/life', hash: '#life'},
          hash: 'life',
        },
        {
          label: 'Skills',
          icon: 'pi pi-fw pi-heart',
          to: {path: '/skills', hash: '#skills'},
          hash: 'skills',
        },
      ],
    }
  },
  methods: {
    getIndex: function () {
      let index = this.items.findIndex((el) => el.to.path === this.location);
      console.log(index);
      if(index >= 0) this.location = this.items[index].to.path;
    },
  }

}
</script>

<style lang="scss" >
.menu-container{
  width: 100%;
  padding-top: 0.5rem;
  z-index: 1;
  background: #071426;
  position:fixed;
}
.tab-menu{
  background: #071426;
}

</style>