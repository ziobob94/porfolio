<template>
  <div class="switch-theme-wrapper">
    <v-switch @change="toggleTheme">
        <template v-slot:label>
            <v-icon size="small" icon="mdi-theme-light-dark"></v-icon>
        </template>
    </v-switch>
  </div>

</template>
  
<script setup lang="ts">
import { useTheme } from 'vuetify'
const theme = useTheme();
const toggleTheme = () => {
  theme.global.name.value = (theme.global.current.value.dark) ? 'light' : 'dark';
}
</script>

<style lang="scss">
.switch-theme-wrapper{
    position: absolute;
    width: 95px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.5rem;
    right: 0;
}
</style>