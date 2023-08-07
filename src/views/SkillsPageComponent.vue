<template>
   <!--  <v-list>
        <v-list-item class="list-item"
        v-for="(logo, index) in logosList" 
        :key="index+logo.name"
        :style="{
            order: index
        }"
        >
            <div min-height="400" class="pa-8 d-flex align-center justify-space-between" style="gap: 4rem; ">
                <div id="header" class="d-flex align-start flex-column justify-center" >
                    <img class="skill-logo mr-4" 
                    :src="'./assets'+logo.url" 
                    />
                    <h1>{{ logo.name.toUpperCase()  }}</h1>
                </div>
                <div id="content" >
                    <p class="my-4"> {{ logo.description }}</p>
                    <img v-if="logo.des_img" :src="logo.des_img" />
                </div>
            </div >
        </v-list-item>
    </v-list> -->
<!-- <v-dialog class="w-50" location="center" min-height="200" min-width="300" v-if="selectedSkill" v-model="isVisible" id="wrapper" >
    
    <v-card min-height="400" class="pa-8 d-flex align-center justify-space-between">
        <div id="header" class="d-flex w-100 align-start" >
            <img class="skill-logo mr-4" 
            :src="'./assets'+selectedSkill.url" 
            />
            <h1>{{ selectedSkill.name.toUpperCase()  }}</h1>
        </div>
        <div id="content" >
            <p class="my-4"> {{ selectedSkill.description }}</p>
            <img v-if="selectedSkill.des_img" :src="selectedSkill.des_img" />
        </div>
    </v-card>
</v-dialog> -->

<v-container id="skill-timeline-container">
    <v-timeline class="pb-8" truncate-line="end">
        <v-timeline-item v-for="(logo, index) in logosList"  
            :key="index"
            dot-color="purple-lighten-2"
            fill-dot
            class="item-timeline mb-4"
        >
            <v-card min-height="12rem">
                <v-card-title 
                    :class="{'timeline-card-title d-flex align-center justify-start': true, [`bg-${getRandomColor(index)}-lighten-2`]: true, 'justify-end': index % 2 === 0 }"
                >
                    <v-img
                        v-if="logo.url"
                        contain
                        :width="50"
                        :src="'./assets' + logo.url" 
                        class="timeline-logo"
                        :style="{order: (index%2===0) ? 2 : 0}"
                    ></v-img>
                    <h2 class="font-weight-light" style="order: 1">
                        {{ logo.name.toUpperCase() }}
                    </h2>
                </v-card-title>
                <v-card-text class="card-text pa-4">
                    {{ logo.description }}
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline> 
</v-container>


</template>

<script lang="ts">
import seedrandom from 'seedrandom';

type RouteLink = {
    "name": string,
    "description": string,
    "des_img": string,
    "url": string,
    "link": string,
    "visible": boolean,
}

export default {
    name: "SkillsPageComponent",
    props:{
        logosList:{
            type: Array<RouteLink>
            }
        },
        data(){
            return{
                id: '',
                selectedSkill: null,
                items: [],
                isVisible: false,
                colors: [
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
                ],
            }
        },
        mounted() {
            this.id = 'skills';
        },
        methods: {
            openDesctiption(skill: any){
                this.selectedSkill = skill
                this.isVisible = !this.isVisible
            },
            getImgUrl(url: string) {
                return './assets'+url
            },
            goTo(url: string){
                window.open( url, "_blank");
            },
            getRandomColor(seed: any) {
                const rng = seedrandom(seed);
                const n = Math.floor(rng() * this.colors.length);
                return this.colors[n];
            }
        }
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
    max-width: 40px;
    height: 40px;
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
    position: absolute;
    padding: 20px 1rem 1rem 1rem;
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
</style>