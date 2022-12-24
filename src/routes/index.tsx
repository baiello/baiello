import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { Welcome } from '~/components/welcome/welcome';

export default component$(() => {
  return (
    <Welcome />
  );
});

export const head: DocumentHead = {
  title: 'Brice AIELLO',
  meta: [
    {
      name: 'description',
      content: 'Brice AIELLO',
    },
  ],
};
