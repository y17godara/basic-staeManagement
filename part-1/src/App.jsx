import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    </>
  );
}

export default App;
