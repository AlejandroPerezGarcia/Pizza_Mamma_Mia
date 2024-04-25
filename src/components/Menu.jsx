import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const Menu = () => {
  return (
    <Navbar className='bg-body-tertiary' bg='primary'>
      <Container>
        <Navbar.Brand href='/' className='text-white'>
          <img
            alt=''
            src='/pizza-img.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Pizzeria Mamma Mia!
        </Navbar.Brand>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text className='text-white'>
            <img
              alt=''
              src='/carrito.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
            /> $145.520
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
