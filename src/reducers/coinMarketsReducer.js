export const coinMarketReducer = (state = {}, action) => {

    switch (action.type) {
        case "FETCH_COIN_MARKETS":
            return { ...state, coinMarkets: action.payload };
        default:
            return state;
    }
}