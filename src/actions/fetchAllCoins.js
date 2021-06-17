import placeholder from "../apis/placeholder";

const getCachedCoins = (referenceCurrencyUuid) => {
    const data = localStorage.getItem(referenceCurrencyUuid)
    //console.log(data);

    return JSON.parse(data);
}

export const fetchAllCoins = (referenceCurrencyUuid = "yhjMzLPhuIDl") => {
    const params = { referenceCurrencyUuid };
    //Implementing Caching
    return async (dispatch) => {
        const cachedData = getCachedCoins(referenceCurrencyUuid);
        if (cachedData)
            return dispatch({
                type: "FETCH_ALL_COINS",
                payload: cachedData
            })
        const response = await placeholder.get("/coins", {
            params
        })
        //expiry: new Date().getTime() + 60 * 1000

        const item = JSON.stringify(response.data.data.coins);

        localStorage.setItem(referenceCurrencyUuid, item)
        //localStorage.setItem("name", "saurabh")
        dispatch({
            type: "FETCH_ALL_COINS",
            payload: response.data.data.coins
        })
    }
}
