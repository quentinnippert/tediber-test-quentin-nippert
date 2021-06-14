<template>
  <div class="payment-information-container">
    <img
      class="payment-method"
      v-if="order.payment_method === 'visa'"
      src="visa.jpg"
    />
    <p style="font-size: 1.3rem; margin: 0" v-if="order.payment_method === 'visa'">VISA</p>
  </div>
</template>

<script>
export default {
  name: "PaymentInfo",
  props: ["order"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.payment-information-container {
  width: 100%;
  height: auto;
  box-shadow: 0 0 0.8rem 0 rgb(127 124 137 / 65%);
  padding: 20px;
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.payment-method {
  width: 70px;
  height: auto;
  margin-right: 10px;
}
</style>
