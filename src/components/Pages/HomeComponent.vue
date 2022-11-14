<template>
   <div id="home" class="body-container">
      <div class="body-content home">
        <div class="body-content home wrapper">
          <div class="body-content home wrapper el title">
            <h1>Hi!</h1>
            <h1> I'm Mauro,</h1>
            <h1> Fullstack Developer </h1>
          </div>
          <div class="body-content home wrapper el description">
            <p class="text">Front end developer  /  Back end developer  /  Hardware Technician </p>
          </div>
          <div class="body-content home wrapper el tail">
            <Button class="p-button-secondary">Contact Me</Button>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import Button from 'primevue/button'
export default {
  name: 'HomeComponent',
  components: {
    Button
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
