export const link = process.env.baseUrl;
export const devise = 'MAD';
export const volumeUnit = 'ml';
export const procent = '%';
export const urlWS = {
    ARTICLE: (id_article) => `/api/articles/${id_article}?populate=*`,
    ARTICLES: (paginationSettings) => `/api/articles?pagination[page]=${paginationSettings?.page}&pagination[pageSize]=${paginationSettings?.pageSize}&populate=*`,
    SLIDEARTICLE: `/api/single-page?populate=articles.imagePresentation`,
    SEND_FORMS: `/api/commande-clients`
}
export const categories = [
    { en: 'ALL', fr: 'Tout' },
    { en: 'Beauty', fr: 'Beauté' },
    { en: 'Gadgets', fr: 'Gadgets' },
    { en: 'Accessories', fr: 'Accessoires' },
    { en: 'Clothes', fr: 'Vêtements' },
    { en: 'Electronics', fr: 'Électroniques' },
    { en: 'Others', fr: 'Autres' },
]
export const genders = [
    { key: 'Male', label: 'Homme' },
    { key: 'Female', label: 'Femme' }
]
export const colors = [
    { key: "White", label: 'Blanc', codeColor: "#FFFFFF" },
    { key: "Black", label: 'Noir', codeColor: "#000000" },
    { key: "Yellow", label: 'Jaune', codeColor: "#FFFF00" },
    { key: "Green", label: 'Vert', codeColor: "#008000" },
    { key: "Red", label: 'Rouge', codeColor: "#FF0000" },
    { key: "Blue", label: 'Bleu', codeColor: "#0000FF" },
]
export const route = [
    { label: 'Acceuil', path: '/', disabled: false },
    { label: 'Produits', path: '/', disabled: true },
    { label: 'Commanande', path: '/', disabled: true },
    { label: 'A propos de nous', path: '/', disabled: true },
]