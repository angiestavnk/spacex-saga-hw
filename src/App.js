import "./App.scss";
import Header from "./components/Header/Header";
import configStore from "./store/redux-store";
import { Provider } from "react-redux";
import Content from "./components/Content/Content";

const store = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Content />
    </Provider>
  );
};

export default App;
