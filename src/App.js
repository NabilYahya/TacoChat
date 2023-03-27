// import { Route, Switch ,useHistory } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/home";
import { Chat } from "./components/Chat";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
