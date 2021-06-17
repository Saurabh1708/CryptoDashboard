import placeholder from "../apis/placeholder";

export const fetchCoinMarkets = (coinUUID = "Qwsogvtv82FCd") => {

    return async (dispatch) => {
        const response = await placeholder.get(`./coin/${coinUUID}/markets`)
        console.log(response);
        dispatch({
            type: "FETCH_COIN_MARKETS",
            payload: response.data.data
        })
    }

}