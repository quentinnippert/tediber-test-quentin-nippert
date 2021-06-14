<template>
  <div class="navContainer">
    <img id="logo-title" src="Logo_tediber.png" />
    <a class="nav-content" href="/">NOS PRODUITS</a>
    <a class="nav-content" href="/">LE CONCEPT</a>
    <a class="nav-content" href="/">AVIS</a>
    <img id="logo" src="11942272.png" />
    <a class="nav-content" href="/">PUBTV</a>
    <a class="nav-content" href="/">MON COMPTE</a>
    <a class="nav-content" href="/">MAG</a>
    <a class="nav-content" href="/">CONTACTEZ-NOUS</a>
    <img id="basket" src="basket.png" />
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.8rem 0 rgb(127 124 137 / 65%);
  width: 100%;
  padding: 10px 25px
}

#logo-title {
  width: 125px;
  height: auto;
  margin-left: 25px;
}

#logo {
  width: 100px;
  height: auto;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
}

#logo:hover {
  transform: rotate(30deg);
  transform: rotate(-30deg);
}

#basket {
  width: 50px;
  height: auto;
  margin-right: 25px;
}

.nav-content {
  text-decoration: none;
  color: #202447;
}

.nav-content:hover {
  color: #fab200;
  transition: ease 0.2s;
}
</style>
