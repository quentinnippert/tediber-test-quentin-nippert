<template>
  <div class="container">
    <div class="nav-container">
      <a @click="toggleMenu"><fa-icon icon="bars" size="3x" /></a>
      <img src="Logo_tediber.png" class="logo" />
      <img src="basket.png" class="basket" />
    </div>
    <div class="menu-items-container" v-if="menuVisible">
      
        <a class="nav-content" href="/">NOS PRODUITS</a>
        <a class="nav-content" href="/">LE CONCEPT</a>
        <a class="nav-content" href="/">AVIS</a>
        <a class="nav-content" href="/">PUBTV</a>
        <a class="nav-content" href="/">MON COMPTE</a>
        <a class="nav-content" href="/">MAG</a>
        <a class="nav-content" href="/">CONTACTEZ-NOUS</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
      return {
          menuVisible: false,
      }
  },
  methods: {
      toggleMenu() {
          this.menuVisible = !this.menuVisible;
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  box-shadow: 0 0 0.8rem 0 rgb(127 124 137 / 65%);
  padding: 2% 0%;
}

.logo {
  width: 150px;
  height: auto;
  margin: 0% 5%;
}

.basket {
  width: 50px;
  height: auto;
}

.menu-items-container {
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-left: 5%;
}

a {
    cursor: pointer;
}

.nav-content {
    font-size: 2rem;
    text-decoration: none;
    color: #202447;
}

</style>