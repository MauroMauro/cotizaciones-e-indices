import { useState } from "react"


import PanelCotizaciones from "./PanelCotizaciones"
import 'bootstrap/dist/css/bootstrap.min.css'

import { Navbar, Nav, Container, Button } from "react-bootstrap"
import Calculadora from "./Calculadora"




const NavbarTop = () => {
  const [pulsedCotizaciones, setPulsedCotizaciones] = useState(true)
  const [pulsedCalculadora, setPulsedCalculadora] = useState(false)

  const handleCotizacionesPulsed = () =>{
    if(pulsedCotizaciones){
      setPulsedCalculadora(false)
    } else {
      setPulsedCalculadora(false)
      setPulsedCotizaciones(true)
    }
  }

  const handleCalculadoraPulsed = () =>{
    if(pulsedCalculadora){
      setPulsedCotizaciones(false)
    } else {
      setPulsedCotizaciones(false)
      setPulsedCalculadora(true)
    }
  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link onClick={ () => handleCotizacionesPulsed()}>Cotizaciones</Nav.Link>
            <Nav.Link onClick={() => handleCalculadoraPulsed()}>Calculadora Rulo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {pulsedCotizaciones ? <PanelCotizaciones /> : null}
      {pulsedCalculadora ? <Calculadora /> : null}



    </div>)
}

export default NavbarTop