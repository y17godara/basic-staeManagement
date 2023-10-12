import { Provider } from "react-redux";
import HookCakeContainer from "./components/HookCakeContainer";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
        <HookCakeContainer />
        </div>
      </Provider>
    </>
  );
}

export default App;
