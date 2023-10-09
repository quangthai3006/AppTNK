import axios from "axios";
import { getAllUrl, getDataUrl } from "./api";
import { FoodItem } from "./interface";

// export const registerApi = ({
//   Id,
//   Name,
//   Price,
//   Description,
//   Category,
//   ImageData,
// }: FoodItem) => {
//   const registerRequest = axios({
//     method: "GET",
//     url: getAllUrl,
//     data: { Id, Name, Price, Description, Category, ImageData },
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return registerRequest;
// };

export const listFoodItemApi = () => {
    return axios({
        method: "GET",
        url: getAllUrl
    })
}

export const listApi = () => {
    return axios({
        method: "GET",
        url: getDataUrl
    })
}