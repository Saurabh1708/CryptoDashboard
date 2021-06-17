export const coinReducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_COIN":
            return { ...state, coin: action.payload };
        default:
            return state;
    }

}