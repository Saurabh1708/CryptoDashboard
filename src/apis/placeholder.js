import axios from "axios"


export default axios.create({
    baseURL: "https://api.coinranking.com/v2",
    headers: {
        "x-access-token": "coinranking5f3c4fcb64c4957399ba3374eb4872ec2e0158341678a3e5",
        "Access-Control-Allow-Origin": "https://localhost:3000"
    }
})