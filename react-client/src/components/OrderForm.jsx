import React, { useState } from 'react';
import classNames from 'classnames';
import FormInput from './FormInput';

const firstNameMinLength = 2;
const firstNameMaxLength = 50;
const lastNameMinLength = 2;
const lastNameMaxLength = 50;
const addressMinLength = 10;
const addressMaxLength = 100;

function OrderForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  const buttonDisabled = firstName.length < firstNameMinLength
    || firstName.length > firstNameMaxLength
    || lastName.length < lastNameMinLength
    || lastName.length > lastNameMaxLength
    || address.length < addressMinLength
    || address.length > addressMaxLength;

  const recipientInfo = {
    firstName,
    lastName,
    address,
  };

  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <FormInput
          label="First name"
          type="text"
          id="first_name"
          pattern="^[A-Za-z0-9]{2,150}$"
          errorMessage="First name should be 2-50 characters long and shouldn't include any special character!"
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
        />
        <FormInput
          label="Last name"
          type="text"
          id="last_name"
          pattern="^[A-Za-z0-9]{2,150}$"
          errorMessage="Last name should be 2-50 characters long and shouldn't include any special character!"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
        <FormInput
          label="Delivery address"
          type="text"
          id="address"
          pattern="^[A-Za-z0-9]{10,150}$"
          errorMessage="Address should be 10-50 characters long and shouldn't include any special character!"
          onChange={(event) => setAddress(event.target.value)}
          value={address}
        />
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