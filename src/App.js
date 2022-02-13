import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddExpense from "./Pages/AddExpense";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div><Header /></div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add-expense" element={<AddExpense />}/>
        </Routes>
        <div><Footer /></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
