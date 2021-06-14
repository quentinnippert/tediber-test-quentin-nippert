<template>
  <div id="app">
    <NavBarMobile v-if="mobileView" />
    <NavBar v-if="!mobileView" />
    <OrderScreen />
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar.vue';
import NavBarMobile from './components/navbar/NavBarMobile.vue';
import OrderScreen from './screens/OrderScreen.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    NavBarMobile,
    OrderScreen,
  },
  data() {
    return {
      mobileView: false,
    }
  },
  methods :{
      handleView () {
        this.mobileView = window.innerWidth <= 990;
      }
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding-bottom: 20px;
}
</style>
