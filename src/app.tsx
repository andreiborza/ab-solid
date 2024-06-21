import { A } from "@solidjs/router";

export const App = () => {
  return (
    <div>
      <A href="/user/1">User 1</A>
      <br />
      <A href="/user/2">User 2</A>
    </div>
  );
}
