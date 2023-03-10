
import React from 'react';
import ReactDom from 'react-dom';

export default function Modal({ open, children, onSubmit, onCancel }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className='overlay' onClick={onCancel}/>
      <div className='modal'>
        <h1 className='mb-4'>{children}</h1>
        <button className='btn btn-red mr-2' onClick={onCancel}>Cancel</button>
        <button className='btn btn-green' onClick={onSubmit}>Confirm</button>
      </div>
    </>,
    document.getElementById('portal')
  );
}