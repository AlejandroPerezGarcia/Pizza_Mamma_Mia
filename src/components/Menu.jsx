import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { PizzaContext } from '../context/PizzaContext'
import { useContext, React } from 'react'

import { Link } from 'react-router-dom'

const Menu = () => {
  const { carrito } = useContext(PizzaContext)
  const total = carrito.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.price * valorActual.count,
    0
  )
  console.log('desde el menu', carrito)
  return (
    <Navbar className='bg-body-tertiary' bg='primary'>
      <Container>
        <Link to='/' className='text-white link'>
          <img
            alt=''
            src='/pizza-img.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Pizzeria Mamma Mia!
        </Link>
        <Navbar.Collapse className='justify-content-end'>
          <Link className='text-white link' to='/carrito'>
            <img
              alt=''
              src='/carrito.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
            /> ${total}
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
