import { createContext, useEffect, useState } from 'react'

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])

  const getPizza = async () => {
    const response = await fetch('/pizzas.json')
    const data = await response.json()
    setPizzas(data)
    console.log(data)
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas }}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider
