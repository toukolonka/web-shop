import React, { useState } from 'react';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, dataTestId, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label htmlFor={inputProps.id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input
        className="input w-full"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        // eslint-disable-next-line react/no-unknown-property
        focused={focused.toString()}
        data-testid={dataTestId}
      />
      <span className='text-xs p-1 text-red-500 hidden'>{errorMessage}</span>
    </div>
  );
};

export default FormInput;