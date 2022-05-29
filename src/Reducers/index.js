import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import cardsReducer from "./cardsReducer";

const rootReducer = combineReducers({
	cart: cartReducer,
	cards: cardsReducer,
});

export default rootReducer;
