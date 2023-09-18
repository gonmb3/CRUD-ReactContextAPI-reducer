import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import {AiFillPlusCircle} from "react-icons/ai"
import { useAppContext } from '../context/appContext';

const Create = () => {

    const {createStudent} = useAppContext()

    //inputs states
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
       createStudent({
        id: Date.now(),
        name, 
        age
       })
       setName("")
       setAge("")
    }

  return (
    <form onSubmit={handleSubmit}>
    <FloatingLabel
      controlId="floatingInput"
      label="Nombre"
      className="mb-3"
    >
      <Form.Control
      value={name}
      onChange={e => setName(e.target.value)}
       type="text"
        placeholder="Nombre..." />

    </FloatingLabel>

    <FloatingLabel
     controlId="age" 
     label="Edad">

      <Form.Control 
      type="number"
      value={age}
    onChange={e => setAge(e.target.value)}
       placeholder="Edad..." />

    </FloatingLabel>

    <div className="d-grid gap-2 mt-5">
        <button className="btn btn-primary" type='submit'>
            Crear <AiFillPlusCircle/>
        </button>
    </div>
  </form>
  )
}

export default Create
