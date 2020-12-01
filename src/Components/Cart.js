import React from "react";
import {
	Container,
	ListGroup,
	ListGroupItem,
	Button,
	CardHeader,
	CardBody,
	Card,
	CardFooter,
	Col,
	Row,
} from "reactstrap";

const Cart = ({ cartItems, removeItems, buyNow }) => {
	let amount = 0;

	cartItems.forEach((items) => {
		amount = parseFloat(amount) + parseFloat(items.productPrice);
	});

	return (
		<Container fluid>
			<h1 className="text-success">Your Cart</h1>
			<ListGroup>
				{cartItems.map((items) => (
					<ListGroupItem key={items.id}>
						<Row>
							<Col>
								<img height={80} src={items.tinyImage} />
							</Col>
							<Col className="text-center">
								<div className="text-primary">{items.productName}</div>
								<span>Price :-{items.productPrice}</span>
								<Button color="danger" onClick={() => removeItems(items)}>
									Remove
								</Button>
							</Col>
						</Row>
					</ListGroupItem>
				))}
			</ListGroup>

			{/*If Cart is Empty */}
			{cartItems.length >= 1 ? (
				<Card className="text-center mt-3">
					<CardHeader>Grand Total</CardHeader>
					<CardBody>
						Your Amount for {cartItems.length} product is {amount}
					</CardBody>
					<CardFooter>
						<Button color="success" onClick={buyNow}>
							Pay Here
						</Button>
					</CardFooter>
				</Card>
			) : (
				<h1 className="text-warning"> Cart Is Empty</h1>
			)}
		</Container>
	);
};

export default Cart;
