import React, { useContext } from 'react'
import Header from '../components/Header'
import Row from 'react-bootstrap/Row'
import CardPizzas from '../components/CardPizzas'
import { PizzaContext } from '../context/PizzaContext'

const Home = () => {
  const { pizzas } = useContext(PizzaContext)
  return (
    <>
      <Header />
      <div className='container p-3'>
        <Row xs={1} md={3}>
          {pizzas.map(pizza => (
            <CardPizzas key={pizza.id} pizza={pizza} />
          ))}
        </Row>
      </div>
    </>
  )
}

export default Home
