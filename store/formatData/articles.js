import _ from "lodash";
import { formatDate, formatDateSecond, getGender, getColorsByLabel, addUnityVolumToProduct } from "../../mixins/utils.js";
import { categories, colors, link, devise, volumeUnit, procent } from '../../static/constants'

export const articlesFormat = (content) => {
  if (content.data && content.data?.length) {
    return {
      data: _.map(content.data, function fromatMyObject(i) {
        return {
          id: i.id,
          title: i.attributes.nameArticle,
          quantity: i.attributes.quantity,
          promoPrice: i.attributes.promoPrice,
          price: i.attributes.price,
          oldPrice: i.attributes.oldPrice,
          gender: i.attributes?.Gender && i.attributes?.Gender?.length ? _.map(i.attributes.Gender, function T(i) {
            return getGender(i)
          })[0] : null,
          isPromo: i.attributes.promotion,
          categorie: i.attributes.categories && i.attributes.categories.length ? _.find(categories, {
            en: i.attributes.categories[0]
          })?.fr : null,
          description: i.attributes.description,
          nameBtn: i.attributes.nameBtn,
          image: link + i?.attributes?.imagePresentation?.data?.attributes?.url,
          images: _.map(
            i?.attributes?.images_products?.data,
            function formatImages(j) {
              return {
                url: link + j?.attributes?.url,
              };
            }
          ),
          devise: " " + devise,
        };
      }),
      count: content?.meta?.pagination?.pageCount,
    };
  } else return { data: null, count: 0 };
};
export const articleFormat = (content) => {
  if (Object.keys(content)) {
    return {
      data: {
        id: content?.data?.id,
        description: content?.data?.attributes?.description,
        name: content?.data?.attributes?.nameArticle,
        button: content?.data?.attributes?.nameBtn,
        oldPrice: content?.data?.attributes?.oldPrice,
        price: content?.data?.attributes?.price,
        promoPrice: content?.data?.attributes?.promoPrice,
        promotion: content?.data?.attributes?.promotion,
        quantity: content?.data?.attributes?.quantity,
        isLiquide: content?.data?.attributes?.isLiquide,
        gender: content?.data?.attributes?.Gender && content?.data?.attributes?.Gender?.length ? _.map(content?.data?.attributes?.Gender, function T(i) {
          return getGender(i)
        })[0] : null,
        sizeLiquide: content?.data?.attributes?.sizeLiquide && content?.data?.attributes?.sizeLiquide?.length ? addUnityVolumToProduct(content?.data?.attributes?.sizeLiquide, volumeUnit) : null,
        hasColor: content?.data?.attributes?.hasColors,
        hasSize: content?.data?.attributes?.hasSize,
        pourcentage: content?.data?.attributes?.pourcentage ? "-" + content?.data?.attributes?.pourcentage?.toString() + procent : null,
        selectColors: content?.data?.attributes?.colors && content?.data?.attributes?.colors?.length ? getColorsByLabel(colors, content?.data?.attributes?.colors) : null,
        size: content?.data?.attributes?.sizeArticle && content?.data?.attributes?.sizeArticle?.length ? content?.data?.attributes?.sizeArticle : null,
        creationArticle: formatDate(content?.data?.attributes?.publishedAt),
        MAJArticle: formatDateSecond(content?.data?.attributes?.updatedAt),
        principalImage: link + content?.data?.attributes?.imagePresentation?.data?.attributes?.url,
        images: content?.data?.attributes?.images_products.data?.length ? _.map(content?.data?.attributes?.images_products?.data, function formatImages(i) {
          return {
            url: link + i?.attributes?.url,
          }
        }) : [],
        devise: " " + devise
      }
    };
  } else return { data: null };
};
export const slideArticleFormat = (slide) => {
  if (slide && slide?.length) {
    return _.map(slide, function formatSlide(n) {
      return {
        id: n?.id,
        name: n?.attributes?.nameArticle,
        price: n?.attributes?.price,
        oldPrice: n?.attributes?.oldPrice,
        promotion: n?.attributes?.promotion,
        promoPrice: n?.attributes?.promoPrice,
        url: link + n?.attributes?.imagePresentation?.data?.attributes?.url,
      }
    })
  }
  else return null
}