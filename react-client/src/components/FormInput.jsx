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
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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