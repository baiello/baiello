import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './welcome.css?inline';

export const Welcome = component$(() => {
  useStyles$(styles);

  return (
    <section class="container">
      <h1>Welcome</h1>
    </section>
  );
});
