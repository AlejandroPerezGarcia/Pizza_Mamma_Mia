import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className='container p-5 notfound'>
        <img src='./gv.png' alt='png' />
        <h2 className='text-center p-3'>Pagina No encontrada</h2>
        <Link to='/'>
          <button className='btn btn-primary p-3'>Regresar</button>
        </Link>
      </div>
    </>
  )
}

export default NotFound
