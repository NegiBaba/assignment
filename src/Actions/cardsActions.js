export const GET_CARDS = "GET_CARDS";
export const GET_CARDS_SUCCESS = "GET_CARDS_SUCCESS";
export const GET_CARDS_FAILURE = "GET_CARDS_FAILURE";

export const getCards = () => ({
	type: GET_CARDS,
});

export const getCardsSuccess = (cards) => ({
	type: GET_CARDS_SUCCESS,
	payload: cards,
});

export const getCardsFailure = () => ({
	type: GET_CARDS_FAILURE,
});

export function fetchCards() {
	return async (dispatch) => {
		dispatch(getCards());

		try {
			// ? Using an API here would feel like a real world situation ?//
			const data = [
				{
					id: 1,
					name: "food card",
					description: "This card is used for spending on Food merchants",
					final_price: 21,
					original_price: 30,
					img_url:
						"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png",
				},
				{
					id: 2,
					name: "travel card",
					description:
						"This card is used for spending on Travel and hotel bookings",
					final_price: 20,
					img_url:
						"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png",
				},
				{
					id: 3,
					name: "epic card",
					description: "Use this card and get benefits on every transaction",
					final_price: 40,
					img_url:
						"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png",
				},
				{
					id: 4,
					name: "happay premium card",
					description: "Use this card and get benefits on every transaction",
					final_price: 40,
					img_url:
						"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png",
				},
			];
			dispatch(getCardsSuccess(data));
		} catch (error) {
			dispatch(getCardsFailure());
		}
	};
}
