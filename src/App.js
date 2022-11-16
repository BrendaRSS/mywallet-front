import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
     <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        {/* <Route path="/cadastro" element={}/>
        <Route path="/home" element={}/>
        <Route path="/entrada" element={}/>
        <Route path="/saida" element={}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
