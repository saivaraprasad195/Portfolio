import React, { useState } from "react";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";

const App = () => {
  const [hide, setHide] = useState(false);
  return hide ? <Header /> : <Welcome onComplete={() => setHide(true)} />;
};

export default App;
