import { useState, useEffect } from 'react'

import servicioDolar from '../servicios/dolar'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardTitle, Col, Container, Row } from "react-bootstrap"



const PanelCotizaciones = () => {
    const [cotizacionesDolar, setCotizacionesDolar] = useState([])

    useEffect(() => {
        servicioDolar.getAll()
            .then(cotizacionesDeLaApi => setCotizacionesDolar(cotizacionesDeLaApi))
    })

    return (
        <div>
            <Container className='my-4'>
                <Row>
                    <Col md={3}>
                        <Card>
                            <CardTitle>
                                Dolar Oficial
                            </CardTitle>
                            <CardTitle>
                                {cotizacionesDolar.oficial}
                            </CardTitle>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <CardTitle>
                                Dolar Blue
                            </CardTitle>
                            <CardTitle>
                                {cotizacionesDolar.blue}
                            </CardTitle>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <CardTitle>
                                Dolar Solidario
                            </CardTitle>
                            <CardTitle>
                                {cotizacionesDolar.solidario}
                            </CardTitle>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <CardTitle>
                                Dolar Mep
                            </CardTitle>
                            <CardTitle>
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