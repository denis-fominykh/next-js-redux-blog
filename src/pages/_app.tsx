import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { GlobalStyle } from 'assets/styles/globalStyle';
import { AppHeadTitle } from 'components/AppHeadTitle';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { NavBar } from 'components/NavBar';
import { configureStore } from 'redux/configureStore';

const initialState = {};
const store = configureStore(initialState);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <GlobalStyle />
        <AppHeadTitle title="Next Blog App" />
        <NavBar>
          <Component {...pageProps} />
        </NavBar>
      </Provider>
    </ErrorBoundary>
  );
}

export default MyApp;
