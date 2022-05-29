import React from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import "./Navbar.css";

const Navbar = ({ items }) => {
	let { pathname } = useLocation();

	const getCount = () => {
		return Object.keys(items).length;
	};

	return (
		<div
			className={`navbar_container ${pathname === "/" ? "" : "navbar_shadow"}`}
		>
			<div className="brand">
				<div className="logo">
					<img
						src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
						alt="Happay icon"
					/>
				</div>
				<div className="name">Happay</div>
			</div>
			<div className="navbar_actions">
				{pathname === "/" ? (
					<Link to="/cart" className="cart">
						<ShoppingCartOutlinedIcon
							sx={{ color: "var(--color_black)", fontSize: "26px" }}
						/>
						<span className="count">{getCount()}</span>
					</Link>
				) : null}
				<div className="avatar">
					<AccountCircleOutlinedIcon
						sx={{ color: "var(--color_black)", fontSize: "26px" }}
					/>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	items: state.cart.items,
});

export default connect(mapStateToProps)(Navbar);
