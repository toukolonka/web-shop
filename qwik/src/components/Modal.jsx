import { component$ } from '@builder.io/qwik';

export default component$(({ open, text, onSubmit, onCancel }) => {
  if (!open) return null;

  return (
    <>
      <div class='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-[1000]' onClick$={onCancel}/>
      <div class='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-12 z-[1000] rounded'>
        <h1 class='mb-4 mx-2 text-center xs:text-left'>{text}</h1>
        <div class='flex flex-col xs:flex-row items-center justify-center'>
          <button data-testid="cancelButton" class='btn btn-red mx-2 mb-2 w-24' preventdefault:click  onClick$={onCancel}>Cancel</button>
          <button data-testid="confirmButton" class='btn btn-green mx-2 mb-2 w-24' preventdefault:click  onClick$={onSubmit}>Confirm</button>
        </div>
      </div>
    </>
  );
});