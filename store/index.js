import { urlWS } from "../static/constants";
import { articlesFormat, articleFormat, slideArticleFormat } from "../store/formatData/articles";

export const state = () => ({
  article: {},
  articles: [],
  slideArticles: [],
  sendForms: null
});

export const mutations = {
  setArticle(state, payload) {
    state.article = payload;
  },
  setArticles(state, payload) {
    state.articles = payload;
  },
  setSlideArticle(state, payload) {
    state.slideArticles = payload
  },
  setOkForms(state, payload) {
    state.sendForms = payload
  }
};

export const getters = {
  getArticle(state) {
    return articleFormat(state.article);
  },
  getArticles(state) {
    return articlesFormat(state.articles);
  },
  getSlideArticles(state) {
    return slideArticleFormat(state.slideArticles)
  },
  getOkForms(state) {
    return state.sendForms
  }
};

export const actions = {
  async getArticle({ commit }, id_article) {
    let responseApi = await this.$axios.$get(urlWS.ARTICLE(id_article))
    return commit("setArticle", responseApi);
  },
  async getArticles({ commit }, paginationSettings) {
    let responseApi = await this.$axios.$get(urlWS.ARTICLES(paginationSettings))
    return commit("setArticles", responseApi);
  },
  async getSlideArticle({ commit }) {
    let responseApi = await this.$axios.$get(urlWS.SLIDEARTICLE)
    return commit("setSlideArticle", responseApi.data?.attributes.articles.data)
  },
  async sendForms({ commit }, payload) {
    let response = await this.$axios.$post(urlWS.SEND_FORMS, { data: payload })
    return commit('setOkForms', response.data)
  }
};

