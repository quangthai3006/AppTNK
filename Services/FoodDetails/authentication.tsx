import axios from "axios";
import {
  getDataUrl,
  getId,
  postCard,
  getAllCard,
  putCard,
  deleteCard,
  postFavorite,
  getAllFavorite,
  deleteFavorite
  // getAllMock,
  // getIdMock,
  // deleteCardMock,
  // postCardMock,
  // putCardMock,
  // getAllCardMock,
  // getIdCardMock,
 

} from "./api";
import { Registration, Login } from "./interface";

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


export const listApi = (id: string) => {
  return axios({
    method: "GET",
    url: getDataUrl.concat(`${id}/get-all-item`)
  });
};

export const getIdApi = (id : string) => {
  return axios({
    method: "GET",
    url: getId.concat(id)
  })
}

export const PostCardApi = (params: { UserId: number, ItemId: number, count: number })=> {
  return axios({
    method: "POST",
    url: postCard,
    data: params,
  });
};

export const GetAllCardApi = (id: string) => {
  return axios({
    method: "GET",
    url: getAllCard.concat(id)
  })
}

export const DeleteCardApi = (UserId: number, ItemId: number) => {
  return axios({
    method: "DELETE",
    url: deleteCard.concat(`?UserId=${UserId}&ItemId=${ItemId}`)
  });
};

export const PutCardApi = (param1: { userId: number, itemId: number, quantity: number }) => {
  return axios({
    method: "PUT",
    url: putCard,
    data: param1
  });
};

export const PostFavoritedApi = (params: { userId: number, itemId: number})=> {
  return axios({
    method: "POST",
    url: postFavorite,
    data: params,
  });
};

export const GetAllFavoriteApi = (id: string) => {
  return axios({
    method: "GET",
    url: getAllFavorite.concat(`${id}/get-all-favorite-item`)
  })
}

export const DeleteFavoriteApi = (UserId: number, ItemId: number) => {
  return axios({
    method: "DELETE",
    url: deleteFavorite.concat(`UserId=${UserId}&ItemId=${ItemId}`)
  });
};



// export const getAllMockApi = () => {
//   return axios({
//     method: "GET",
//     url: getAllMock,
//   });
// };

// export const getIdMockApi = (id: string) => {
//   return axios({
//     method: "GET",
//     url: getIdMock.concat(id),
//   });
// };

// export const DeleteMockApi = (id: string) => {
//   return axios({
//     method: "DELETE",
//     url: deleteCardMock.concat(id),
//   });
// };

// export const PostCardMockApi = (params: { UserId: number, ItemId: number, count: number })=> {
//   return axios({
//     method: "POST",
//     url: postCard,
//     data: params,
//   });
// };

// export const GetAllCardMockApi = () => {
//   return axios({
//     method: "GET",
//     url: getAllCardMock,
//   })
// }

// export const GetIdCardMockApi = (id : string) => {
//   return axios({
//     method: "GET",
//     url: getIdCardMock.concat(id)
//   })
// }

