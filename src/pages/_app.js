import { Provider } from "react-redux";
import { useStore } from "../redux/store";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/GlobalStyles";
import theme from "../styles/theme";
import "../styles/tailwind.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
