import placeholder from "../apis/placeholder";
export const fetchCurrency = () => {
    return async (dispatch) => {
        const response = await placeholder.get("/reference-currencies", { params: { types: ["fiat"] } });
        //console.log(response);
        dispatch({
            type: "FETCH_CURRENCY",
            payload: response.data.data.currencies
        })
    }
}