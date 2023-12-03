import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

import PanelCotizaciones from "./PanelCotizaciones"
import 'bootstrap/dist/css/bootstrap.min.css'

import { Navbar, Nav, Container } from "react-bootstrap"
import Calculadora from "./Calculadora"



const NavbarTop = () => (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000">Cotizaciones</Nav.Link>
            <Nav.Link href="http://localhost:3000/calculadora">Calculadora Rulo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route path="/" element={<PanelCotizaciones />} />
          <Route path='/calculadora' element={<Calculadora />} />
        </Routes>
      </Router>
    </div>
)

export default NavbarTop