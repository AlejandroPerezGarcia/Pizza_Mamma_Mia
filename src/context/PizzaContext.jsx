import { createContext, useEffect, useState } from 'react'

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [carrito, setCarrito] = useState([])
  console.log(carrito)

  /* get para vista pizza home */
  const getPizza = async () => {
    const response = await fetch('/pizzas.json')
    const data = await response.json()
    setPizzas(data)
  }

  /* agregar producto */

  const agregarProducto = ({ desc, id, img, ingredients, name, price }) => {
    const productExixte = carrito.find(product => product.id === id)
    console.log(id)
    const product = { desc, id, img, ingredients, name, price, count: 1 }
    if (productExixte !== undefined) {
      /*  suma producto */
      carrito[carrito.findIndex(producto => producto.id === product.id)].count++
      setCarrito([...carrito])
    } else {
      /* agrega Producto */
      setCarrito([...carrito, product])
    }
  }

  const incrementar = (index) => {
    carrito[index].count++
    setCarrito([...carrito])
  }

  const eliminar = (index) => {
    const { count } = carrito[index]
    if (count > 1) {
      carrito[index].count--
      setCarrito([...carrito])
    } else {
      carrito.splice(index, 1)
      setCarrito([...carrito])
    }
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, agregarProducto, carrito, incrementar, eliminar }}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider
