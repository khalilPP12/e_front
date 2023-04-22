<template>
  <div class="position-">
    <b-overlay :show="!articles?.data?.length" rounded="sm">
      <!-- <Slide /> -->
      <div class="content container">
        <div v-if="articles?.data?.length" class="row">
          <div v-for="(item, i) in articles?.data" :key="i" class="col-md-4">
            <Cared
              :id="item.id"
              :title="item.title"
              :price="item.price"
              :description="item.description"
              :image="item.image"
              :btnName="item.nameBtn"
              :hasPromo="item.isPromo"
              :promoPrice="item.promoPrice"
              :gender="item.gender"
              :categorie="item.categorie"
              :oldPrice="item.oldPrice"
              :devise="item.devise"
            />
          </div>
        </div>
        <v-skeleton-loader :content="thumbItem"></v-skeleton-loader>
      </div>
      <vs-pagination
        :total-pages="articles.count"
        :current-page="pageCurrent"
        @change="changePage"
      ></vs-pagination>
    </b-overlay>
  </div>
</template>
<script>
import Slide from "@/components/Slide";
import Cared from "@/components/Cared";

import VSkeletonLoader from "v-skeleton-loader";
import { mapGetters } from "vuex";
import VsPagination from "@vuesimple/vs-pagination";
export default {
  layout: "default",
  components: {
    Slide,
    VsPagination,
    VSkeletonLoader,
    Cared,
  },

  data() {
    return {
      pageCurrent: 1,
      thumbItem: ["box", "text"],
    };
  },
  methods: {
    changePage(page) {
      this.pageCurrent = page;
      this.$store.dispatch("getArticles", {
        pageSize: 6,
        page: page,
      });
    },
  },
  computed: {
    ...mapGetters({
      articles: "getArticles",
      slideArticles: "getSlideArticles",
    }),
  },
  mounted() {
    this.$store
      .dispatch("getArticles", {
        pageSize: 6,
        page: this.pageCurrent,
      })
      .then((res) => {
        console.log("res", res);
      });
    this.$store.dispatch("getSlideArticle");
  },
};
</script>
<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  background: white;
  padding: 40px 100px;
}
.loading {
  top: 50%;
  left: 50%;
}
</style>
