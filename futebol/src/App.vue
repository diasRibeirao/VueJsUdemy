<template>
  <div id="app">
    <AppHeader 
      @select-championship="changeChampionship"
      @change-component="changeComponent"
    />
    <AppSection />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppSection from './components/AppSection'
import AppFooter from './components/AppFooter'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSection,
    AppFooter
  },
  data() {
    return {      
      
    }
  },
  methods: {
    ...mapActions(['changeChampionship']),
    changeComponent(value) {
      let component;

      switch (value) {        
        case 'news':
          component = 'AppSectionNews';
        break;
        case 'home':
        default:
          component = 'AppSectionBanner';
        break;
      }

      this.currentSectionComponent = component;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
