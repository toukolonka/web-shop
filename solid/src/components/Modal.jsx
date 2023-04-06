function Modal({ open, text, onSubmit, onCancel }) {
  return (
    <Show
      when={open()}
      fallback={null}
    >
      <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-[1000]' onClick={onCancel}/>
      <div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-12 z-[1000] rounded'>
        <h1 className='mb-4 mx-2 text-center xs:text-left'>{text}</h1>
        <div className='flex flex-col xs:flex-row items-center justify-center'>
          <button data-testid="cancelButton" className='btn btn-red mx-2 mb-2 w-24' onClick={onCancel}>Cancel</button>
          <button data-testid="confirmButton" className='btn btn-green mx-2 mb-2 w-24' onClick={onSubmit}>Confirm</button>
        </div>
      </div>
    </Show>
  );
}

export default Modal;