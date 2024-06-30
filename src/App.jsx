import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <Menu />
      <Cart />
    </div>
  );
}

export default App;
