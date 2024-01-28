import { useState, useEffect } from 'react'

import servicioDolar from '../servicios/dolar'

import BloqueInputCotizaciones from './BloqueInputCotizaciones'
import ApiResultMock from './ApiResultMock'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Container } from "react-bootstrap"

const Calculadora = () => {
    const [cotizacionesDolar, setCotizacionesDolar] = useState(ApiResultMock)

    useEffect(() => {
        servicioDolar.getAll()
            .then(cotizacionesDeLaApi => setCotizacionesDolar(cotizacionesDeLaApi))
    }, [])

    const [montoArs, setMontoArs] = useState(0)
    const [tasa, setTasa] = useState(30)

    const [showExplicacionRulo, setShowExplicacionRulo] = useState(false)
    const handleShowExplicacionRulo = () => setShowExplicacionRulo(true)

    return (
        <div className='bg-dark text-center'>

            <Container className='bg-dark text-white' >
                <h1>Calculadora Rulo</h1>
                <p className='text-white'>Comparar retornos de un loop en dolares contra un plazo fijo a 30 días en pesos</p>
                <BloqueInputCotizaciones monto={montoArs} setMonto={setMontoArs} moneda={"ARS"} texto={"Ingrese sus tenencias en "}/>

                <div className='container py-4'>
                    <div className='d-grid gap-2'>
                        <h2>Retornos de un loop en dolares</h2>
                    </div>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='card card-rulo bg-dark py-4 my-2 text-white'>
                                    <p className='h3'><b className='border border-white rounded-circle px-2'>1°</b></p>
                                    <hr></hr>
                                    <p className='text-grey'>Con <b>{montoArs} ARS</b> se compran</p>
                                    <p className='display-5'> {(montoArs / ((cotizacionesDolar.ahorro).ask)).toFixed(2)} </p><b>USD</b>
                                    <p className='text-grey'>a cotización <i>dolar ahorro</i></p>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className='card card-rulo bg-dark py-4 my-2 text-white'>
                                    <p className='h3'><b className='border border-white rounded-circle px-2'>2°</b></p>
                                    <hr></hr>
                                    <p className='text-grey'>Esos <b>{(montoArs / ((cotizacionesDolar.ahorro).ask)).toFixed(2)} USD</b> se venden a</p>
                                    <p className='display-5'> {(((montoArs / ((cotizacionesDolar.ahorro).ask)).toFixed(2)) * (cotizacionesDolar.blue).ask).toFixed(0)} </p><b>ARS</b>
                                    <p className='text-grey'>a cotización <i>dolar blue</i></p>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className='card card-rulo bg-dark py-4 my-2 text-white'>
                                    <p className='h3'><b className='border border-white rounded-circle px-2'>3°</b></p>
                                    <hr></hr>
                                    <p className='text-grey'>Con <b>{(((montoArs / ((cotizacionesDolar.ahorro).ask)).toFixed(2)) * (cotizacionesDolar.blue).ask).toFixed(0)} ARS</b> se comprarán</p>
                                    <p className='display-5'> {((((montoArs / ((cotizacionesDolar.ahorro).ask)).toFixed(2)) * (cotizacionesDolar.blue).ask) / ((cotizacionesDolar.ahorro).ask)).toFixed(2)} </p><b>USD</b>
                                    <p className='text-grey'>a cotización <i>dolar solidario</i></p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card card-rulo bg-dark py-4 my-2 text-white'>
                        <p>Después de la operación de venta en dólares a cotización blue, se obtienen <b className='resultados'>{((((montoArs / ((cotizacionesDolar.ahorro).ask)).toFixed(2)) * (cotizacionesDolar.blue).ask).toFixed(0)) - montoArs}</b> pesos de ganancia</p>
                    </div>
                </div>

                <hr></hr>


                <div className='container py-4'>
                    <div className='d-grid gap-2'>
                        <h2>Retornos de un plazo fijo a 30 días</h2>
                    </div>
                    {console.log('==> montoArs', montoArs )}

                    <BloqueInputCotizaciones monto={tasa} setMonto={setTasa}  texto={"Ingrese la tasa anual para calcular "}/>

                    <div className='container'>

                        <div className='container'>
                            <div className='card card-pf bg-dark py-4 my-2 text-white'>
                                <p className='text-grey'>Con <b>{montoArs} ARS</b> colocados a 30 días se obtienen</p>
                                <p className='display-5'> {Number(montoArs) + (((tasa / 12) * montoArs)/100)} </p>ARS
                                <p className='text-grey'>con una tasa mensual de <b>{(tasa / 12).toFixed(2)}%</b></p>
                            </div>
                        </div>

                        <div className='card card-pf bg-dark py-4 my-2 text-white'>
                            <p>Después de 30 días se obtendrán <b className='resultados'>{(((tasa / 12) * montoArs)/100)}</b> pesos de ganancia</p>
                        </div>
                    </div>
                </div>



            </Container>
        </div>
    )
}

export default Calculadora