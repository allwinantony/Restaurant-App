import React from 'react'
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div className='mt-5'>
      
    <Card className="text-center">
      <Card.Header>We show you where-to-eat</Card.Header>
      <Card.Body>
        <Card.Title>Let's Eat-It-Out</Card.Title>
        <Card.Text>
        Eat-It-Out is not a booking agent or restaurant management. When you book with one of these restaurants, please be sure to check their site for a full disclosure of all applicable fees.
        </Card.Text>
        <a className='text-dark text-decoration-none'>Give your feedbacks</a>
      </Card.Body>
      <Card.Footer className="text-muted">Let's Eat-It-Out</Card.Footer>
    </Card>
    </div>

  )
}

export default Footer