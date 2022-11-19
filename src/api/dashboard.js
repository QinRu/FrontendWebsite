import axios from "axios";

export const getUserInfo = (data) => {
    console.log(data)
    return axios.request({
        url: 'user/analyze',
        params: data,
        method: "get"
    })
}