import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';

const firstName = "momo";

const App = () => {
  return (
    <Container>
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '20px' }}>
        <Image imageUrl={product.image} />
        <Card.Body>
          <Name productName={product.name} />
          <Price productPrice={product.price} />
          <Description productDescription={product.description} />
        </Card.Body>
      </Card>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        {momo ? `Hello, ${momo}!` : "Hello, there!"}
      </p>
      {momo && <Image imageUrl="https://placekitten.com/200/200" />}
    </Container>
  );
};

export default App;

