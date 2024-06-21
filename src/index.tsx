import * as Sentry from '@sentry/solid';
import { render } from 'solid-js/web';
import { Route, Router, useBeforeLeave, useLocation } from '@solidjs/router';
import { TodoList } from './todo-list';
import { App } from './app';
import { Login } from './login';
import { User } from './user';
import { Favorite } from './favorite';

Sentry.init({
  dsn: 'https://302f1bd9b9979dd0b0a05a689063c5fd@o447951.ingest.us.sentry.io/4507457399947264',
  integrations: [
    Sentry.solidRouterBrowserTracingIntegration({
      useBeforeLeave,
      useLocation,
    }),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      autoInject: true,
      colorScheme: 'dark',
      useSentryUser: {
        email: 'email',
        name: 'fullName',
      },
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  sendDefaultPii: true,
  debug: true,
});

Sentry.setUser({
  fullName: 'John Doe',
  email: 'jane@example.com',
});

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const SentryRouter = Sentry.withSentryRouterRouting(Router);

const feedback = Sentry.feedbackIntegration({
  // Additional SDK configuration goes in here, for example:
  autoInject: true,
  colorScheme: 'light',
});

const widget = feedback.createWidget();

render(
  () => (
    <SentryRouter>
      <Route path="/" component={Login} />
      <Route path="/app" component={App} />
      <Route path="/user">
        <Route path="/:id" component={User} />
        <Route path="/favorite">
          <Route path="/:id" component={Favorite} />
        </Route>
      </Route>
      <Route path="/todo" component={TodoList} />
    </SentryRouter>
  ),
  root!,
);
