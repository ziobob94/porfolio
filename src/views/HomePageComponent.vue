<template>
    <v-container class="home-wrapper w-auto d-flex align-start justify-center flex-column ">
        <v-sheet class="content-item">
            <h1 class="animate__animated animate__bounce"> Hi!
                I am Mauro <br>
                And I am Fullstack Developer
            </h1>
        </v-sheet>

        <div class="content-item">
            <p style="font-size: 20px;"> Fullstack Developer </p>
            <p style="font-size: 20px;"> Hardware Technician </p>
        </div>
        <div class="content-item flex-row justify-start">
            <div v-for="(social) in socialButtons" :key="social.id" class="w-auto mr-2">
                <a :href="social.link" target="_blank">
                    <img class="logo" :src='getImgUrl(social.icon)' />
                </a>
            </div>
        </div>
    </v-container>
</template>

<script setup lang="ts">

import configs from '@/assets/configs.json';


const socialButtons = configs.socialButtons;



const getImgUrl = (url: string) => {
    return './assets' + url
}
const goTo = (url: string, id: string) => {
    if (id !== 'mail') window.open(url, "_blank");
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.body-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 30%;
    gap: 2rem;

    .home {
        position: relative;
    }
}

.content-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0.5rem 0;
    width: 100%;
    max-width: 500px;
    background: transparent;

    &>* {
        width: 100%;
    }
}

.social-buttons-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

}

.social-logo {
    height: 3.5rem;
    width: 3.5rem;
    margin-right: 1rem;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.5s ease-in;

    &:hover {
        transform: scale(1.2);
        transition: transform 0.5s ease-in;
        backface-visibility: hidden;
    }
}

.logo {
    width: 100%;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.2s ease-out;

    &:hover {
        transform: scale(1.1);
        transition: transform 0.2s ease-in
    }
}

.home-wrapper {
    gap: 2rem;
}
</style>
