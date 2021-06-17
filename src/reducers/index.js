import { combineReducers } from "redux"
import { allCoinsReducer } from "./allCoinsReducer";
import { currencyReducer } from "./currencyReducer";
import { coinReducer } from "./coinReducer";
import { coinMarketReducer } from "./coinMarketsReducer"

export default combineReducers({
    "allCoins": allCoinsReducer,
    "currencies": currencyReducer,
    "coin": coinReducer,
    "coinMarkets": coinMarketReducer,
})