// // component that displays... will trigger reducer functions and also displays the state value
// // To be imported in main parent component or App.js

// import useDispatch to change, and useSelector to read, state
import { useDispatch, useSelector } from "react-redux";
// Import the action creator
import { addToCart } from "../redux/reducers/cartSlice";
// Import Link for navigation
import { Link } from "react-router-dom";
// import bootstrap card, container, row and column for responsive layout
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/ProductPage.css";
import ReusableButton from "../components/ReusableButton";
import TotalPrice from "../components/TotalPrice";
import React, { useState } from "react";
import SizeDropdown from "../ui-components/SizeDropdown";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      picture:
        "https://media.istockphoto.com/id/1185028107/photo/young-laughing-woman-standing-with-hands-in-pockets-wearing-blank-white-t-shirt-with-copy.webp?a=1&b=1&s=612x612&w=0&k=20&c=FZe4nNy0gJcdTBwQvnjsPBo6kZPG6tPRaMIR7yzXjFA=",
      title: "Ladies T-shirts",
      description: "Summer t-shirts in a range of sizes. 100% pure cotton",
      price: 180,
    },
    {
      id: 2,
      picture:
        "https://media.istockphoto.com/id/1804027983/photo/handsome-man-wearing-blank-white-cap-and-white-t-shirt-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=JSps2d5beRquinxJws8O5DNajB8tH2kzBIqBKeau58c=",
      title: "Mens T-shirts",
      description: "Summer t-shirts in a range of sizes. 100% pure cotton",
      price: 180,
    },
    {
      id: 3,
      picture:
        "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcnRzfGVufDB8fDB8fHww",
      title: "Ladies shorts",
      description: "Summer shorts in a range of sizes. 100% pure cotton",
      price: 200,
    },
    {
      id: 4,
      picture:
        "https://media.istockphoto.com/id/1203543686/photo/handsome-guy-with-hat-is-on-the-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=GizedeHqaBvDkSdjn38l0YZ4nEFA1EjtElMIMS4R0AE=",
      title: "Mens shorts",
      description: "Summer shorts in a range of sizes. 100% pure cotton",
      price: 200,
    },
    {
      id: 5,
      picture:
        "https://plus.unsplash.com/premium_photo-1670574914665-11abc1026342?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FuZGFsc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Ladies shoes",
      description: "Get ready for summer, ladies sandals in all sizes",
      price: 100,
    },
    {
      id: 6,
      picture:
        "https://images.unsplash.com/photo-1567671132365-5dcc60400fae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZyZWUlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Mens shoes",
      description: "Get ready for summer, mens sandals in all sizes",
      price: 170,
    },
    {
      id: 7,
      picture:
        "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhdHN8ZW58MHx8MHx8fDA%3D",
      title: "Hats          ",
      description:
        "Summer hats in a range of colours                                ",
      price: 160,
    },
    {
      id: 8,
      picture:
        "https://media.istockphoto.com/id/2088220185/photo/young-woman-in-sundress-walks-down-pathway.webp?a=1&b=1&s=612x612&w=0&k=20&c=aqppbgQ2v5cEow_B3XPkLgcswmOvcNqqiJ055gSpAhM=",
      title: "Dresses",
      description: "Dresses in a range of sizes and colours. 100% pure cotton",

      price: 180,
    },
    {
      id: 9,
      picture:
        "https://images.unsplash.com/photo-1649566169356-e47e8d9809e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D",
      title: "Hoodies",
      description: "Mens and ladies' hoodies 100% pure cotton",
      price: 250,
    },
    {
      id: 10,
      picture:
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Sunglasses",
      description: "Mens and ladies' polarised sunglasses",
      price: 250,
    },
  ];

  const [selectedSize, setSelectedSize] = useState("");

  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, size: selectedSize }));
  };

  return (
    <div>
      <TotalPrice />
      <Container className="card-container">
        {/* add responsive design and use map method to map item key value pairs of products array of objects */}
        <Row xs={1} md={2} lg={3} xl={4}>
          {products.map((product) => (
            <Col key={product.id}>
              <Card className="card-style">
                <div class="ratio ratio-4x3">
                  <Card.Img
                    variant="top"
                    className="card-image img-fluid"
                    src={product.picture}
                    alt={product.title}
                  />
                </div>
                <Card.Body className="card-background">
                  <Card.Title>
                    <h2>{product.title}</h2>
                  </Card.Title>

                  <Card.Text>
                    <p>{product.description}</p>

                    <p>Price: {product.price}</p>
                    <SizeDropdown onSelect={setSelectedSize} />
                  </Card.Text>
                  <ReusableButton onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </ReusableButton>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Link to="/cart">View Cart</Link> {/* Add a link to the cart page */}
    </div>
  );
};

export default ProductPage;
