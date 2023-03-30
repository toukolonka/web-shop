import { component$ } from '@builder.io/qwik';

export default component$((props) => {
  return (
    <input
      class="input flex-grow inline-block mt-2 xs:last:ml-4 w-full xs:w-auto"
      type="number"
      placeholder={props.placeholder}
      value={props.filterValue.value}
      onInput$={(event) => props.filterValue.value = event.target.value}
      data-testid={props.dataTestId}
    />
  );
});
