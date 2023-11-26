import { useState, useEffect } from 'react'

import servicioDolar from '../servicios/dolar'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardTitle, Col, Container, Row, Modal, Button } from "react-bootstrap"
import ModalDesplegable from './ModalDesplegable'




const PanelCotizaciones = () => {
    const [cotizacionesDolar, setCotizacionesDolar] = useState([])

    useEffect(() => {
        servicioDolar.getAll()
            .then(cotizacionesDeLaApi => setCotizacionesDolar(cotizacionesDeLaApi))
    },[])

    const [showOficial, setShowOficial] = useState(false)
    const handleShowOficial = () => setShowOficial(true)
    const [showBlue, setShowBlue] = useState(false)
    const handleShowBlue = () => setShowBlue(true)
    const [showSolidario, setShowSolidario] = useState(false)
    const handleShowSolidario = () => setShowSolidario(true)
    const [showMep, setShowMep] = useState(false)
    const handleShowMep = () => setShowMep(true)
    

    return (
        <div className='bg-dark text-center'>
            <Container className='py-4 bg-dark' >
                <Row bg="dark" data-bs-theme="dark">
                    
                    <Col bg="dark" md={3}>
                        <Card className="card-dolar py-4" bg="dark" onClick={handleShowOficial} >
                            <CardTitle>
                                Dolar Oficial
                            </CardTitle>
                            <CardTitle className='display-4'>
                                {cotizacionesDolar.oficial}
                            </CardTitle>
                        </Card>
                    </Col>
                    <ModalDesplegable 
                        titulo="Dolar Oficial" 
                        texto="Es el valor del dólar que se liquida por parte del gobierno nacional" 
                        show={showOficial} 
                        setShow={setShowOficial}  
                    />
                    


                    <Col md={3}>
                        <Card className="card-dolar py-4" onClick={handleShowBlue}>
                            <CardTitle>
                                Dolar Blue
                            </CardTitle>
                            <CardTitle className='display-4'>
                                {cotizacionesDolar.blue}
                            </CardTitle>
                        </Card>
                    </Col>
                    <ModalDesplegable 
                        titulo="Dolar Blue" 
                        texto="Es el valor del dólar que se paga en el mercado paralelo" 
                        show={showBlue} 
                        setShow={setShowBlue}  
                    />



                    <Col md={3}>
                        <Card className="card-dolar py-4" onClick={handleShowSolidario}>
                            <CardTitle>
                                Dolar Solidario
                            </CardTitle>
                            <CardTitle className='display-4'>
                                {cotizacionesDolar.solidario}
                            </CardTitle>
                        </Card>
                    </Col>
                    <ModalDesplegable 
                        titulo="Dolar Solidario" 
                        texto="Es el valor del dolar oficial al que se le suman los cargos impuestos por el gobierno a todas las operaciones de compra de moneda extranjera por canales oficiales" 
                        show={showSolidario} 
                        setShow={setShowSolidario}  
                    />


                    <Col md={3}>
                        <Card className="card-dolar py-4" onClick={handleShowMep}>
                            <CardTitle>
                                Dolar Mep
                            </CardTitle>
                            <CardTitle className='display-4'>
                                {cotizacionesDolar.mep}
                            </CardTitle>
                        </Card>
                    </Col>
                    <ModalDesplegable 
                        titulo="Dolar MEP" 
                        texto="El dólar MEP o Dólar Bolsa es aquel tipo de cambio resultante de una operación de compra de elementos en pesos y su posterior venta en dólares" 
                        show={showMep} 
                        setShow={setShowMep}  
                    />

                </Row>
            </Container>
        </div>
    )
}

export default PanelCotizaciones