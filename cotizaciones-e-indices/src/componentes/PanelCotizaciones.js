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
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='bg-dark text-center'>
            <Container className='py-4 bg-dark' >
                <Row bg="dark" data-bs-theme="dark">
                    <Col bg="dark" md={3}>
                        <Card className="card-dolar py-4" bg="dark" onClick={handleShow}>
                            <CardTitle>
                                Dolar Oficial
                            </CardTitle>
                            <CardTitle className='display-4'>
                                {cotizacionesDolar.oficial}
                            </CardTitle>
                        </Card>
                    </Col>

                    {/* <ModalDesplegable titulo="título" texto="texto" show={show} handleClose={handleClose}  /> */}

                    <Modal show={show} onHide={handleClose} className='text-white' >
                        <Modal.Header closeButton className='text-white'>
                            <Modal.Title>Dolar Oficial</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Es el valor del dólar que se liquida por parte del gobierno nacional.</Modal.Body>
                    </Modal>






                    <Col md={3}>
                        <Card className="card-dolar py-4" >
                            <CardTitle>
                                Dolar Blue
                            </CardTitle>
                            <CardTitle className='display-4'>
                                {cotizacionesDolar.blue}
                            </CardTitle>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="card-dolar py-4" >
                            <CardTitle>
                                Dolar Solidario
                            </CardTitle>
                            <hr />
                            <CardTitle className='display-4'>
                                {cotizacionesDolar.solidario}
                            </CardTitle>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="card-dolar py-4" >
                            <CardTitle>
                                Dolar Mep
                            </CardTitle>
                            <CardTitle className='display-4'>
                                {cotizacionesDolar.mep}
                            </CardTitle>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PanelCotizaciones