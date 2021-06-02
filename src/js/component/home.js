import React from "react";
import PropType from "prop-types";
import { Navbar } from "./navbar";
import { Welcome } from "./welcome";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div id="home">
			<Navbar />
			<Welcome />
			<div className="d-flex justify-content-around">
				<Card
					title="Rustic Styles"
					imageUrl="https://i.imgur.com/lBJECU9.jpg"
					cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed egestas quam, ut dapibus nulla. Fusce venenatis orci malesuada ligula cursus posuere. Suspendisse tortor dui."
					btnUrl="#"
					btnLabel="View More"
				/>
				<Card
					title="Industrial Styles"
					imageUrl="https://i.imgur.com/zyA2yyV.jpg"
					cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed egestas quam, ut dapibus nulla. Fusce venenatis orci malesuada ligula cursus posuere. Suspendisse tortor dui."
					btnUrl="#"
					btnLabel="View More"
				/>
				<Card
					title="Outdoors Styles"
					imageUrl="https://i.imgur.com/KlRrkbB.jpg"
					cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed egestas quam, ut dapibus nulla. Fusce venenatis orci malesuada ligula cursus posuere. Suspendisse tortor dui."
					btnUrl="#"
					btnLabel="View More"
				/>
			</div>
			<Footer
				quoteSource=""
				quoteText="We have all the light we need, we just need to put it in practice."
				quotePerson="Albert Pike"
			/>
		</div>
	);
}