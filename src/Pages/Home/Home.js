import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

import { fetchCards } from "../../Actions/cardsActions";
import Card from "../../Components/Card/Card";

import "./Home.css";

const Home = ({ dispatch, loading, cards, hasError }) => {
	useEffect(() => {
		dispatch(fetchCards());
	}, [dispatch]);

	const renderCards = () => {
		if (loading) {
			// May add some spinner if fetching takes some time
			<h1>Loading data</h1>;
		}
		if (hasError) {
			// May add some custom error page
			<h1>Oops... No Products Found</h1>;
		}
		return cards.map((card) => (
			<Grid item key={card.id} xs={12} sm={6} md={4} lg={4}>
				<Card card={card} />
			</Grid>
		));
	};

	return (
		<section className="page">
			<Grid container>
				<Grid
					container
					item
					xs={12}
					sm={12}
					md={12}
					lg={12}
					justifyContent="center"
				>
					<div className="heading">Most Popular</div>
				</Grid>
				<Grid
					container
					item
					xs={12}
					sm={12}
					md={12}
					lg={12}
					justifyContent="center"
				>
					<div className="seprator">
						<StarBorderRoundedIcon
							sx={{
								padding: "5px",
								fontSize: "30px",
								borderRadius: "50%",
								color: "var(--color_primary)",
								bgcolor: "var(--color_primary_bg)",
							}}
						/>
					</div>
				</Grid>
				<Grid
					container
					sx={{ mx: { xs: 2, sm: 6, md: 4, lg: 20 }, pt: 10 }}
					rowSpacing={12}
				>
					{renderCards()}
				</Grid>
			</Grid>
		</section>
	);
};

const mapStateToProps = (state) => ({
	loading: state.cards.loading,
	cards: state.cards.cards,
	hasError: state.cards.hasError,
});

export default connect(mapStateToProps)(Home);
