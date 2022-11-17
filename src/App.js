import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import HomePage from "./pages/HomePage/HomePage";
import AddOutputPage from "./pages/AddOutputPage/AddOutputPage";
import AddEntriesPage from "./pages/AddEntriesPage/AddEntriesPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegistrationPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/entrada" element={<AddEntriesPage />}/>
        <Route path="/saida" element={<AddOutputPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
