<template>
    <BodyLayoutTemplate>
        <template #body >
            <h1>Skills</h1>
        </template>
    </BodyLayoutTemplate>
</template>

<script>
import BodyLayoutTemplate from "@/components/layout/BodyLayoutTemplate.vue";

export default {
    name: "SkillsPageComponent",
    components: {BodyLayoutTemplate},
    data(){
        return{
            logosList: [
                {
                    name: "html",
                    url: "/logos/html-1.svg",
                },
                {
                    name: "css",
                    url: "/logos/css-3.svg",
                },
                {
                    name: "js",
                    url: "/logos/javascript-1.svg"
                },
                {
                    name: "ts",
                    url: "/logos/typescript-2.svg"
                },
                {
                    name: "jquery",
                    url: "/logos/jquery-2.svg",
                },
                {
                    name: "laravel",
                    url: "/logos/laravel-2.svg",
                },
                {
                    name: "vue",
                    url: "/logos/vue-js-1.svg",
                },

                {
                    name: "react",
                    url: "/logos/react-2.svg",
                },
                {
                    name: "php",
                    url: "/logos/php-1.svg",
                },
                {
                    name: "nodejs",
                    url: "/logos/nodejs-1.svg",
                },
            ],
            id: '',
        }
    },
    mounted() {
        this.id = 'skills';
    },
    methods: {


    }
}
</script>

<style scoped>

</style>