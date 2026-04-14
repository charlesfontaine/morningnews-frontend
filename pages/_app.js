import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';

// redux imports
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// reducers
import bookmarks from '../reducers/bookmarks.js';

// store configuration
const store = configureStore({
  reducer: {
    bookmarks
  }
})

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
