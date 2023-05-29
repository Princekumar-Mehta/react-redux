import "./App.css";
import Home from "./component.js/Home";
import store from "./store";
import { Provider } from "react-redux";
store.subscribe(() => {
  console.log(store.getState());
});
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
