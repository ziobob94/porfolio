<template>
  <div id="skills" class="body-container sk">
    <div class="body-content skills first" :ref="'fe'">
      <div class="body-content skills wrapper">
        <div class="body-content skills wrapper el title">
          <h1 :class="'bounce2'">FRONT END SKILLS</h1>
        </div>
        <transition-group >
          <div v-if="togglerSkillsFE" class="list-wrapper">
            <ul ref="skillsFe" class="body-content skills wrapper el description" >
              <li v-for="(el) in listLogos" :key="el.name" class="skill skill-enter-to">
                <img :src="el.url" :alt="'logo'+ el.name" class="skill-logo"/>
              </li>
            </ul>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="body-content skills" ref="be">
      <div class="body-content skills wrapper">
        <div class="body-content skills wrapper el title">
          <h1 :class="'bounce2'">BACK END SKILLS</h1>
        </div>
        <transition-group >
          <div v-if="togglerSkillsBE"  class="list-wrapper">
            <ul class="body-content skills wrapper el description">
              <li v-for="(el) in listLogos" :key="el.name" class="skill skill-enter-to">
                <img :src="el.url" :alt="'logo'+el.name" class="skill-logo"/>
              </li>
            </ul>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="body-content skills" ref="hs">
      <div class="body-content skills wrapper">
        <div class="body-content skills wrapper el title">
          <h1 :class="'bounce2'">HARDWARE SKILLS</h1>
        </div>
        <transition-group >
          <div v-if="togglerSkillsHS"  class="list-wrapper">
            <ul class="body-content skills wrapper el description">
              <li v-for="(el) in listLogos" :key="el.name" class="skill skill-enter-to">
                <img :src="el.url" :alt="'logo'+el.name" class="skill-logo"/>
              </li>
            </ul>
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
      togglerSkillsFE: false,
      togglerSkillsBE: false,
      togglerSkillsHS: false,
      lastQ: -1,
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
      ],
      id: '',
    }
  },
  mounted() {
    document.addEventListener('scroll', (e) => this.scrollHandler(e));
    this.id = 'skills';
  },
  methods: {
    toggleSkills: function(p){
      if (p === 'fe') this.togglerSkillsFE = !this.togglerSkillsFE
      if (p === 'be') this.togglerSkillsBE = !this.togglerSkillsBE;
      if (p === 'hs') this.togglerSkillsHS = !this.togglerSkillsHS;
    },
    scrollHandler: function(){
      const q = window.scrollY;
      if((q > 0 && q < 700) && this.togglerSkillsFE === false) {
        this.toggleSkills('fe');
        this.togglerSkillsBE = false;
        this.togglerSkillsHS = false;
      }
      if((q >= 700 && q < 1100 ) && this.togglerSkillsBE === false ) {
        this.toggleSkills('be');
        this.togglerSkillsHS = false;
        this.togglerSkillsFE = false;
      }
      if((q >= 1100 && q < 2000 ) && this.togglerSkillsHS === false ) {
        this.toggleSkills('hs');
        this.togglerSkillsBE = false;
        this.togglerSkillsFE = false;
      }
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
  list-style-type: none;
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
  animation: bounce2 2s ease infinite ;
  animation-delay: 0.2s;
}
@keyframes bounce2 {
  0%, 20%, 50%, 80%, 100% {transform: scale(1);}
  40% {transform: scale(0.95);}
  60% {transform: scale(0.93);}
}



</style>