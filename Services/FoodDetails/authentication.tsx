import axios from "axios";
import { getAllUrl, getDataUrl,getDataUrl1, getId, getAllMock, getIdMock, deleteMock } from "./api";
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
        url: getDataUrl1
    })
}

export const getIdApi = (id: string) => {
    return axios({
        method: "GET",
        url: getId.concat(id)
    })
}

export const getAllMockApi = () => {
    return axios({
        method: 'GET',
        url: getAllMock
    })
}

export const getIdMockApi = (id: string) => {
    return axios({
        method: "GET",
        url: getIdMock.concat(id)
    })
}

export const DeleteMockApi = (id: string) => {
    return axios({
        method: "DELETE",
        url: deleteMock.concat(id)
    })
}