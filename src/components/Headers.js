import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Headers() {
  return (

        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">
                <img
                alt=""
                src="https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg"
                width="75"
                height="45"
                className="d-inline-block align-top rounded"
                />{' '}
                Eat-It-Out
            </Navbar.Brand>
            </Container>
        </Navbar>
  )
}

export default Headers
