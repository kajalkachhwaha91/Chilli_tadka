// src/pages/Contact.jsx

import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { db } from "../firebase/firebase"; // import firebase db
import { collection, addDoc } from "firebase/firestore"; // firestore functions

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date(),
      });
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (error) {
      console.error("Error submitting contact: ", error);
      setSuccess(false);
    }
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", padding: "50px 0" }}>
      <Container style={{ maxWidth: "600px" }}>
        <h1 className="text-center mb-4" style={{ color: "white" }}>Contact Us</h1>

        {success === true && <Alert variant="success">Message sent successfully!</Alert>}
        {success === false && <Alert variant="danger">Failed to send message. Please try again.</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label style={{ color: "#ff2e2e" }}>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter your name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ backgroundColor: "black", color: "white", borderColor: "#ff2e2e" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label style={{ color: "#ff2e2e" }}>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter your email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ backgroundColor: "black", color: "white", borderColor: "#ff2e2e" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label style={{ color: "#ff2e2e" }}>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={4} 
              placeholder="Your message..." 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ backgroundColor: "black", color: "white", borderColor: "#ff2e2e" }}
            />
          </Form.Group>

          <Button 
            variant="danger" 
            type="submit" 
            style={{ backgroundColor: "#ff2e2e", border: "none", width: "100%" }}
          >
            Send Message
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
