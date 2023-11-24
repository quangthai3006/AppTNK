const BASE_URL = "http://10.0.2.2:7105/api/"
const BASEMOCKAPI_URL = "https://64ed3b99f9b2b70f2bfb5925.mockapi.io/"

// export const getAllUrl =  API_URL.concat("FoodItem/get-all")
// export const getDataUrl1 = BASE_URL.concat("get-all").concat(`?pageSize=10&pageIndex=1`)
// export const getId = BASE_URL

// API main Items
export const getDataUrl = BASE_URL.concat("Users/")
export const getId = BASE_URL.concat("Items/get-by-id/")

export const postCard = BASE_URL.concat("Cart/add-to-cart")
export const putCard = BASE_URL.concat("Cart/update")
export const getAllCard = BASE_URL.concat("Cart/get-all-item?id=")
export const deleteCard = BASE_URL.concat("Cart/delete")
export const getIdCard = BASE_URL.concat("Cart/")


export const postFavorite = BASE_URL.concat("Favorite/create")
export const getAllFavorite = BASE_URL.concat("Users/")
export const deleteFavorite = BASE_URL.concat("Favorite/delete2?")



// export const getAllMock = BASEMOCKAPI_URL.concat("app")
// export const getIdMock = BASEMOCKAPI_URL.concat("app/")

export const postCardMock = BASEMOCKAPI_URL.concat("card")
// export const putCardMock = BASEMOCKAPI_URL.concat("card/")
// export const getAllCardMock = BASEMOCKAPI_URL.concat("card")
// export const deleteCardMock = BASEMOCKAPI_URL.concat("card/")
// export const getIdCardMock = BASEMOCKAPI_URL.concat("card/")




// export const loginUrl = API_URL.concat("Token")
// export const updateUrl = API_URL.concat("Users/update")
// export const deleteUrl = API_URL.concat("Users/delete")
