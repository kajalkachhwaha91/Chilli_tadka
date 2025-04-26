// src/pages/Menu.jsx

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { db } from "../firebase/firebase"; // <-- Import db
import { collection, addDoc } from "firebase/firestore"; // <-- Firestore functions

const menuItems = [
  {
    name: "Spicy Paneer Tikka",
    description: "Chunks of paneer marinated in spices and grilled to perfection.",
    price: "$12.99",
    image: "assests/briyani.avif",
  },
  {
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken pieces.",
    price: "$14.99",
    image: "assests/chicken.avif",
  },
  {
    name: "Tandoori Naan",
    description: "Soft and fluffy naan straight from the tandoor.",
    price: "$3.99",
    image: "assests/tandori.avif",
  },
  {
    name: "Chilli Garlic Noodles",
    description: "Stir-fried noodles with hot chilli and garlic flavors.",
    price: "$10.99",
    image: "assests/briyani.avif",
  },
  {
    name: "Indian thali",
    description: "Sweet milk-solid dumplings soaked in rose-flavored syrup.",
    price: "$5.99",
    image: "assests/thali.avif",
  },
];

const Menu = () => {
  
  const handleOrder = async (item) => {
    try {
      await addDoc(collection(db, "orders"), {
        name: item.name,
        price: item.price,
        timestamp: new Date(),
      });
      alert(`Order placed: ${item.name}`);
    } catch (error) {
      console.error("Error adding order: ", error);
      alert("Failed to place order. Try again.");
    }
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", padding: "50px 0" }}>
      <Container>
        <h1 className="text-center mb-5" style={{ color: "white" }}>
          Our Menu
        </h1>
        <Row>
          {menuItems.map((item, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card 
                style={{ backgroundColor: "black", border: "1px solid #ff2e2e", color: "white" }} 
                className="h-100"
              >
                <Card.Img 
                  variant="top" 
                  src={item.image} 
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ color: "#ff2e2e" }}>{item.name}</Card.Title>
                  <Card.Text style={{ color: "#cccccc" }}>
                    {item.description}
                  </Card.Text>
                  <Card.Text style={{ color: "white", fontWeight: "bold" }}>
                    {item.price}
                  </Card.Text>
                  <Button 
                    variant="danger" 
                    className="mt-auto"
                    style={{ backgroundColor: "#ff2e2e", border: "none" }}
                    onClick={() => handleOrder(item)}
                  >
                    Order Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
