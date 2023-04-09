<template>
  <div>
    <div
      class="d-flex"
      :class="{
        'justify-content-between': isPromo,
        'justify-content-end': !isPromo,
      }"
    >
      <div v-if="isPromo" class="d-flex">
        <div class="reduction d-flex align-items-center justify-content-center">
          <span> {{ percent }}</span>
        </div>
      </div>
      <div class="favoris">
        <div>
          <input
            v-model="star"
            id="star1"
            class="star"
            :checked="star"
            type="checkbox"
            title="bookmark page"
          /><br /><br />
          <label for="star1" title="Amazing"></label>
        </div>
      </div>
    </div>
    <div class="text-title">{{ nameArticle }}</div>
    <div class="gender">{{ gender }}</div>
    <div class="name-article">Eau de parfum</div>
    <div class="w-75 description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      star: false,
    };
  },
  props: {
    nameArticle: {
      type: String,
      default: "PACO RABANNE",
    },
    isPromo: {
      type: Boolean,
      default: false,
    },
    promoPrice: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "Femme",
    },
    description: {
      type: String,
      default:
        "Découvrez le nouveau parfum sensuel pour femme signé Paco Rabanne. Fame est une fragrance subtile ...",
    },
    price: {
      type: String,
      default: "",
    },
    priceOld: {
      type: String,
      default: "",
    },
    percent: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.description {
  letter-spacing: 0.5px;
  font-size: 0.9375rem;
  line-height: 1.27;
}
.reduction {
  height: 35px;
  width: 50px;
  background-color: #d50032;
  border-radius: 10px;
}
.reduction span {
  font-size: 12px;
  color: #fff;
  font-weight: 600;
}
.text-title {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
}
.star {
  visibility: hidden;
  font-size: 30px;
  cursor: pointer;
}
.star:before {
  content: "\2605";
  position: absolute;
  visibility: visible;
}
.star:checked:before {
  content: "\2606";
  position: absolute;
}
.gender,
.name-article {
  font-size: 1.25rem;
  line-height: 2rem;
  display: block;
  color: #666;
  width: 70%;
  letter-spacing: 0.4px;
  margin-top: 16px;
  color: #000;
}
</style>