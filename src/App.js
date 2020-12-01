import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { Container, Row, Col, Card } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

import BuyPage from "./Components/BuySection";
import Cart from "./Components/Cart";

function App() {
	//cartItems is an Array and setCartItems is a function
	const [cartItems, setCartItems] = useState([]);

	//This method will help me to verify that whether the value is already there or not
	const addInCart = (item) => {
		const isAlreadyAdded = cartItems.findIndex(function (array) {
			//findIndex is return -1 if we can't find index which satisfy the condition
			return array.id === item.id; //We're only returning the true Conditions
		});
		if (isAlreadyAdded !== -1) {
			//It mean things are Already in the Cart
			toast("Already Added In the Cart", {
				//This is how toast can declare:- toast("",type)
				type: "error",
			});
			return;
		}

		setCartItems([...cartItems, item]); //push Items in the Cart continuously
	};

	const buyNow = () => {
		setCartItems([]);
		toast("Purchase Complete", {
			type: "success",
		});
	};

	const removeItems = (item) => {
		//filter:- it creates a new Array according to their Condition mentioned below
		setCartItems(cartItems.filter((singleItem) => singleItem.id !== item.id));
	};

	return (
		<Container fluid>
			<ToastContainer />
			<Row>
				<Col md="8">
					<BuyPage addInCart={addInCart} />
				</Col>
				<Col md="4">
					<Cart
						cartItems={cartItems}
						removeItems={removeItems}
						buyNow={buyNow}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
