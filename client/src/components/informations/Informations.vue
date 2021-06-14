<template>
  <div class="container">
    <div class="element-container">
      <div class="element-title">
        <p class="element-text">FOIRE AUX QUESTION TEDIBER</p>
        <a @click="toggleFAQ()"><fa-icon icon="chevron-down" size="2x" /></a>
      </div>
      <p v-if="faqVisible" class="response-text">
        Découvrez toute notre FAQ en cliquant ici :
        <a href="https://www.tediber.com/faq">FAQ</a>
      </p>
    </div>
    <div class="element-container">
      <div class="element-title">
        <p class="element-text">LA GARANTIE TEDIBER</p>
        <a @click="toggleGarantee()"
          ><fa-icon icon="chevron-down" size="2x"
        /></a>
      </div>
      <p v-if="garanteeVisible" class="response-text">
        Nous vous remercions d’avoir acheté un ou plusieurs nouveau(x)
        produit(s) TEDIBER. Notre exigence de qualité est élevée et ne doutons
        pas que vous serez très heureux de votre achat. Cependant, si vous ne
        vous accoutumez pas à TEDIBER ou si vous découvrez un défaut dans votre
        produit, voici ci-dessous les conditions de notre garantie. Si vous
        estimez avoir le droit de vous prévaloir de leurs conditions, n’hésitez
        pas à nous contacter à hello@tediber.com pour recevoir des instructions
        sur la manière de procéder. VEUILLEZ NOTER QUE NOTRE GARANTIE DES “100
        NUITS D’ESSAI & RETOUR GRATUIT” ET NOS GARANTIES PRODUITS S’APPLIQUENT
        UNIQUEMENT AUX ACHETEURS INITIAUX DE PRODUITS TEDIBER AUTHENTIQUES, QUI
        ONT ÉTÉ ACHETÉS DIRECTEMENT ET SEULEMENT AUPRÈS DE TEDIBER. UNE PREUVE
        D’ACHAT VOUS SERA DEMANDÉE AFIN DE CERTIFIER DE L’AUTHENTICITÉ DE
        L’ACHAT. LA GARANTIE DES “100 NUITS D’ESSAI & RETOUR GRATUIT” S’APPLIQUE
        POUR CHAQUE PRODUIT TEDIBER MAIS N’EST EN AUCUN CAS RENOUVELABLE.
      </p>
    </div>
    <div class="element-container">
      <div class="element-title">
        <p class="element-text">REPRISE DE L'ANCIENNE LITERIE</p>
        <a @click="toggleOldBedding()"
          ><fa-icon icon="chevron-down" size="2x"
        /></a>
      </div>
      <p v-if="oldBedding" class="response-text">
        Les articles de literie récupérés sont remis à Eco-mobilier, organisme
        auquel nous reversons une cotisation à chaque vente, pour financer le
        recyclage de la literie usagée. Eco-mobilier s’occupe alors de lui
        donner une 2ème vie. L’organisme démantèle les produits et récupère les
        matériaux qui les composent. Les matériaux sont ensuite transformés en
        panneaux acoustiques et thermiques, pour le secteur du bâtiment par
        exemple. On peut aussi en faire de nouveaux articles de literie ou même
        des tatamis de judo. Certains composants sont aussi utilisés comme
        source d’énergie.
      </p>
    </div>
    <div class="element-container">
      <div class="element-title">
        <p class="element-text">COMMENT FAIRE UN RETOUR ?</p>
        <a @click="toggleReturn"><fa-icon icon="chevron-down" size="2x" /></a>
      </div>
      <p v-if="returnVisible" class="response-text">
        Imaginons que je décide de ne pas garder mon Tediber ? Cela nous
        briserait le cœur, mais que vous vous accoutumiez ou non à Tediber, nous
        ferons toujours notre maximum pour que votre expérience soit la plus
        belle possible. Nous récupérerons vos matelas Tediber et Grand Tedi by
        Tediber ainsi que le sommier Tediber à nos frais, puis vous
        rembourserons directement sur votre carte bancaire. Nous annulons, en
        fait, la transaction de paiement. Pour le retour de vos matelas Tedi by
        Tediber, oreiller ou couette, nous vous enverrons une étiquette
        Colissimo prépayée. Dès réception des produits à notre entrepôt, nous
        procéderons au remboursement. Vous pouvez changer d'avis sur votre linge
        de lit, en nous le renvoyant sans l'avoir ni utilisé ni déplié, dans les
        30 jours qui suivent votre achat. Pour le retour, nous vous enverrons
        une étiquette Colissimo prépayée. Dès réception des produits à notre
        entrepôt, nous procéderons au remboursement. Pour les pays suivants :
        Allemagne, Autriche, Pays-Bas. Si vous changez d’avis cependant et
        souhaitez annuler votre commande après livraison, vous devrez payer les
        frais de retour ou d’enlèvement. Le montant des frais de retour ou
        d’enlèvement seront calculés en fonction de la valeur sous-total des
        articles que vous renverrez conformément au tableau ci-dessous. Valeur
        des articles retournés Frais de retour Strictement inférieure à 200€ 39€
        Strictement inférieure à 500€ 79€ Strictement inférieure à 1500€ 129€
        Supérieure ou égale à 1500€ 159€
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Informations",
  data() {
    return {
      faqVisible: false,
      garanteeVisible: false,
      oldBedding: false,
      returnVisible: false,
    };
  },
  methods: {
    toggleFAQ() {
      this.faqVisible = !this.faqVisible;
    },
    toggleGarantee() {
      this.garanteeVisible = !this.garanteeVisible;
    },
    toggleOldBedding() {
      this.oldBedding = !this.oldBedding;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
}

.element-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-top: 1px solid #202447;
}

.element-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.element-container:last-child {
  border-bottom: 1px solid #202447;
}

a {
  cursor: pointer;
}

.response-text {
    text-align: start;
}
</style>
