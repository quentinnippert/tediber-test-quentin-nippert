<template>
    <div class="total-container">
      <div class="total-card">
        <div class="total-titles">
          <p class="payment-information">Sous-total :</p>
          <p class="payment-information">Livraison :</p>
          <p class="payment-information"><strong>TOTAL : </strong></p>
        </div>
        <div class="total-numbers">
          <p class="payment-information">{{ order.total }}</p>
          <p class="payment-information">
            {{ order.shipping_price > 0 ? order.shipping_price : "GRATUITE" }}
          </p>
          <p class="payment-information">
            <strong>{{ order.total + order.shipping_price }}</strong>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "OrderTotal",
  props: ["order"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.total-container {
  width: 100%;
  height: auto;
  box-shadow: 0 0 0.8rem 0 rgb(127 124 137 / 65%);
  padding: 20px;
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.total-card {
  display: flex;
}

.total-titles {
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  align-items: flex-start;
}

.total-numbers {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-left: 30px;
}

.payment-information {
  margin-top: 0;
  font-size: 1.2rem;
}

.payment-information:last-child {
  margin-bottom: 0;
}
</style>