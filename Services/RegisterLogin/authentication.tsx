import axios from "axios";
import { getDataUrl, getDataUrl2 } from "./api";
import { Register, Register1 } from "./interface";

export const listRegisterApi = ({ name, email, password }: Register) => {
  return axios({
    method: "POST",
    url: getDataUrl,
    data: { name, email, password },
  });
};

export const listRegisterApi1 = ({ maUngVien, email, diaChi }: Register1) => {
  return axios({
    method: "POST",
    url: getDataUrl2,
    data: {maUngVien, email, diaChi},
  });
};

// export const listApi = () => {
//     return axios({
//         method: "GET",
//         url: getDataUrl1
//     })
// }
