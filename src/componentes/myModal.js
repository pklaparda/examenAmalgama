import React from "react";
import Modal from "react-modal";

const MyModal = props => {
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      style={modalStyles}
      contentLabel="Que bonita mascota!"
    >
      <div className="d-flex flex-column align-items-start">
        <h3>Que bonito {props.razaEnUso}!</h3>
        {props.imagen === "" ? (
          "cargando.."
        ) : (
          <img src={props.imagen} alt="" style={{ maxHeight: "400px" }} />
        )}
        <button
          onClick={props.btnCloseHandler}
          className="btn btn-outline-danger mt-2"
        >
          Cerrar
        </button>
      </div>
    </Modal>
  );
};

export default MyModal;
