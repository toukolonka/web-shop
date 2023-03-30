import { component$, useSignal } from '@builder.io/qwik';

export default component$((props) => {
  const focused = useSignal(false);
  const { label, errorMessage, inputValue, dataTestId, ...inputProps } = props;

  return (
    <div class="formInput">
      <label for={inputProps.id} class="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input
        class="input w-full"
        {...inputProps}
        value={inputValue.value}
        onInput$={(e) => inputValue.value = e.target.value}
        onBlur$={() => focused.value = true}
        focused={focused.value.toString()}
        data-testid={dataTestId}
      />
      <span class='text-xs p-1 text-red-500 hidden'>{errorMessage}</span>
    </div>
  );
});