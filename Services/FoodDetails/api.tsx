const API_URL = "http://10.0.2.2:5225/api/"
const API_URL1 = "http://10.0.120.25:7105/api/"
const BASE_URL = "http://kiemtra.stecom.vn:8888/api/ung-vien/NQT179765/"
const BASEMOCKAPI_URL = "https://64ed3b99f9b2b70f2bfb5925.mockapi.io/"

export const getAllUrl =  API_URL.concat("FoodItem/get-all")
export const getDataUrl = API_URL1.concat("Items/get-all")
export const getDataUrl1 = BASE_URL.concat("get-all").concat(`?pageSize=10&pageIndex=1`)
export const getId = BASE_URL

export const getAllMock = BASEMOCKAPI_URL.concat("app")
export const getIdMock = BASEMOCKAPI_URL.concat("app/")

export const postCardMock = BASEMOCKAPI_URL.concat("card")
export const putCardMock = BASEMOCKAPI_URL.concat("card/")
export const getAllCardMock = BASEMOCKAPI_URL.concat("card")
export const deleteCardMock = BASEMOCKAPI_URL.concat("card/")
export const getIdCardMock = BASEMOCKAPI_URL.concat("card/")




// export const loginUrl = API_URL.concat("Token")
// export const updateUrl = API_URL.concat("Users/update")
// export const deleteUrl = API_URL.concat("Users/delete")
