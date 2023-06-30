import React from 'react';
import Modal from './Modal';

const Modal2= () => {
  return (
    <div>
      <h1>Modal Example</h1>

      <Modal
        trigger={<button>Open Modal</button>}
        content={<h1>This is the modal content.</h1>}
        className="custom-button"
      />

   
    </div>
  );
};

export default Modal2;
