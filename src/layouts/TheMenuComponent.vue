<template >
    <v-tabs
        v-if="isTab"
        align-tabs="center"
        class="w-100"
    >
        <v-tab v-for="(item, index) in items" 
                :value="index+1"
                :key="item.label+'-key'" 
                :to="item.to">{{item.label}}</v-tab>
    </v-tabs>
    
    <TheThemeSwhitcher  v-if="isTab" class=""/>

    <v-list v-if="isSide">
        <v-list-item v-for="(item, index) in items" 
            :value="index+1"
            :key="item.label+'-key'" 
            :to="item.to">{{item.label}}
        </v-list-item>
    </v-list>
</template>
<script>
import TheThemeSwhitcher from '../utils/TheThemeSwhitcher.vue';



export default {
    name: "TheMenuComponent",
    props: [
        'isTab',
        'isSide'
    ],
    components: {
    TheThemeSwhitcher
},
    mounted() {
    },
    data() {
        return {
            active: '',
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                    to: {path: '/home', hash: '#home'},
                    hash: 'home',
                    name: '/'
                },
                {
                    label: 'About',
                    icon: 'pi pi-fw pi-calendar',
                    to: {path: '/about', hash:'#about'},
                    hash: 'about',
                    name: 'about'
                },
                {
                    label: 'Curriculum',
                    icon: 'pi pi-fw pi-heart',
                    to: {path: '/life', hash: '#life'},
                    hash: 'life',
                    name: 'life'
                },
                {
                    label: 'Skills',
                    icon: 'pi pi-fw pi-heart',
                    to: {path: '/skills', hash: '#skills'},
                    hash: 'skills',
                    name: 'skills'
                },
            ],
        }
    },
    methods: {
        navigate(to){
            this.$router.push(to);
        },
    }

}
</script>

<style lang="scss" >


</style>