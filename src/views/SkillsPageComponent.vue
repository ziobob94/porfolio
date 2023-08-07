<template>
    <div name="list" tag="ul" class="list">
        <div class="list-item"
            v-for="(logo, index) in items" 
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
        </div>
    </div>
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
</template>

<script>

export default {
    name: "SkillsPageComponent",
    props:['logosList'],
    data(){
        return{
            id: '',
            selectedSkill: null,
            items: null,
            isVisible: false,
        }
    },
    mounted() {
        this.id = 'skills';
        this.items = this.logosList
    },
    methods: {
        openDesctiption(skill){
            this.selectedSkill = skill
            this.isVisible = !this.isVisible
        },
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

.skill-logo{
    width: 50px;
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
</style>