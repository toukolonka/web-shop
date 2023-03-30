import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import NavBar from '~/components/NavBar.jsx';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: 'hello world',
  };
});

export default component$(() => {
  return (
    <div class="page">
      <main>
        <NavBar />
        <div class='mx-auto max-w-xl w-full my-2'>
          <div class='mx-2'>
            <Slot />
          </div>
        </div>
      </main>
    </div>
  );
});
