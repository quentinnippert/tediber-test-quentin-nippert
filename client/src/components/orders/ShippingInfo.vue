<template>
  <div class="shipping-information-container">
    <div class="shipping-information-card">
      <p class="shipping-information-title">ADRESSE DE COLLECTE</p>
      <p class="shipping-information">
        {{ order.relay_point ? "POINT RELAIS" : "DOMICILE" }}
      </p>
      <p class="shipping-information">
        {{ client.adress.streetNumber + " " + client.adress.street }}
      </p>
      <p class="shipping-information">
        {{ client.adress.city.toUpperCase() }}
      </p>
      <p class="shipping-information">{{ client.adress.zipcode }}</p>
      <p class="shipping-information">{{ client.adress.country }}</p>
    </div>

    <div class="shipping-information-card">
      <div class="shipping-card">
        <p class="shipping-information-title">VOS COORDONNÉES</p>
        <p class="shipping-information">
          {{ client.firstName + " " + client.lastName }}
        </p>
        <p class="shipping-information">{{ client.phone }}</p>
      </div>
    </div>
    <div class="shipping-information-card">
      <div class="shipping-card">
        <p class="shipping-information-title">LIVRAISON ESTIMÉE</p>
        <p class="shipping-information">jeudi 9 mai 2019</p>
      </div>
    </div>
    <div class="shipping-information-card">
      <div class="shipping-card">
        <p class="shipping-information-title">MODE DE LIVRAISON</p>
        <p class="shipping-information">
          {{
            order.relay_point
              ? "livraison standard en point relais"
              : "livraison standard à domicile"
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShippingInfo",
  props: ["order", "client"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shipping-information-container {
  display: table;
  width: 100%;
  height: auto;
  box-shadow: 0 0 0.8rem 0 rgb(127 124 137 / 65%);
  padding: 20px;
  margin-top: 3%;
}

.shipping-information-card:last-child {
  border: none;
}

.shipping-information-card {
  display: table-cell;
  border-right: 1px solid #939393;
  height: 100%;
  width: 25%;
  padding-left: 20px;
}

.shipping-information {
  margin: 0;
  text-align: start;
  font-size: 1.2rem;
}

.shipping-information-title {
  text-align: start;
  font-weight: bold;
  font-size: 1.3rem;
}

@media (max-width: 850px) {
  .shipping-information-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 0;
  }
  .shipping-information-card {
    border-right: none;
    width: 100%;
    padding-left: 0px;
    padding-bottom: 4%;
    border-bottom: 1px solid #939393;
  }
  
}
</style>
