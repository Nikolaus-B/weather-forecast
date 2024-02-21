import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { UserForm } from "../UserForm/UserForm";

const customStyles = {
  overlay: {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.8)",
    zIndex: 1200,
  },

  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    border: "none",
    background: "white",
  },
};

Modal.setAppElement("#root");

export const ModalForm = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <p>Create trip</p>
        <button onClick={closeModal}>
          <IoMdClose />
        </button>
      </div>
      <div>
        <UserForm closeModal={closeModal} />
      </div>
    </Modal>
  );
};
ModalForm.propTypes = Boolean;
