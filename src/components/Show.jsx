import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useAppContext } from '../context/appContext';
import EditModal from './EditModal';

const Show = () => {

  const {students, deleteStudent} = useAppContext();

  const [show, setShow] = useState(false);
  const [rowData, setRowData] = useState({})

  const handleClose = () => setShow(false);

  const handleShow = (student) => {
    setRowData(student)
    setShow(true)
  };




  return (
    <>
         <Table striped bordered hover className='mt-5'>
      <thead className='bg-dark text-white'>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
       {
        students.map( (student) => (
          <tr key={student.id}>
          <td>{student.name} </td>
          <td>{student.age} </td>
          <td>
            <div className="btn-group">
                <button 
                onClick={() => handleShow(student)}
                className='btn btn-info'>
                  Editar
                </button>
                <button
                onClick={() => deleteStudent(student.id)}
                className='btn btn-danger'>
                  Eliminar
                  </button>
            </div>
          </td>
        </tr>
        ))
       }

      </tbody>
    </Table>

    <EditModal rowData={rowData} show={show} onClose={handleClose} />
    </>
  )
}

export default Show
