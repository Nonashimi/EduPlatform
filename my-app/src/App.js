import {Provider} from "react-redux"
import './style/App.css';
import AppRouter from './AppRouter/AppRouter';
import { store } from "./toolkitRedux";
function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter/>
      </div>
    </Provider>
  );
}

export default App;
 