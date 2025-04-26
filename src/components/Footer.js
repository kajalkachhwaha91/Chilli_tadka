import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C1C1C', color: '#fff', padding: '20px 0' }}>
      <Container className="text-center">
        <p>© {new Date().getFullYear()} Chilli Tadka. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
