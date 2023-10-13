import { Provider } from "react-redux";
import HookCakeContainer from "./components/HookCakeContainer";
import store from "./redux/store";
import HookIceCreamContainer from "./components/HookIceCreamContainer";
import AdvHookCockContainer from "./components/AdvHookCockContainer";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
        <HookCakeContainer />
        <HookIceCreamContainer />
        {/* Adv */}
        <AdvHookCockContainer />
        </div>
      </Provider>
    </>
  );
}

export default App;
