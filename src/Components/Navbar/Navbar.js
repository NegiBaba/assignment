import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar_container">
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
				<Link to="/cart" className="cart">
					<ShoppingCartOutlinedIcon
						sx={{ color: "var(--color_black)", fontSize: "26px" }}
					/>
					<span className="count">1</span>
				</Link>
				<div className="avatar">
					<AccountCircleOutlinedIcon
						sx={{ color: "var(--color_black)", fontSize: "26px" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
