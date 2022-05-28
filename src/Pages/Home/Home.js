import React from "react";
import { Grid } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

import "./Home.css";

const Home = () => {
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
								bgcolor: "var(--color_parimary_bg)",
							}}
						/>
					</div>
				</Grid>
			</Grid>
		</section>
	);
};

export default Home;
