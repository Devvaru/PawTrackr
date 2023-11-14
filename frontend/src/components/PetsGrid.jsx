import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function PetsGrid() {
  return (
    <Row xs={1} md={4} className='g-4'>
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
              <Card.Title>Pet Name</Card.Title>
              <Card.Text>This is a comment about my pet!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PetsGrid;
