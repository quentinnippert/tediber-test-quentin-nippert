
<template>
  <div class="container">
    <div class="title-container">
      <hr class="solid" />
      <h2 class="order-title">SUIVI DE COMMANDE</h2>
      <hr class="solid" />
    </div>
    <div class="yellow-divider-container">
      <img class="zigzag" src="zigzag copy 2.svg" />
    </div>
    <div class="order-details-container">
      <div class="order-left-container">
        <div class="order-details">
          <p class="details-paragraph">
            N° de commande : <strong>{{ order.order_number }}</strong>
          </p>
          <p class="details-paragraph">
            Date de commande :
            <strong>{{
              new Date(order.order_date).toLocaleString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }}</strong>
          </p>
          <p class="details-paragraph">
            Date d'expédition :
            <strong>{{
              new Date(order.shipping_date).toLocaleString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }}</strong>
          </p>
        </div>
        <hr class="solid-details" />
        <div class="shipping-container">
          <div class="tracking-title">
            <p class="tracking-text">Suivi commande</p>
            <a @click="toggleTracking">
              <fa-icon
                v-bind:class="{ toggle: trackingVisible }"
                icon="chevron-down"
                size="2x"
              />
            </a>
          </div>

          <div class="shipping-pics-container" v-if="trackingVisible">
            <div class="shipping-pics">
              <img class="picture-shipping1" src="Group.svg" />
              <div class="square">
                <fa-icon
                  icon="check"
                  size="2x"
                  color="green"
                  v-if="
                    order.status === 'Prepared' ||
                    order.status === 'Dispatched' ||
                    order.status === 'Shipping' ||
                    order.status === 'Delivered'
                  "
                />
              </div>
            </div>
            <img class="arrow" src="arrow.png" />
            <div class="shipping-pics">
              <img class="picture-shipping2" src="Group 2.svg" />
              <div class="square">
                <fa-icon
                  icon="check"
                  size="2x"
                  color="green"
                  v-if="
                    order.status === 'Dispatched' ||
                    order.status === 'Shipping' ||
                    order.status === 'Delivered'
                  "
                />
              </div>
            </div>
            <img class="arrow" src="arrow.png" />
            <div class="shipping-pics">
              <img class="picture-shipping2" src="Group 3.svg" />
              <div class="square">
                <fa-icon
                  icon="check"
                  size="2x"
                  color="green"
                  v-if="
                    order.status === 'Shipping' || order.status === 'Delivered'
                  "
                />
              </div>
            </div>
            <img class="arrow" src="arrow.png" />
            <div class="shipping-pics">
              <img class="picture-shipping3" src="Group 4.svg" />
              <div class="square">
                <fa-icon
                  icon="check"
                  size="2x"
                  color="green"
                  v-if="order.status === 'Delivered'"
                />
              </div>
            </div>
          </div>
        </div>
        <hr class="solid-details" />
        <div class="tracking-title">
          <p class="tracking-text">Informations de retour</p>
          <a @click="toggleReturn">
            <fa-icon
              v-bind:class="{ toggle: returnVisible }"
              icon="chevron-down"
              size="2x"
            />
          </a>
        </div>

        <div class="return-informations" v-if="returnVisible">
          <p class="return-text">
            Le Seigneur des anneaux : Le Retour du roi (The Lord of the Rings:
            The Return of the King) est un film américano-néo-zélandais réalisé
            par Peter Jackson, sorti en 2003. Adapté du livre Le Retour du roi
            de J. R. R. Tolkien, il incorpore également des événements du livre
            précédent, Les Deux Tours. C'est le troisième volet de la trilogie
            Le Seigneur des anneaux, après La Communauté de l'anneau et Les Deux
            Tours.
          </p>
        </div>
        <hr class="solid-details" />
      </div>
      <div class="order-right-container" id="productsList">
        <p class="article-number">ARTICLES ({{ productCount }})</p>
        <div
          class="product-card-container"
          v-for="(product, index) in order_articles"
          v-bind:product="product"
          v-bind:index="index"
          v-bind:key="product.id"
        >
          <img class="product-img" v-bind:src="product.img" />
          <div class="product-details">
            <p class="product-title">{{ product.name }}</p>
            <p class="product-title">{{ product.subTotal }} €</p>
            <div class="size-qty-container">
              <p class="product-size-qty">TAILLE: {{ product.size }}</p>
              <p class="product-size-qty">QTÉ : {{ product.quantity }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="title-container">
      <hr class="solid" />
      <h2 class="order-title">INFORMATIONS SUR LA LIVRAISON</h2>
      <hr class="solid" />
    </div>
    <div class="yellow-divider-container">
      <img class="zigzag" src="zigzag copy 2.svg" />
    </div>
    <ShippingInfo :order="order" :client="client" />
    <div class="title-container">
      <hr class="solid" />
      <h2 class="order-title">INFORMATIONS DE PAIEMENT</h2>
      <hr class="solid" />
    </div>
    <div class="yellow-divider-container">
      <img class="zigzag" src="zigzag copy 2.svg" />
    </div>

    <PaymentInfo :order="order" />

    <div class="title-container">
      <hr class="solid" />
      <h2 class="order-title">TOTAL COMMANDE</h2>
      <hr class="solid" />
    </div>
    <div class="yellow-divider-container">
      <img class="zigzag" src="zigzag copy 2.svg" />
    </div>

    <OrderTotal :order="order" />

    <div class="title-container">
      <hr class="solid" />
      <h2 class="order-title">BESOIN D'AIDE ?</h2>
      <hr class="solid" />
    </div>
    <div class="yellow-divider-container">
      <img class="zigzag" src="zigzag copy 2.svg" />
    </div>
    <Informations />
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import ShippingInfo from "../components/orders/ShippingInfo.vue";
import PaymentInfo from "../components/orders/PaymentInfo.vue";
import OrderTotal from "../components/orders/OrderTotal.vue";
import Informations from "../components/informations/Informations.vue";

export default {
  name: "OrderScreen",
  components: {
    ShippingInfo,
    PaymentInfo,
    OrderTotal,
    Informations,
  },
  el: "#productsList",
  data() {
    return {
      trackingVisible: true,
      returnVisible: false,
      order_articles: [],
      client: {},
      order: {},
      productCount: 0,
    };
  },
  props: {
    msg: String,
  },
  async mounted() {
    Vue.axios
      .get(`http://localhost:3000/order?id=60c5be04ae9e8abafabc3985`)
      .then((resp) => {
        this.order = JSON.parse(JSON.stringify(resp.data));
        this.order_articles = JSON.parse(
          JSON.stringify(resp.data)
        ).orders_articles;
        this.client = JSON.parse(JSON.stringify(resp.data)).client_id;
        JSON.parse(JSON.stringify(resp.data)).orders_articles.forEach(
          (element) => {
            this.productCount += element.quantity;
          }
        );
      });
  },
  methods: {
    toggleTracking() {
      this.trackingVisible = !this.trackingVisible;
    },
    toggleReturn() {
      this.returnVisible = !this.returnVisible;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0% 10%;
}

.title-container {
  width: 103%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2%;
}

hr.solid {
  border-top: 1px solid #202447;
  width: 100%;
  height: 1px;
  display: inline-block;
  vertical-align: middle;
}

hr.solid-details {
  width: 100%;
  border-top: 1px solid #202447;
}

.order-title {
  color: #202447;
  font-weight: 500;
  letter-spacing: 5px;
  font-size: 1.5rem;
  z-index: 1;
  margin: 0px 20px;
}

.zigzag {
  width: 150px;
  height: auto;
}

.order-details-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 4%;
  flex-wrap: wrap;
}

.order-left-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 46%;
}


.order-right-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 46%;
}

@media (max-width: 990px) {
  .order-left-container {
    width: 100%;
  }
  .order-right-container {
    width: 100%;
  }
}

.order-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3%;
}

.details-paragraph {
  color: #202447;
  font-size: 1.1rem;
  margin-bottom: 2%;
}

.shipping-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.shipping-pics-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}

.shipping-pics {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 150px;
}

.square-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.square {
  width: 20px;
  height: 20px;
  border: 1px solid #969696;
  display: flex;
  justify-content: center;
  align-items: center;
}

.picture-shipping1 {
  width: 50px;
  height: auto;
}

.picture-shipping2 {
  width: 110px;
  height: auto;
}

.picture-shipping3 {
  width: 70px;
  height: auto;
}

.arrow {
  width: 30px;
  height: auto;
  margin-top: 20px;
}

.tracking-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.tracking-text {
  margin: 0;
}

.toggle {
  transform: rotate(180deg);
}

.return-informations {
  width: 100%;
}

.return-text {
  text-align: left;
  color: #202447;
}

.product-card-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 150px;
  width: 100%;
  box-shadow: 0 0 0.8rem 0 rgb(127 124 137 / 65%);
  padding: 10px;
  margin-bottom: 5%;
}

.product-img {
  width: auto;
  height: 150px;
  margin-right: 10px;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.product-title {
  margin-bottom: 5px;
  margin-top: 0px;
  font-weight: bold;
  color: #202447;
}

.product-size-qty {
  margin: 0;
}

.size-qty-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.yellow-divider-container {
  margin-top: 2%;
}
</style>
