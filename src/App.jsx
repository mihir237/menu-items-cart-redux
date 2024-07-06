import "./App.css";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  return (
    <div className=" mt-4 mx-8">
      <Navbar />
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="flex justify-between p-4 ">
        <Menu selectedCategory={selectedCategory} />
        <Cart />
      </div>
    </div>
  );
}
export default App;
