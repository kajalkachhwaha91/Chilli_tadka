import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { db } from '../firebase/firebase';   // <<== Corrected path!
import { collection, addDoc } from 'firebase/firestore';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: '',
    specialRequest: '',
  });

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'orders'), formData);
      alert('Your booking has been confirmed! 🎉');
      setFormData({
        name: '',
        email: '',
        phone: '',
        orderType: '',
        specialRequest: '',
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Error booking: ', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Navbar expand="lg" variant="dark" className="custom-navbar sticky-top py-3">
        <Container>
          {/* Brand logo */}
          <Navbar.Brand href="/" className="navbar-logo">
            <img src="/assests/logo.png" alt="Chilli Tadka" height="40" />
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav" className="justify-content-between">
            {/* Navigation Links */}
            <Nav className="mx-auto gap-4" style={{ fontSize: '20px' }}>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>

            {/* Toggle Button */}
            <button className="book-toggle-btn" onClick={toggleOverlay}>
              <img src="/assests/toggle.jpg" alt="Book a Table" className="book-icon-img" />
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Overlay Panel */}
      <div className={`overlay-panel ${isOpen ? 'open' : ''}`}>
        <div className="overlay-content">
          <button className="close-btn" onClick={toggleOverlay}>×</button>
          <h2 className="form-heading">Reserve Your Spot 🍽️</h2>
          <p className="form-subtext">Savor the hot and spicy delights. Book now!</p>

          <form className="order-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              name="orderType"
              value={formData.orderType}
              onChange={handleChange}
              required
            >
              <option value="">Select Your Order</option>
              <option value="dine-in">Dine In - Book a Table</option>
              <option value="takeaway">Takeaway</option>
              <option value="delivery">Delivery</option>
            </select>
            <textarea
              name="specialRequest"
              placeholder="Special Requests (Optional)"
              rows="4"
              value={formData.specialRequest}
              onChange={handleChange}
            />
            <button type="submit" className="submit-btn">Confirm Order</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;
