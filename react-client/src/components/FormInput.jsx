import React, { useState } from 'react';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input
        className="input w-full"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        // eslint-disable-next-line react/no-unknown-property
        focused={focused.toString()}
      />
      <span className='error'>{errorMessage}</span>
    </div>
  );
};

export default FormInput;