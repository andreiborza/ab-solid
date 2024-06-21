import * as Sentry from '@sentry/solid';
import { ErrorBoundary, render } from 'solid-js/web';
import { A, Router, Route } from '@solidjs/router';

Sentry.init({
  dsn: 'https://302f1bd9b9979dd0b0a05a689063c5fd@o447951.ingest.us.sentry.io/4507457399947264',
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  release: '1.5.0',
  debug: true,
});

const SentryErrorBoundary = Sentry.withSentryErrorBoundary(ErrorBoundary);

const ErrorBoundaryExample = () => {
  return (
    <SentryErrorBoundary
      fallback={(err, reset) => {
        console.log('error happened', err);
        return (
          <div>
            Oops an error happened
            <code>{err.message}</code>
            <br />
            <button onClick={reset}>Reset</button>
          </div>
        );
      }}>
      <NonExistingComponent />
    </SentryErrorBoundary>
  );
};

render(
  () => (
    <Router>
      <Route
        path="/"
        component={() => (
          <div>
            Home
            <br />
            <A href="/error-boundary">Go to error</A>
            <br />
            <button
              onClick={() => {
                throw new Error('Test error from solid');
              }}>
              Throw error
            </button>
          </div>
        )}
      />
      <Route path="/error-boundary" component={ErrorBoundaryExample} />
    </Router>
  ),
  document.getElementById('root')!,
);
