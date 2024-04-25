import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Carrito from './views/Carrito'
import Pizza from './views/Pizza'
import NotFound from './views/NotFound'
import Menu from './components/Menu'

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/carrito'
          element={<Carrito />}
        />
        <Route
          path='/pizza/:id'
          element={<Pizza />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>

  )
}

export default App
