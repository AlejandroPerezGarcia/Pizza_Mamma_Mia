import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { CardText } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CardPizzas = ({ pizza, agregarProducto }) => {
  const navigate = useNavigate()
  return (
    <div className='p-3'>
      <Card style={{ width: '20rem' }} className='container p-2'>
        <Card.Img variant='top' src={pizza.img} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <hr />
            <h5>Ingredientes:</h5>
            <br />
            <ul>
              {pizza.ingredients.map((ingrediente) =>
                <li key={ingrediente}>
                  <img
                    alt=''
                    src='/pizza-img.png'
                    width='20'
                    height='20'
                    className='d-inline-block align-top me-2'
                  />
                  {ingrediente}
                </li>
              )}
            </ul>
          </Card.Text>
          <CardText className='text-center pt-4'> $ {pizza.price}
          </CardText>
          <CardText className='text-center'>
            <Button onClick={() => navigate(`/pizza/${pizza.id}`)} variant='primary'>Ver Más
              <img
                alt=''
                src='/eyes.png'
                width='25'
                height='25'
                className='d-inline-block align-top'
              />
            </Button>
            <Button variant='danger' onClick={() => agregarProducto(pizza)} className='ms-5'>Añadir
              <img
                alt=''
                src='/market.png'
                width='25'
                height='25'
                className='d-inline-block align-top'
              />
            </Button>
          </CardText>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardPizzas
