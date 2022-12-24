import { component$, useStyles$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './header.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <header class="container main-header">
      <div class="name">
        <Link href="/">Brice AÏELLO</Link>
      </div>
    </header>
  );
});
