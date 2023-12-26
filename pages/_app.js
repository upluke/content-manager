import "bulma/css/bulma.min.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log(Component);
  return <Component {...pageProps} />;
}
