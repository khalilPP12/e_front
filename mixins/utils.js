import moment from "moment"

export const formatDate = (date) => {
  if (date) {
    return moment(date).format('DD/MM/YYYY');
  } else null
}

export const formatDateSecond = (date) => {
  if (date) {
    return moment(date).format('DD/MM/YYYY HH:mm:ss');
  } else null
}

export const formatDateToBFF = (date) => {
  if (date) {
    return moment(date).format('YYYY-MM-DD');
  } else null
};

export const getGender = (gender) => {
  if (gender) {
    return gender === "Male" ? "Homme" : "Femme"
  } else null
}
export const getColorsByLabel = (listColors, listGet) => {
  if (listColors && listColors.length && listGet && listGet.length) {
    return listGet?.map(e => listColors.find(i => e === i?.key)) ?? []
  } else null
}
export const addUnityVolumToProduct = (list, unity) => {
  if (list && list.length && unity) {
    return _.map(list, function addedUnity(j) {
      return `${j} ${unity?.toUpperCase()}`
    })
  } else null
}