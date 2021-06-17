import placeholder from "../apis/placeholder";

export const fetchCoin = (uuid = "Qwsogvtv82FCd") => {


    return async (dispatch) => {
        const response = await placeholder.get(`/coin/${uuid}`);
        dispatch({
            type: "FETCH_COIN",
            payload: response.data.data.coin
        })
    }
}