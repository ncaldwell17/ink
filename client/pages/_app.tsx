import type { AppProps } from 'next/app';
import '../styles/globals.css'; // adjust the path to your styles.css as necessary

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
