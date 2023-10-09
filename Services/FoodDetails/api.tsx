const API_URL = "http://localhost:5225/api/"
const BASE_URL = 'http://kiemtra.stecom.vn:8888/api/ung-vien/NQT179765'
const API_URL1 = "http://localhost:7105/api/"

export const getAllUrl =  API_URL.concat("FoodItem/get-all")
export const getDataUrl = API_URL1.concat("Items/get-all")
// export const getDataUrl = BASE_URL.concat("/get-all").concat(`?pageSize=20&pageIndex=1`)


// export const loginUrl = API_URL.concat("Token")
// export const updateUrl = API_URL.concat("Users/update")
// export const deleteUrl = API_URL.concat("Users/delete")
