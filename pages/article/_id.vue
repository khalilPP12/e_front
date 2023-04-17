<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <div class="image_box row">
                <img
                  class="col-md-6 p-0 img_plugin"
                  v-for="(item, index) in article.data.images"
                  :key="index"
                  :src="item.url"
                  @click="imageView(index)"
                />
              </div>
            </div>
            <div
              class="col-md-6 d-flex justify-content-center align-items-center"
            >
              <img :src="article.data.principalImage" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <DetailsArticle
            :gender="article.data.gender"
            :percent="article.data.pourcentage"
            :nameArticle="article.data.name"
            :isPromo="article.data.promotion"
            :promoPrice="article.data.promoPrice"
            :description="article.data.description"
            :price="article.data.price"
            :priceOld="article.data.oldPrice"
          />
          <div class="d-flex justify-content-end">
            <b-button id="show-btn" @click="showModal">Je le veux </b-button>

            <b-modal ref="my-modal" hide-footer :title="article.data.name">
              <FormulateForm
                name="myForm"
                :isLoading="loading"
                class="row all-inputs"
                @submit="submitHandler"
                v-model="values"
                :schema="inputs"
              />
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import DetailsArticle from "../../components/Articles/DetailsArticle.vue";
import imageViewer from "vue-image-viewer";
import Vue from "vue";
import VueLoadingButton from "vue-loading-button";
import { formatDateToBFF } from "../../mixins/utils.js";
import { schema } from "/static/constants/forms";
Vue.use(imageViewer);
export default {
  layout: "default",
  components: {
    DetailsArticle,
    VueLoadingButton,
  },
  data() {
    return {
      id: this.$route.params.id,
      images: [],
      loading: true,
      values: {},
      inputs: schema,
    };
  },
  //  this.$formulate.reset('myForm');
  watch: {
    article() {
      if (this.article.data.images && this.article.data.images.length) {
        this.$imageViewer.images(this.article.data.images);
      }
    },
  },
  methods: {
    submitHandler() {
      const payload = {
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
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
  computed: {
    ...mapGetters({ article: "getArticle" }),
  },
  mounted() {
    this.$store.dispatch("getArticle", this.id);
  },
};
</script>
<style scoped>
.image_box {
  width: 100%;
}
.image_box img {
  height: auto;
  width: 100%;
}
input {
  width: 100%;
}
#show-btn {
  text-transform: uppercase;
  border-radius: unset;
  background-color: #000;
}
</style>
