import { Form, InputGroup } from "react-bootstrap"




const BloqueInputCotizaciones = ({monto,setMonto,moneda,texto}) => {

const handleMontoInput = (event) =>{
    setMonto(event.target.value)
}

    return (
        <InputGroup className="p-3">
            <InputGroup.Text id="inputGroup-sizing-default"  >
                {texto} {moneda} 
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