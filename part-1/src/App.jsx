import { Provider } from "react-redux";
import HookCakeContainer from "./components/HookCakeContainer";
import store from "./redux/store";
import HookIceCreamContainer from "./components/HookIceCreamContainer";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
        <HookCakeContainer />
        <HookIceCreamContainer />
        </div>
      </Provider>
    </>
  );
}

export default App;
