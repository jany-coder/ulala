import React, { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';


export default function ManagePictureCard (props) {
    const { price, title, _id} = props.destination;
    const [modal, setModal] = useState(false);

    const handleDelete = id => {
        fetch(`http://localhost:5000/${_id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(data => { setModal(true);})};


    const icon1 = { color: "#4f4f4f", marginRight: "1rem", cursor: "pointer" }
    const icon2 = { color: "red", cursor: "pointer" }

return (
    <>
        <tr>
            <td>{title}</td>
            <td>$ {price}</td>
            <td>
                <FontAwesomeIcon icon={faPencilAlt} style={icon1} />
                <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDelete({_id})} style={icon2} />
            </td>
        </tr>
        {/* modal */}
        <Modal show={modal} onHide={()=>setModal(false)} centered>
            <Modal.Body><h6>{title} is deleted.</h6></Modal.Body>
            <Modal.Footer><Button variant="success btn-sm" onClick={()=> setModal(false)}>Close</Button></Modal.Footer>
        </Modal>
    </>
    );
};
