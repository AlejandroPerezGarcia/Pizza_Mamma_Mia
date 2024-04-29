import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useParams, Link } from 'react-router-dom'
import { PizzaContext } from '../context/PizzaContext'

const Pizza = () => {
  const { id } = useParams()
  const { pizzas, agregarProducto } = useContext(PizzaContext)
  const [pizzaDetail, setPizzaDetail] = useState()
  const getData = () => {
    const informacion = pizzas.find((pizza) => pizza.id === id)
    setPizzaDetail(informacion)
    console.log(informacion)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {pizzaDetail && (
        <div className='container p-5'>
          <Card className='pizza p-5' style={{ width: '70rem', height: '30rem' }}>
            <Card.Img style={{ width: '20rem' }} variant='top' src={pizzaDetail.img} />
            <Card.Body>
              <Card.Title className='p-2'>{pizzaDetail.name}</Card.Title>
              <Card.Text>
                <div className='p-2'>
                  {pizzaDetail.desc}
                </div>
                <div className='p-3'>
                  <ul>
                    {pizzaDetail.ingredients && pizzaDetail.ingredients.map((ingrediente) =>
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
                  <p className='card-text fw-bold'>Precio: ${pizzaDetail.price}</p>
                </div>
              </Card.Text>
              <div className='container'>
                <div className='d-flex justify-content-center'>
                  <Button onClick={() => agregarProducto(pizzaDetail)} variant='danger' className='ms-5'>Añadir
                    <img
                      alt=''
                      src='/market.png'
                      width='25'
                      height='25'
                      className='d-inline-block align-top'
                    />
                  </Button>
                  <Link to='/'>
                    <button className='btn btn-primary'>
                      Regresar
                    </button>
                  </Link>
                </div>
              </div>

            </Card.Body>
          </Card>
        </div>
      )}
    </>
  )
}

export default Pizza
