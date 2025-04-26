import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';


function About() {
  return (
    <>
      {/* Hero Header */}
      <section className="about-hero d-flex align-items-center justify-content-center text-white text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-4">About Chilli Tadka</h1>
          <p className="lead">A Journey of Flavors, Passion & Culture</p>
        </motion.div>
      </section>

      {/* Our Story */}
      <motion.section className="py-5 bg-light" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src="/assests/chef2.avif" alt="Our Story" className="img-fluid rounded" style={{height:'600px'}}/>
            </Col>
            <Col md={6}>
              <h2>Our Culinary Story</h2>
              <p>
                Born from a deep love for Indian cuisine, Chilli Tadka brings age-old recipes and fiery flavors to your table. 
                Our chefs take pride in crafting every dish with authenticity and heart — whether it’s a spicy biryani or a creamy butter chicken.
              </p>
              <p>
                We believe food is more than taste — it's culture, memory, and soul. Join us on a journey through India’s vibrant flavors.
              </p>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Meet the Chefs */}
      <motion.section className="py-5" style={{ backgroundColor: '#1C1C1C', color: 'white'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: '#F1C40F' }}>Meet Our Chefs</h2>
          <Row>
            {[
              { name: 'Chef Aryan', title: 'Head Chef', img: '/assests/chef3.avif' },
              { name: 'Chef Kavita', title: 'Tandoor Specialist', img: '/assests/chefw.avif' },
              { name: 'Chef Rahul', title: 'Biryani Maestro', img: '/assests/chef3.avif' },
            ].map((chef, i) => (
              <Col md={4} key={i} className="mb-4">
                <Card style={{ backgroundColor: '#2C2C2C', color: 'white' }}>
                  <Card.Img variant="top" src={chef.img} style={{ height: '300px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{chef.name}</Card.Title>
                    <Card.Text>{chef.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>

      {/* Experience Highlight */}
      <motion.section className="py-5 bg-light" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>The Chilli Tadka Experience</h2>
              <p>
                Step into a space where aroma greets you at the door and tradition flows with every dish. From warm hospitality to authentic decor, we offer a true Indian dining experience.
              </p>
              <Button variant="warning">Reserve Your Table</Button>
            </Col>
            <Col md={6}>
              <img src="/assests/img7.avif" alt="Experience" className="img-fluid rounded" />
            </Col>
          </Row>
        </Container>
      </motion.section>
    </>
  );
}

export default About;
