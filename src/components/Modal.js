import React, { useState } from "react";

const Modal = ({ trigger, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className={className}>
        {trigger}
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              Close Modal
            </button>
            <div className="modal-content">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
