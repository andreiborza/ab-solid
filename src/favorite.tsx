import { useCurrentMatches, useParams, A } from '@solidjs/router';
import { createEffect } from 'solid-js';

export const Favorite = () => {
  const params = useParams();
  const matches = useCurrentMatches();

  createEffect(() => {
    console.log('XXX matches', matches());
  });

  console.log('XXX', matches());

  return (
    <div>
      HELLO WORLD Favorites {params.favoriteId}
      <A href="/app">Back to App</A>
    </div>
  );
};
