<template>
    <v-tabs v-if="isTab" align-tabs="center" class="w-100">
        <v-tab
        v-for="(item, index) in items"
        :value="index + 1"
        :key="item.label + '-key'"
        :to="item.to"
        >{{ item.label }}</v-tab>
    </v-tabs>
    
    <TheThemeSwitcher v-if="isTab" />
    
    <v-list v-if="isSide">
        <v-list-item
        v-for="(item, index) in items"
        :value="index + 1"
        :key="item.label + '-key'"
        :to="item.to"
        >{{ item.label }}</v-list-item>
    </v-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import TheThemeSwitcher from '../utils/TheThemeSwitcher.vue';

const props = defineProps({
    isTab: Boolean,
    isSide: Boolean,
});


const router = useRouter();
const active = ref('');
const items = [
{
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    to: { path: '/home', hash: '#home' },
    hash: 'home',
    name: '/',
},
{
    label: 'About',
    icon: 'pi pi-fw pi-calendar',
    to: { path: '/about', hash: '#about' },
    hash: 'about',
    name: 'about',
},
{
    label: 'Curriculum',
    icon: 'pi pi-fw pi-heart',
    to: { path: '/life', hash: '#life' },
    hash: 'life',
    name: 'life',
},
{
    label: 'Skills',
    icon: 'pi pi-fw pi-heart',
    to: { path: '/skills', hash: '#skills' },
    hash: 'skills',
    name: 'skills',
},
];

const navigate = (to: any) => {
    router.push(to);
};
</script>

<style lang="scss">
/* Your styles go here */
</style>
