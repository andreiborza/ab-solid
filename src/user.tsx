import { useParams, A, useCurrentMatches } from '@solidjs/router';
import { createEffect } from 'solid-js';

export const User = () => {
  const params = useParams();

  const matches = useCurrentMatches();

  createEffect(() => {
    console.log('XXX matches', matches());
  });

  console.log('XXX', matches());

  return (
    <div>
      Hello user {params.userId}
      <br />
      <ul>
        <li>
          <A href="favorite/1">Favorite 1</A>
        </li>
        <li>
          <A href="favorite/2">Favorite 2</A>
        </li>
        <li>
          <A href="favorite/3">Favorite 3</A>
        </li>
      </ul>
      <A href="/app">Back to App</A>
    </div>
  );
};
