import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from "reactstrap";

const CartItem = ({ products, addInCart }) => {
	return (
		<Card className="mt-2 mb-1">
			<CardImg top height="250" width="100%" src={products.smallImage} />
			<CardBody className="text-center">
				<CardTitle>{products.productName}</CardTitle>
				<CardText className="secondary">
					Price Rs:{products.productPrice}
				</CardText>
				<Button color="success" onClick={() => addInCart(products)}>
					Buy Now
				</Button>
			</CardBody>
		</Card>
	);
};

export default CartItem;
