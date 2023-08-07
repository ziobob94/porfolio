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
    colors: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      'surface-variant': '#BDBDBD',
      'on-surface-variant': '#424242',
      primary: '#ffb400',
      'primary-darken-1': '#ff9500',
      secondary: '#5fbeff',
      'secondary-darken-1': '#ff1daa',
      error: '#ff1daa',
      info: '#5fbeff',
      success: '#6bd13e',
      warning: '#6bd13e'
    },
    variables: {
      'border-color': '#000000',
      'border-opacity': 0.12,
      'high-emphasis-opacity': 1,
      'medium-emphasis-opacity': 0.7,
      'disabled-opacity': 0.5,
      'idle-opacity': 0.1,
      'hover-opacity': 0.04,
      'focus-opacity': 0.12,
      'selected-opacity': 0.08,
      'activated-opacity': 0.12,
      'pressed-opacity': 0.16,
      'dragged-opacity': 0.08,
      'theme-kbd': '#212529',
      'theme-on-kbd': '#FFFFFF',
      'theme-code': '#343434',
      'theme-on-code': '#CCCCCC'
    }
  },
  dark:{
    dark: true,
    colors: {
      background: '#1E1E1E',
      surface: '#121212',
      'surface-variant': '#BDBDBD',
      'on-surface-variant': '#424242',
      primary: '#FF8800',
      'primary-darken-1': '#FF6D00',
      secondary: '#64B5F6',
      'secondary-darken-1': '#D81B60',
      error: '#D81B60',
      info: '#64B5F6',
      success: '#43A047',
      warning: '#43A047',
    },
    variables: {
      'border-color': '#000000',
      'border-opacity': 0.12,
      'high-emphasis-opacity': 1,
      'medium-emphasis-opacity': 0.7,
      'disabled-opacity': 0.5,
      'idle-opacity': 0.1,
      'hover-opacity': 0.04,
      'focus-opacity': 0.12,
      'selected-opacity': 0.08,
      'activated-opacity': 0.12,
      'pressed-opacity': 0.16,
      'dragged-opacity': 0.08,
      'theme-kbd': '#212529',
      'theme-on-kbd': '#FFFFFF',
      'theme-code': '#343434',
      'theme-on-code': '#CCCCCC',
    },
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

const vf = {
  display,
  theme: {
    themes: {
      light: themes.ligth,
      dark: themes.dark
    }
  },
  components,
  directives
}

const v = createVuetify(vf);

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default v;
