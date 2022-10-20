import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import store from "./redux/store";
import Router from "./router";

function App() {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <BrowserRouter>
          <Router />
          <ScrollToTop />
        </BrowserRouter>
      </RecoilRoot>
    </Provider>
  );
}

export default App;
