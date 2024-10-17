
import './style/App.css';
import Autentification from './components/pages/Autentification';
import ForgotPassword from './components/pages/ForgetPages/ForgotPassword';
import NewPassword from './components/pages/ForgetPages/NewPassword';
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autentification/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/newPassword" element={<NewPassword/>} />
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
