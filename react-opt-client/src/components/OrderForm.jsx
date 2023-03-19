import React, { useState, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { Prompt } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import FormInput from './FormInput';
import Modal from './Modal';

const firstNameMinLength = 2;
const firstNameMaxLength = 50;
const lastNameMinLength = 2;
const lastNameMaxLength = 50;
const addressMinLength = 10;
const addressMaxLength = 100;

function OrderForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    cartProducts,
    checkout,
  } = useContext(CartContext);

  const history = useHistory();

  const buttonDisabled = firstName.length < firstNameMinLength
    || firstName.length > firstNameMaxLength
    || lastName.length < lastNameMinLength
    || lastName.length > lastNameMaxLength
    || address.length < addressMinLength
    || address.length > addressMaxLength;

  async function placeOrder() {
    const response = await fetch('http://localhost:8080/api/orders', {
      method: 'POST',
      body: JSON.stringify(
        {
          orderProducts: cartProducts,
          recipientInfo: {
            firstName,
            lastName,
            address,
          },
          userId: localStorage.getItem('user'),
        }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    checkout();
    const orderId = await response.json();
    history.push(`/orders/${orderId}`);
  }

  const handlePlaceOrder = useCallback(() => placeOrder(), [isModalOpen]);
  const handleModalClose = useCallback(() => setIsModalOpen(false), [isModalOpen]);

  return (
    <form className='mx-2 mt-4'>
      <div className="grid gap-6 mb-6 sm:grid-cols-2">
        <FormInput
          label="First name"
          type="text"
          id="first_name"
          dataTestId="firstNameInput"
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
          dataTestId="lastNameInput"
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
          dataTestId="addressInput"
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
        data-testid="placeOrderButton"
      >
        Place order
      </button>
      <Modal
        open={isModalOpen}
        onSubmit={handlePlaceOrder}
        onCancel={handleModalClose}
        text="Confirm order"
      />
      <Prompt
        when={isFormDirty}
        message="Are you sure you want to leave?"
      />
    </form>
  );
}

export default OrderForm;