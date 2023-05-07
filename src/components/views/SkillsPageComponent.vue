<template>
    <BodyLayoutTemplate>
        <template #body >
            <div name="list" tag="ul" class="logos-container" >
                <div class="list-logo" v-for="(logo, index) in logosList" 
                     :key="logo.name"
                     :style="{
                        animationDelay: index*200+'ms',
                    }"
                    @click="goTo(logo.link)"
                >
                    <img class="skill-logo" 
                        :src='getImgUrl(logo.url)'
                        
                    />
                    <h3 class="logo-title">{{ logo.name.toUpperCase() }}</h3>
                </div>
            </div>
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
                    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
                },
                {
                    name: "css",
                    url: "/logos/css-3.svg",
                    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
                },
                {
                    name: "js",
                    url: "/logos/javascript-1.svg",
                    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                },
                {
                    name: "ts",
                    url: "/logos/typescript-2.svg",
                    link: 'https://www.typescriptlang.org/'
                },
                {
                    name: "vue",
                    url: "/logos/vue-js-1.svg",
                    link: 'https://vuejs.org/'
                },

                {
                    name: "react",
                    url: "/logos/react-2.svg",
                    link: 'https://react.dev/'
                },
                {
                    name: "jquery",
                    url: "/logos/jquery-2.svg",
                    link: 'https://jquery.com/'
                },
                {
                    name: "graphql",
                    url: "/logos/graphql-logo-2.svg",
                    link: 'https://graphql.org/'
                },
                {
                    name: "nodejs",
                    url: "/logos/nodejs-1.svg",
                    link: 'https://nodejs.org/en'
                },
                {
                    name: "laravel",
                    url: "/logos/laravel-2.svg",
                    link:'https://laravel.com/'
                },

                {
                    name: "php",
                    url: "/logos/php-1.svg",
                    link: 'https://www.php.net/'
                },
                {
                    name: "java",
                    url: "/logos/java.svg",
                    link: 'https://docs.oracle.com/en/java/'
                },
                {
                    name: "python",
                    url: "/logos/python.svg",
                    link: 'https://www.python.org/'
                },
                {
                    name: "c",
                    url: "/logos/c.svg",
                    link: 'https://devdocs.io/c/'
                },


                {
                    name: "mongob",
                    url: "/logos/mongodb-icon-1.svg",
                    link: 'https://www.mongodb.com/'
                },
                {
                    name: "mysql",
                    url: "/logos/mysql.svg",
                    link: 'https://www.mysql.com/'
                },
                {
                    name: "firebase",
                    url: "/logos/firebase-1.svg",
                    link: 'https://firebase.google.com/'
                },

                {
                    name: "jira",
                    url: "/logos/jira.svg",
                    link: 'https://www.atlassian.com/it/software/jira'
                },
                {
                    name: "bitbucket",
                    url: "/logos/bitbucket.svg",
                    link: 'https://bitbucket.org/soulwebdev/workspace/overview'
                },

                {
                    name: "git",
                    url: "/logos/git.svg",
                    link: 'https://git-scm.com/'
                },
                {
                    name: "grafana",
                    url: "/logos/grafana.svg",
                    link: 'https://grafana.com/'
                },
               {
                    name: "prometheus",
                    url: "/logos/prometheus.svg",
                    link: 'https://prometheus.io/'
                },


            ],
            id: '',
        }
    },
    mounted() {
        this.id = 'skills';
    },
    methods: {

        getImgUrl(url) {
            return './assets'+url
        },
        goTo(url){
            window.open( url, "_blank");
        }
    }
}
</script>

<style lang="scss" scoped>
</style>