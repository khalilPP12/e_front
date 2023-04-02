<template>
  <div>
    <div v-if="article">
      {{ article }}
      <div class="image_box row">
        <img
          class="col-md-6 p-0"
          v-for="(item, index) in article.data.images"
          :key="index"
          :src="item.url"
          @click="imageView(index)"
        />
      </div>
    </div>
    <FormulateForm @submit="submitHandler" v-model="values" :schema="schema" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import imageViewer from "vue-image-viewer";
import Vue from "vue";
import { formatDateToBFF } from "../../mixins/utils.js";
Vue.use(imageViewer);
export default {
  layout: "default",
  data() {
    return {
      id: this.$route.params.id,
      images: [],
      values: {},
      schema: [
        {
          type: "text",
          name: "fullName",
          label: "Nom complet",
          validation: "required",
        },
        {
          type: "email",
          name: "email",
          label: "Email",
          validation: "required",
        },
        {
          type: "number",
          name: "phoneNumber",
          label: "Numéro de téléphone",
          validation: "required",
        },
        {
          type: "text",
          name: "homeAdress",
          label: "Adresse",
          // validation: "^required|confirm:password",
          validation: "required",
        },
        {
          type: "submit",
          label: "Valider la commande",
        },
      ],
    };
  },
  watch: {
    article() {
      if (this.article.data.images && this.article.data.images.length) {
        this.$imageViewer.images(this.article.data.images);
      }
    },
  },

  methods: {
    submitHandler() {
      let payload = {
        ...this.values,
        isPromoArticle: this.article?.data?.promotion,
        dateCommande: formatDateToBFF(new Date()),
        article: this.article?.data?.id,
        article_ID: this.article?.data?.id,
      };
      this.$store.dispatch("sendForms", payload);
    },
    imageView(index) {
      this.$imageViewer.index(index);
      this.$imageViewer.show();
    },
  },
  computed: {
    ...mapGetters({ article: "getArticle" }),
  },
  mounted() {
    console.log("this.$route", this.id);
    this.$store.dispatch("getArticle", this.id);
  },
};
</script>
<style scoped>
.image_box {
  width: 50%;
}
.image_box img {
  height: 300px;
  width: 100px;
}
</style>
