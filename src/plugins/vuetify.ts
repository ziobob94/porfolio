/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Composables
import { createVuetify } from 'vuetify'



const themes = {
  ligth:{
    dark: false,
    colors:{      
      background: "#121212", // Adjust this to your preferred dark background color
      surface: '#121212',
      primary: '#ffb400',
      'primary-darken-1': '#ff9500',
      secondary: '#5fbeff',
      'secondary-darken-1': '#ff1daa',
      error: '#ff1daa',
      info: '#5fbeff',
      success: '#6bd13e',
      warning: '#6bd13e',
    }
  },
  dark:{
    dark: true,
    colors:{
      background: '#FFFFFF',
      surface: '#FFFFFF',
      primary: '#ffb400',
      'primary-darken-1': '#ff9500',
      secondary: '#5fbeff',
      'secondary-darken-1': '#ff1daa',
      error: '#ff1daa',
      info: '#5fbeff',
      success: '#6bd13e',
      warning: '#6bd13e',
    }
  }
}

const  display = {
  thresholds: {
    xs: 0,
    sm: 340,
    md: 540,
    lg: 800,
    xl: 1280,
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  display,
  theme: {
    themes
  },
  components,
  directives
})
