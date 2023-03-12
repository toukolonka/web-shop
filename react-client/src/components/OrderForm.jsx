import React, { useState } from 'react';
import classNames from 'classnames';
import { Prompt } from 'react-router-dom';
import FormInput from './FormInput';
import Modal from './Modal';

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
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className="grid gap-6 mb-6 sm:grid-cols-2">
        <FormInput
          label="First name"
          type="text"
          id="first_name"
          pattern="^[A-Za-z0-9]{2,150}$"
          errorMessage="First name should be 2-150 characters long and shouldn't include any special character!"
          onChange={(event) => {
            if (!isFormDirty) setIsFormDirty(true);
            setFirstName(event.target.value);
          }}
          value={firstName}
        />
        <FormInput
          label="Last name"
          type="text"
          id="last_name"
          pattern="^[A-Za-z0-9]{2,150}$"
          errorMessage="Last name should be 2-150 characters long and shouldn't include any special character!"
          onChange={(event) => {
            if (!isFormDirty) setIsFormDirty(true);
            setLastName(event.target.value);
          }}
          value={lastName}
        />
        <FormInput
          label="Delivery address"
          type="text"
          id="address"
          pattern="^[A-Za-z0-9_ ]{10,150}$"
          errorMessage="Address should be 10-150 characters long and shouldn't include any special character!"
          onChange={(event) => {
            if (!isFormDirty) setIsFormDirty(true);
            setAddress(event.target.value);
          }}
          value={address}
        />
      </div>
      <button
        type="button"
        disabled={buttonDisabled}
        onClick={() => setIsModalOpen(true)}
        className={classNames('btn', 'btn-blue', 'w-full', { 'btn-disabled': buttonDisabled })}
      >
        Place order
      </button>
      <Modal
        open={isModalOpen}
        onSubmit={() => props.placeOrder(recipientInfo)}
        onCancel={() => setIsModalOpen(false)}
      >
        Confirm order
      </Modal>
      <Prompt
        when={isFormDirty}
        message="Are you sure you want to leave?"
      />
    </form>
  );
}

export default OrderForm;