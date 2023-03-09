import React, { useState } from 'react';
import classNames from 'classnames';

function OrderForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  const buttonDisabled = firstName === '' || lastName === '' || address === '';

  const recipientInfo = {
    firstName,
    lastName,
    address,
  };

  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
        </div>
        <div>
          <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Delivery address</label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(event) => setAddress(event.target.value)}
            value={address}
          />
        </div>
      </div>
      <button
        type="button"
        disabled={buttonDisabled}
        onClick={() => props.placeOrder(recipientInfo)}
        className={classNames('btn', 'btn-green', { 'btn-disabled': buttonDisabled })}
      >
            Place order
      </button>
    </form>
  );
}

export default OrderForm;