<template>
  <div class="card">
    <img :src="image" :alt="title + '-' + id" />
    <div class="product-info">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <p class="price">{{ price + devise }}</p>
      <button class="buy-button">
        <NuxtLink class="btnBuy" :to="`/article/${id}`">{{
          $t("btnBuy")
        }}</NuxtLink>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Product",
    },
    price: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    promoPrice: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    devise: {
      type: String,
      default: process.env.devise,
    },
    oldPrice: {
      type: String,
      default: "",
    },
    hasPromo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
}

.card img {
  width: 100%;
  max-height: 300px;
  height: auto;
  object-fit: cover;
}

.product-info {
  padding: 20px;
  text-align: center;
  height: 300px;
}

.product-info h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-info p {
  font-size: 16px;
  margin-bottom: 10px;
}

.price {
  font-size: 20px;
  font-weight: bold;
}

.buy-button {
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.buy-button:hover {
  background-color: #333;
}
</style>