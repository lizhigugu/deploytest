import logo from './logo.svg';
import './App.css';
//import "antd/dist/antd.css"; 
import { useState } from "react";

// Container Import
import MainPage from './containers/MainPage';
import TestPage from "./containers/testPage";
import CartList from './components/CartList';

// Bar Component Import
import NavBar from "./components/BarComponent/NavBar";
import {Main, DrawerHeader} from "./components/BarComponent/barPositionHandler";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // set state
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <NavBar open={open} setOpen={setOpen}/>
      <Main open={open}>
        <DrawerHeader>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/cartlist" element={<CartList />} />
        </Routes>
        </DrawerHeader>
      </Main>
    </Router>
  );
}

export default App;
