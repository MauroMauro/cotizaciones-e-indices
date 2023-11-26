import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button, Card, CardTitle, Col, Container, Row } from "react-bootstrap"

const ModalDesplegable = ({titulo, texto, show, setShow}) => {
    const handleClose = () => setShow(false)
    

    return (
        <Modal show={show} onHide={handleClose} className='text-white'>
            <Modal.Body>
                <b>{titulo}</b>
                <br></br>
                {texto} 
                <div className='text-end'><Button variant="outline-info" onClick={handleClose}>Cerrar</Button></div>
                
            </Modal.Body>
        </Modal>
    )
}

export default ModalDesplegable