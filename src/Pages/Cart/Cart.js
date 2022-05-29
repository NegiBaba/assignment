import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { addToCart, removeFromCart } from "../../Actions/cartActions";

import "./Cart.css";

const Cart = ({ items, addToCart, removeFromCart }) => {
	let navigate = useNavigate();

	useEffect(() => {
		localStorage.setItem("cartState", JSON.stringify(items));
	});

	const goToHome = () => {
		navigate("/");
	};

	function getTotalDeductions() {
		let value = 0;
		Object.keys(items).forEach((key) => {
			if (items[key].original_price) {
				value +=
					(items[key].original_price - items[key].final_price) *
					items[key].quantity;
			}
		});
		return Number.parseFloat(value).toFixed(2);
	}

	function totalAmmount() {
		let value = 0;
		Object.keys(items).forEach((key) => {
			value += items[key].final_price * items[key].quantity;
		});
		return value;
	}

	function increaseCount(event, item) {
		addToCart(item);
	}

	function decreseCount(event, id) {
		removeFromCart(id);
	}

	return (
		<section className="page cart_container">
			<Grid container>
				<Grid container sx={{ mx: { xs: 3, sm: 6, md: 4, lg: 20 } }}>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<div className="field" onClick={goToHome}>
							<ArrowBackIcon
								sx={{ fontSize: "20px", color: "var(--color_gray)" }}
							/>
							<div className="text">Back to Home</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12} className="heading">
						Order Summary ({" "}
						{Object.keys(items).length === 1
							? "1 Item"
							: `${Object.keys(items).length} Items`}{" "}
						)
					</Grid>
					<Grid
						container
						columnSpacing={{ md: 2, lg: 2 }}
						// rowSpacing={{ xs: 2 }}
					>
						<Grid
							container
							item
							xs={12}
							sm={12}
							md={7}
							lg={7}
							className="details_container"
						>
							<Grid container item className="header">
								<Grid
									container
									item
									xs={2}
									sm={2}
									md={2}
									lg={2}
									className="title"
								>
									S.NO.
								</Grid>
								<Grid
									container
									item
									xs={4}
									sm={4}
									md={4}
									lg={4}
									className="title"
								>
									ITEMS
								</Grid>
								<Grid
									container
									item
									xs={6}
									sm={6}
									md={6}
									lg={6}
									className="title"
								>
									QTY
								</Grid>
							</Grid>
							{Object.keys(items).map((item, index) => (
								<Grid container item key={items[item].id} className="item_row">
									<Grid item className="sr_number" xs={2} sm={2} md={2} lg={2}>
										{index + 1}.
									</Grid>
									<Grid item className="item_name" xs={4} sm={4} md={4} lg={4}>
										{items[item].name}
									</Grid>
									<Grid
										item
										className="quantity_input"
										xs={6}
										sm={6}
										md={6}
										lg={6}
									>
										<div className="btn">
											<span
												className="sub_btn-left"
												onClick={(event) => decreseCount(event, items[item].id)}
											>
												-
											</span>
											{items[item].quantity}
											<span
												className="sub_btn-right"
												onClick={(event) => increaseCount(event, items[item])}
											>
												+
											</span>
										</div>
									</Grid>
								</Grid>
							))}
							<Grid
								container
								className="add_more"
								sx={{ mx: { xs: 1, sm: 1, md: 1, lg: 2 } }}
							>
								<Grid item xs={12} sm={12} md={8} lg={4} onClick={goToHome}>
									+ Add more items
								</Grid>
							</Grid>
						</Grid>
						<Grid container item xs={12} sm={12} md={5} lg={5}>
							<div className="price_container">
								<Grid container>
									<Grid item xs={12} sm={12} md={12} lg={12}>
										<div className="header">
											<div className="heading">Price Details</div>
										</div>
									</Grid>
									<Grid container item className="price_summary">
										{Object.keys(items).map((item) => (
											<div key={item} className="price_item">
												<div className="quantity">
													{items[item].quantity} X ${" "}
													{Number.parseFloat(items[item].final_price).toFixed(
														2
													)}
												</div>
												<div className="total_price">
													${" "}
													{Number.parseFloat(
														items[item].quantity * items[item].final_price
													).toFixed(2)}
												</div>
											</div>
										))}
									</Grid>
									<div className="add_calculations">
										<div className="calculation ">
											<div className="name">Total savings</div>
											<div className="value discount">
												- $ {getTotalDeductions()}
											</div>
										</div>
										<div className="calculation ">
											<div className="name">Delivery Fee</div>
											<div className="value">$ 5.00</div>
										</div>
										<div className="calculation ">
											<div className="name">
												Taxes and Charges{" "}
												<InfoOutlinedIcon
													sx={{ fontSize: "14px", pl: "5px" }}
												/>
											</div>
											<div className="value">$ 2.00</div>
										</div>
									</div>
									<div className="total">
										<div className="name">To Pay</div>
										<div className="value">$ {totalAmmount()}</div>
									</div>
									<div className="submit">
										<div className="btn-primary">PLACE ORDER</div>
									</div>
								</Grid>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
};

const mapStateToProps = (state) => ({
	items: state.cart.items,
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart);
