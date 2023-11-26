import { useState, useEffect } from 'react'

import servicioDolar from '../servicios/dolar'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardTitle, Col, Container, Row, Modal, Button, CardFooter } from "react-bootstrap"
import ModalDesplegable from './ModalDesplegable'
import BloqueInputCotizaciones from './BloqueInputCotizaciones'




const PanelCotizaciones = () => {
    const [cotizacionesDolar, setCotizacionesDolar] = useState([])

    useEffect(() => {
        servicioDolar.getAll()
            .then(cotizacionesDeLaApi => setCotizacionesDolar(cotizacionesDeLaApi))
    },[])

    const [montoArs, setMontoArs] = useState(0)
    const [montoUsd, setMontoUsd] = useState(0)

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

            <Container className='bg-dark' >
                <BloqueInputCotizaciones monto={montoArs} setMonto={setMontoArs} moneda={"ARS"}/> 
                <BloqueInputCotizaciones monto={montoUsd} setMonto={setMontoUsd} moneda={"USD"}/> 
            </Container>

            <Container className='bg-dark' >
                <Row bg="dark" data-bs-theme="dark" className='my-2'>
                    
                    <Col bg="dark" md={3}>
                        <Card className="card-dolar py-4 my-2" bg="dark" onClick={handleShowOficial} >
                            <CardTitle>
                                Dolar Oficial
                            </CardTitle>
                            <CardTitle className='display-4'>
                                {cotizacionesDolar.oficial}
                            </CardTitle>
                            <CardFooter>
                                Sus <b>ARS</b> en tenencia equivalen a<br></br>
                                <span className='monto'>{(montoArs/(cotizacionesDolar.oficial)).toFixed(2)}</span> USD
                                <br></br>
                                <br></br>
                                Sus <b>USD</b> intercambiados a precio oficial equivalen a <br></br>
                                <span className='montoUsd'>{(montoUsd*(cotizacionesDolar.oficial)).toFixed(0)}</span> ARS
                            </CardFooter>
                        </Card>
                    </Col>
                    <ModalDesplegable 
                        titulo="Dolar Oficial" 
                        texto="Es el valor del dólar que se liquida por parte del gobierno nacional" 
                        show={showOficial} 
                        setShow={setShowOficial}  
                    />
                    


                    <Col md={3}>
                        <Card className="card-dolar py-4 my-2" onClick={handleShowBlue}>
                            <CardTitle>
                                Dolar Blue
                            </CardTitle>
                            <CardTitle className='display-4'>
                                {cotizacionesDolar.blue}
                            </CardTitle>
                            <CardFooter>
                                Sus <b>ARS</b> en tenencia equivalen a<br></br>
                                <span className='monto'>{(montoArs/(cotizacionesDolar.blue)).toFixed(2)}</span> USD
                                <br></br>
                                <br></br>
                                Sus <b>USD</b> intercambiados a precio dolar blue equivalen a <br></br>
                                <span className='montoUsd'>{(montoUsd*(cotizacionesDolar.blue)).toFixed(0)}</span> ARS
                            </CardFooter>
                        </Card>
                    </Col>
                    <ModalDesplegable 
                        titulo="Dolar Blue" 
                        texto="Es el valor del dólar que se paga en el mercado paralelo" 
                        show={showBlue} 
                        setShow={setShowBlue}  
                    />



                    <Col md={3}>
                        <Card className="card-dolar py-4 my-2" onClick={handleShowSolidario}>
                            <CardTitle>
                                Dolar Solidario
                            </CardTitle>
                            <CardTitle className='display-4'>
                                {cotizacionesDolar.solidario}
                            </CardTitle>
                            <CardFooter>
                                Sus <b>ARS</b> en tenencia equivalen a<br></br>
                                <span className='monto'>{(montoArs/(cotizacionesDolar.solidario)).toFixed(2)}</span> USD
                                <br></br>
                                <br></br>
                                Sus <b>USD</b> intercambiados a precio dolar solidario equivalen a <br></br>
                                <span className='montoUsd'>{(montoUsd*(cotizacionesDolar.solidario)).toFixed(0)}</span> ARS
                            </CardFooter>
                        </Card>
                        
                    </Col>
                    <ModalDesplegable 
                        titulo="Dolar Solidario" 
                        texto="Es el valor del dolar oficial al que se le suman los cargos impuestos por el gobierno a todas las operaciones de compra de moneda extranjera por canales oficiales" 
                        show={showSolidario} 
                        setShow={setShowSolidario}  
                    />


                    <Col md={3}>
                        <Card className="card-dolar py-4 my-2" onClick={handleShowMep}>
                            <CardTitle>
                                Dolar MEP
                            </CardTitle>
                            <CardTitle className='display-4'>
                                {cotizacionesDolar.mep}
                            </CardTitle>
                            <CardFooter>
                                Sus <b>ARS</b> en tenencia equivalen a<br></br>
                                <span className='monto'>{(montoArs/(cotizacionesDolar.mep)).toFixed(2)}</span> USD
                                <br></br>
                                <br></br>
                                Sus <b>USD</b> intercambiados a precio MEP equivalen a <br></br>
                                <span className='montoUsd'>{(montoUsd*(cotizacionesDolar.mep)).toFixed(0)}</span> ARS
                            </CardFooter>
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