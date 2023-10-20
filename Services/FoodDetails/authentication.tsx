import axios from "axios";
import {
  getAllUrl,
  getDataUrl,
  getDataUrl1,
  getId,
  getAllMock,
  getIdMock,
  deleteCardMock,
  postCardMock,
  putCardMock,
  getAllCardMock,
  getIdCardMock
} from "./api";
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
    url: getAllUrl,
  });
};

export const listApi = () => {
  return axios({
    method: "GET",
    url: getDataUrl1,
  });
};

export const getIdApi = (id: string) => {
  return axios({
    method: "GET",
    url: getId.concat(id),
  });
};

export const getAllMockApi = () => {
  return axios({
    method: "GET",
    url: getAllMock,
  });
};

export const getIdMockApi = (id: string) => {
  return axios({
    method: "GET",
    url: getIdMock.concat(id),
  });
};

export const DeleteMockApi = (id: string) => {
  return axios({
    method: "DELETE",
    url: deleteCardMock.concat(id),
  });
};

export const PostCardMockApi = (params: { ItemId: number, count: number })=> {
  return axios({
    method: "POST",
    url: postCardMock,
    data: params,
  });
};

export const GetAllCardMockApi = () => {
  return axios({
    method: "GET",
    url: getAllCardMock,
  })
}

export const GetIdCardMockApi = (id : string) => {
  return axios({
    method: "GET",
    url: getIdCardMock.concat(id)
  })
}