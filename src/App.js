
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import InformationPage from './components/InformationPage';
import LombokDestinations from './components/LombokDestinations';
import LegalServices from './components/LegalServices';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/information/:section?"
          element={<InformationPage />}
        ></Route>
        <Route
          path="/lombok-tourist-destinations/:destination?"
          element={<LombokDestinations />}
        ></Route>
        <Route
          path="/legal-services"
          element={<LegalServices />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
