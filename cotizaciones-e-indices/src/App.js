import { useState, useEffect } from 'react'
import PanelCotizaciones from './componentes/PanelCotizaciones'
import NavbarTop from './componentes/NavbarTop'

import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './componentes/Footer'



const App = () => {


  return (
    <div className='bg-dark'>      
      <NavbarTop />
      <PanelCotizaciones />
      <Footer />
    </div>

  )

}

export default App