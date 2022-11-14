}<template>
  <div class="menu-container" >
<!--    <TabMenu v-model="items" ></TabMenu>-->
    <TabMenu :model="items" :activeIndex="this.getIndex()" class="tab-menu">
        <router-link :to="item.to">
        </router-link>
    </TabMenu>
  </div>
</template>s
<script>
import TabMenu from 'primevue/tabmenu';
//import MenuBar from 'primevue/menubar';


export default {
  name: "MenuComponent",
  components: {
    TabMenu,
    //MenuBar
  },
  data() {
    return {
      location: window.location.pathname,
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
    navigator: function (route) {
      console.log(route);
      this.$router.push(route.path);
    },
    getIndex: function () {
      console.log(location, this.items.findIndex((el) => el.to === location.pathname));

      return this.items.findIndex((el) => el.to === location)
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
}
.tab-menu{
  background: #071426;
}

</style>