import '../styles/globals.scss';
import '../styles/sass/styles.scss';

import { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

// Toastify styles
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function Converter({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider themes={['light', 'darken']} attribute="class">
      <ToastContainer />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default Converter;
