import axios from "axios"


export default axios.create({
    baseURL: "https://api.coinranking.com/v2",
    headers: {
        "x-access-token": "coinranking048b7d4ac706648c43095b3881b15386399bc1ad005947dc",
        "Access-Control-Allow-Origin": "https://localhost:3000"
    }
})