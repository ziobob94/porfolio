<template>
    <BodyLayoutTemplate>
        <template #body >
            <div class="">
                <div class="">
                    <h1>Hi!</h1>
                    <h1> I'm Mauro,</h1>
                    <h1> Fullstack Developer </h1>
                </div>
                <div class="">
                    <p class=""> Fullstack Developer  </p>
                    <p> Hardware Technician </p>
                </div>
                <div class="">
                    <button class="">Contact Me</button>
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
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
