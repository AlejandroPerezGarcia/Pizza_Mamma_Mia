import { PizzaContext } from '../context/PizzaContext'
import { useContext, React } from 'react'
import { Link } from 'react-router-dom'

const Carrito = () => {
  const { carrito, incrementar, eliminar } = useContext(PizzaContext)
  const total = carrito.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.price * valorActual.count,
    0
  )

  return (
    <div className='container p-5'>
      <h4>Detalle de Pedido</h4>
      <div className='shadow-lg p-3 mb-5 bg-body*tertiary rounded'>
        {
          carrito.map((product, index) => (
            <div className='carrito' key={product.id}>
              <div className='carrito-2 p-3'>
                <img
                  src={product.img}
                  alt='img'
                  width='70'
                  height='70'
                />
                <p>{product.name}</p>
              </div>
              <div className='cantidad'>
                <p>Valor Pizza : {product.price}</p>
                <button className='btn btn-success' onClick={() => incrementar(index)}>+</button>
                <p>{product.count}</p>
                <button className='btn btn-warning' onClick={() => eliminar(index)}>-</button>

              </div>
            </div>
          ))
        }
      </div>
      <h2 className='total-2'>Total : ${total} </h2>
      <Link to='/'>
        <button className='btn btn-primary'>Regresar</button>
      </Link>
    </div>
  )
}

export default Carrito
