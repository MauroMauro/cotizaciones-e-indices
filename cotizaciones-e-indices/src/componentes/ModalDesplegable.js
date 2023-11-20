import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button, Card, CardTitle, Col, Container, Row } from "react-bootstrap"

const ModalDesplegable = (titulo, texto, show, handleClose) => {


    return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{texto}</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-info" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
    )
}

export default ModalDesplegable