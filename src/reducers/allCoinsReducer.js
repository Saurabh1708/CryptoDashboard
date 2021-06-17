export const allCoinsReducer = (state = {}, action) => {

    switch (action.type) {
        case "FETCH_ALL_COINS":
            return { ...state, allCoins: action.payload };
        default:
            return state;
    }
}