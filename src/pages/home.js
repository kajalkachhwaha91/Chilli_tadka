import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
// import { db } from '../firebase/firebase';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Carousel Banner */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-white text-center"
        style={{
          height: '55vh',
          backgroundImage: 'url(/assests/img6.avif)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div
          className="hero-overlay p-5"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '10px',
            width: '100%',
          }}
        >
          <motion.h1
            className="display-2"
            style={{ color: 'red', fontFamily: 'bold' }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Chilli Tadka
          </motion.h1>
          <motion.p
            className="lead display-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A Flavorful Journey Through India
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
           <Link to="/menu">
  <Button variant="warning" size="lg" style={{ backgroundColor: '#E67E22' }}>
    Explore Our Menu
  </Button>
</Link>
          </motion.div>
        </div>
      </section>

      {/* Specials Section */}
      <motion.section
        style={{ backgroundColor: '#F2F3F4' }}
        className="py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <h2 className="text-center mb-4">Signature Dishes</h2>
          <Row>
            {[
              { title: 'Tandoori Paneer', img: 'tandori.avif' },
              { title: 'Butter Chicken', img: 'chicken.avif' },
              { title: 'Veg Biryani', img: 'briyani.avif' },
            ].map((dish, i) => (
              <Col md={4} key={i} className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card style={{ height: '100%' }}>
                    <Card.Img
                      variant="top"
                      src={`/assests/${dish.img}`}
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title>{dish.title}</Card.Title>
                      <Card.Text>
                        A classic Indian favorite prepared fresh with authentic spices.
                      </Card.Text>
                      {/* <Button variant="warning" style={{ backgroundColor: '#E67E22' }}>
                        Order Now
                      </Button> */}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>

      {/* Parallax About Us Section */}
      <motion.section
        className="py-5 parallax-section"
        style={{
          backgroundAttachment: 'fixed',
          backgroundImage: 'url(/assests/img1.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <Row
            className="align-items-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '2rem', borderRadius: '10px' }}
          >
            <Col md={6}>
              <h2>Discover Chilli Tadka</h2>
              <p>
                From the fiery kitchens to your plate, our chefs bring you bold flavors and
                mouthwatering dishes made with love and tradition. Chilli Tadka is where spice
                meets soul.
              </p>
            </Col>
            <Col md={6}>
              <img src="/assests/thali.avif" alt="About Us" className="img-fluid rounded" />
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        style={{ backgroundColor: '#1C1C1C', color: 'white' }}
        className="py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <h2 className="text-center mb-4" style={{ color: '#E67E22' }}>
            Why Dine With Us?
          </h2>
          <Row>
            {[
              { icon: '👨‍🍳', title: 'Master Chefs', desc: 'Passionate about Indian cuisine.' },
              {
                icon: '🌶️',
                title: 'Bold Flavors',
                desc: 'Authentic spices that leave a lasting impression.',
              },
              { icon: '🏆', title: 'Top-Rated', desc: 'Loved by hundreds of foodies daily.' },
            ].map((item, i) => (
              <Col md={4} key={i} className="text-center mb-4">
                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                  <div style={{ fontSize: '3rem' }}>{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        className="py-5 text-center"
        style={{ backgroundColor: '#E67E22', color: '#1C1C1C' }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <h2>Reserve Your Table</h2>
          <p>Book now and enjoy a spicy evening with friends & family at Chilli Tadka.</p>
          <Button
  as={Link}
  to="/contact"
  variant="dark"
  size="lg"
  style={{ color: '#E67E22', borderColor: '#E67E22' }}
>
  Contact Us
</Button>
        </Container>
      </motion.section>
    </>
  );
}

export default Home;