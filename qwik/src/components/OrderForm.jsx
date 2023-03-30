import { component$, useContext, useSignal, useTask$, $ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import classNames from 'classnames';

import CartContext, { checkout } from '~/context/CartContext';
import FormInput from './FormInput';
import Modal from './Modal';

const firstNameMinLength = 2;
const firstNameMaxLength = 50;
const lastNameMinLength = 2;
const lastNameMaxLength = 50;
const addressMinLength = 10;
const addressMaxLength = 100;

export default component$(() => {
  const firstName = useSignal('');
  const lastName = useSignal('');
  const address = useSignal('');
  const isFormDirty = useSignal(false);
  const isModalOpen = useSignal(false);

  const cartProducts = useContext(CartContext);

  const navigate = useNavigate();

  useTask$(async ({ track }) => {
    track(() => firstName.value);
    track(() => lastName.value);
    track(() => address.value);
    if (!isFormDirty) isFormDirty.value = true;
  });

  const buttonDisabled = firstName.value.length < firstNameMinLength
    || firstName.value.length > firstNameMaxLength
    || lastName.value.length < lastNameMinLength
    || lastName.value.length > lastNameMaxLength
    || address.value.length < addressMinLength
    || address.value.length > addressMaxLength;

  const placeOrder = $(async () => {
    const response = await fetch('http://localhost:8080/api/orders', {
      method: 'POST',
      body: JSON.stringify(
        {
          orderProducts: cartProducts.value,
          recipientInfo: {
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
          },
        }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    checkout(cartProducts);
    const orderId = await response.json();
    navigate(`/orders/${orderId}`);
  });

  return (
    <form class='mx-2 mt-4'>
      <div class="grid gap-6 mb-6 sm:grid-cols-2">
        <FormInput
          label="First name"
          type="text"
          id="first_name"
          dataTestId="firstNameInput"
          pattern="^[A-Za-z0-9]{2,150}$"
          errorMessage="First name should be 2-150 characters long and shouldn't include any special character!"
          inputValue={firstName}
        />
        <FormInput
          label="Last name"
          type="text"
          id="last_name"
          dataTestId="lastNameInput"
          pattern="^[A-Za-z0-9]{2,150}$"
          errorMessage="Last name should be 2-150 characters long and shouldn't include any special character!"
          inputValue={lastName}
        />
        <FormInput
          label="Delivery address"
          type="text"
          id="address"
          dataTestId="addressInput"
          pattern="^[A-Za-z0-9_ ]{10,150}$"
          errorMessage="Address should be 10-150 characters long and shouldn't include any special character!"
          inputValue={address}
        />
      </div>
      <button
        type="button"
        disabled={buttonDisabled}
        onClick$={() => isModalOpen.value = true}
        class={classNames('btn', 'btn-blue', 'w-full', { 'btn-disabled': buttonDisabled })}
        data-testid="placeOrderButton"
      >
        Place order
      </button>
      <Modal
        open={isModalOpen.value}
        onSubmit={placeOrder}
        onCancel={$(() => isModalOpen.value = false)}
        text="Confirm order"
      />
    </form>
  );
});