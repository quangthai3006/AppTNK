const API_URL1 = "http://192.168.1.200:7105/api/"
const BASE_URL = "http://kiemtra.stecom.vn:8888/api/ung-vien/NQT179765/"


export const getDataUrl = API_URL1.concat("Users/create")
export const getDataUrl1 = BASE_URL.concat("get-all").concat(`?pageSize=10&pageIndex=1`)
export const getDataUrl2 = BASE_URL.concat("create")
