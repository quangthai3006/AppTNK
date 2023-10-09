import axios from "axios"
import {registerUrl } from "./api"
import {RegisterBody} from "./interface"




export const registerApi = ({ name, email, password } : RegisterBody) => {
    const registerRequest = axios({
        method: "POST",
        url: registerUrl,
        data: { name, email, password },
        headers: { 
            'Content-Type': 'application/json'
        },
    })
    return registerRequest
}



