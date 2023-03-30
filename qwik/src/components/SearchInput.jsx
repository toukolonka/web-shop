import { component$ } from '@builder.io/qwik';

export default component$((props) => {
  return (
    <input
      class="input flex-grow flex-shrink-0 w-full inline-block"
      type="text"
      placeholder="Search"
      value={props.searchValue.value}
      onInput$={(event) => props.searchValue.value = event.target.value}
      data-testid="searchButton"
    />
  );
});