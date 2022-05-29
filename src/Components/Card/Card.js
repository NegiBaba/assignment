import React, { useEffect } from "react";
import { connect } from "react-redux";

import { addToCart, removeFromCart } from "../../Actions/cartActions";

import "./Card.css";

const Card = ({ card, cartItems, addToCart, removeFromCart }) => {
	useEffect(() => {
		localStorage.setItem("cartState", JSON.stringify(cartItems));
	});
	const renderPrice = () => {
		return (
			<div className="price_container">
				{card.original_price ? (
					<div className="price old">
						{Number.parseFloat(card.original_price).toFixed(2)}
					</div>
				) : null}
				<div className="price new">
					{Number.parseFloat(card.final_price).toFixed(2)}
				</div>
			</div>
		);
	};

	const renderAddToCartCta = () => {
		const inCart = cartItems[card.id] ? true : false;
		if (inCart) {
			const count = cartItems[card.id].quantity;
			return (
				<div className="btn">
					<span className="sub_btn-left" onClick={removeItem}>
						-
					</span>
					{count}
					<span className="sub_btn-right" onClick={addItem}>
						+
					</span>
				</div>
			);
		}
		return (
			<div className="btn-ghost" onClick={addItem}>
				Add to cart
			</div>
		);
	};

	function getDiscount() {
		if (card.original_price) {
			let value =
				((card.original_price - card.final_price) * 100) / card.original_price;
			return value;
		}
	}

	const addItem = () => {
		addToCart(card);
	};

	const removeItem = () => {
		removeFromCart(card.id);
	};

	return (
		<div className="card_container">
			<div className="content">
				<div className="image_container">
					<img src={card.img_url} alt="Card" />
					{card.original_price ? (
						<span className="discount">{getDiscount()} % OFF</span>
					) : null}
				</div>
				<div className="details">
					<div className="np_container">
						<div className="name">{card.name}</div>
						{renderPrice()}
					</div>
					<div className="description">{card.description}</div>
				</div>
				{renderAddToCartCta()}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItems: state.cart.items,
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(Card);
