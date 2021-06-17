export const currencyReducer = (state = {}, action) => {

    switch (action.type) {
        case "FETCH_CURRENCY":
            return { ...state, currencies: action.payload };
        default:
            return state;
    }
}