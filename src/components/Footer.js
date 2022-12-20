import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header>About</Card.Header>
      <Card.Body>
        <Card.Title>Address</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" className='btn btn-sm'>Give your feedbacks</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Let's Eat-It-Out</Card.Footer>
    </Card>
  )
}

export default Footer