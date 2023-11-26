import { Form, InputGroup } from "react-bootstrap"




const BloqueInputCotizaciones = ({monto,setMonto}) => {

const handleMontoInput = (event) =>{
    setMonto(event.target.value)
}

    return (
        <InputGroup className="mb-3 p-3">
            <InputGroup.Text id="inputGroup-sizing-default"  >
                Ingrese sus tenencias en ARS
            </InputGroup.Text>
            <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="number"
                min={0}
                onChange={handleMontoInput}
            />
        </InputGroup>
    )
}

export default BloqueInputCotizaciones