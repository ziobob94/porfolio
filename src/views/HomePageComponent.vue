<template>
    <div class="home-wrapper d-flex align-start justify-center flex-column " >
        <div class="content-item">
            <h1> Hi!
            I am Mauro <br>
            And I am Fullstack Developer </h1>
        </div>

        <div class="content-item">
            <p style="font-size: 20px;"> Fullstack Developer  </p>
            <p style="font-size: 20px;"> Hardware Technician </p>
        </div>
        <div class="content-item flex-row justify-start" >
            <div v-for="(social) in socialButtons" :key="social.id"
                    class="w-auto mr-2"
                    @click="goTo(social.link, social.id)"
            >
                <img class="logo"
                    :src='getImgUrl(social.icon)'
                />
            </div> 
        </div>
    </div>
   
</template>

<script lang="ts">
export default {
  name: 'HomePageComponent',
  components: {
  },
  props: ['socialButtons'],
  data(){
    return{

    }
  },
  methods: {
    getImgUrl(url: string) {
            return './assets'+url
        },
    goTo(url: string ,id: string){
        if(id !== 'mail') window.open( url, "_blank");
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.body-wrapper{
    display: flex;
    flex-direction: column;
    max-width: 30%;
    gap: 2rem;
    .home{
        position: relative;
    }
}

.content-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0.5rem 0;
    width: 100%;
    max-width: 500px;
    & > *{
        width: 100%;
    }
}

.social-buttons-wrapper{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

}
.social-logo{
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

.logo{
    width: 100%;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.2s ease-out;
    &:hover{
        transform: scale(1.1);
        transition: transform 0.2s ease-in

    }
}

.home-wrapper{
    gap: 4rem;
}

</style>
