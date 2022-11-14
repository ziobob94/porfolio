<template>
  <div id="skills" class="body-container">
    <div class="body-content skills">
        <div class="body-content skills wrapper">
           <div @click="this.toggleSkills" class="body-content skills wrapper el title">
            <h1 :class="(togglerSkills) ? '' : 'bounce2'">Front end skills</h1>
          </div>
        <transition-group>
          <div v-if="togglerSkills" class="body-content skills wrapper el description">
            <div v-for="(el) in listLogos" :key="el.name" class="skill skill-enter-to">
              <img  :src="el.url" :alt="'logo'+el.name" class="skill-logo"/>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsComponent",
  data(){
    return{
      togglerSkills: false,
      listLogos: [
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
      ]
    }
  },
  methods: {
    toggleSkills: function(){
      this.togglerSkills = !this.togglerSkills;
    }
  }
}
</script>

<style scoped>

  .skill-logo{
    width: 4rem;
  }
  .skill{
    width: 4rem;
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .skill {
    transition: all 0.5s;
    width: 4rem;
  }
  .skill-enter, .skill-leave-to
    /* .skill-leave-active for <2.1.8 */ {
    opacity: 0;
    transform: scale(0);
  }
  .skill-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .skill-leave-active {
    /*position: absolute;*/
  }

  .skill-move {
    opacity: 1;
    transition: all 0.5s;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .bounce2 {
    animation: bounce2 2s ease infinite;
  }
  @keyframes bounce2 {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-30px);}
    60% {transform: translateY(-15px);}
  }
</style>