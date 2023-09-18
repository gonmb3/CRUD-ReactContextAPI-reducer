import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form"
import { useAppContext } from '../context/appContext';

const EditModal = ({show,onClose, rowData}) => {

  const {updateStudent} = useAppContext();

  const [formData, setFormData] = useState({
    id:"",
    name:"",
    age:""
  })

  const handleOnChange = (key, value) => {
    setFormData({
      ...formData,
      [key]:value
    })
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    updateStudent(formData)
    onClose()
  }
  useEffect(() => {
    setFormData(rowData)
  }, [rowData])

  const {name, age} = rowData;

  return (
    <form >
  

    <Modal show={show} onHide={onClose}>
      <Modal.Header className='bg-info text-white' closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
            <Form.Control onChange={e =>  handleOnChange("name", e.target.value)} defaultValue={name} type="text"/>
        </Form.Group>

        <Form.Group>
            <Form.Control onChange={e =>  handleOnChange("age", e.target.value)} defaultValue={age} type="number"/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSubmit} >
         Actualizar
        </Button>
      </Modal.Footer>
    </Modal>
  </form>
  )
}

export default EditModal
