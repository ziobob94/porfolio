<template>
    <BodyLayoutTemplate>
        <template #body >
            <div class="body-wrapper home">
                <div class="">
                    <h1>Hi!</h1>
                    <h1> I'm Mauro,</h1>
                    <h1> Fullstack Developer </h1>
                </div>
                <div class="">
                    <p class=""> Fullstack Developer  </p>
                    <p> Hardware Technician </p>
                </div>
                <div class="social-buttons-wrapper">
                    <div class="list-social" v-for="(social, index) in socialButtons" :key="social.id"
                         :style="{
                            animationDelay: index*200+'ms',
                         }"
                         @click="goTo(social.link)"
                    >
                        <img class="social-logo" 
                            :src='getImgUrl(social.icon)'
                        />
                    </div> 
                </div>
            </div>
        </template>
    </BodyLayoutTemplate>

</template>

<script>
import BodyLayoutTemplate from "@/components/layout/BodyLayoutTemplate.vue";
export default {
  name: 'HomePageComponent',
  components: {
      BodyLayoutTemplate,
  },
  props: {
    msg: String,
  },
  data(){
    return{
        socialButtons: [
        {
            id: 'github',
            name: 'github',
            icon: "/social/github.svg",
            link:'https://github.com/ziobob94'
        },
        {
            id: 'linkedin',
            name: 'linkedin',
            icon: "/social/linkedin.svg",
            link:''
        },
        {
            id: 'instagram',
            name: 'instagram',
            icon: "/social/instagram.svg",
            link:''
        },
        {
            id: 'telegram',
            name: 'telegram',
            icon: "/social/telegram.svg",
            link: ''
        },
       {
            id: 'mail',
            name: 'mail',
            icon: "/social/mail.svg",
            link:''
        },
    ]
    }
  },
  methods: {
    getImgUrl(url) {
            return './assets'+url
        },
    goTo(url){
        window.open( url, "_blank");
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
    &:hover {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
}


  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>
