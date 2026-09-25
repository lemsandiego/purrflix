import { AllRoutes } from "./routes/AllRoutes.js";
import { Header, Footer } from "./components";
import './App.css';
import React from "react";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />  
      <AllRoutes searchQuery={searchQuery}/>
      <Footer />
    </div>
  );
}

export default App;