import * as actions from "../Actions/cartActions";

const initialState = {
	items: localStorage.getItem("cartState")
		? JSON.parse(localStorage.getItem("cartState"))
		: {},
};

const items = (state = initialState.items, action) => {
	switch (action.type) {
		case actions.ADD_TO_CART:
			const { id } = action.payload;
			return {
				...state,
				[id]: state[id]
					? { ...state[id], quantity: state[id].quantity + 1 }
					: { ...action.payload, quantity: 1 },
			};
		case actions.REMOVE_FROM_CART:
			const toBeDeleted = state[action.payload].quantity === 1 ? true : false;
			if (toBeDeleted) {
				const nextState = { ...state };
				delete nextState[action.payload];
				return nextState;
			}
			return {
				...state,
				[action.payload]: {
					...state[action.payload],
					quantity: state[action.payload].quantity - 1,
				},
			};
		default:
			return state;
	}
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return {
				items: items(state.items, action),
			};
	}
};

export default cartReducer;
