import React from 'react';

const DetailsModal = ({gym}) => {
    const { title, timestamp, description, completed, _id } = gym;

    return (
        <>
        <dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{description}</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
        </>
    );
};

export default DetailsModal;