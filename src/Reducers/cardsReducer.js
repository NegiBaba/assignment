import * as actions from "../Actions/cardsActions";

const initialState = {
	cards: [],
	loading: false,
	hasError: false,
};

const cardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_CARDS:
			return {
				...state,
				loading: true,
			};
		case actions.GET_CARDS_SUCCESS:
			return {
				...state,
				cards: [...action.payload],
				loading: false,
				hasError: false,
			};
		case actions.GET_CARDS_FAILURE:
			return {
				...state,
				loading: false,
				hasError: true,
			};
		default:
			return state;
	}
};

export default cardsReducer;
