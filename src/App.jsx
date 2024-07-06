import "./App.css";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";

function App() {
  return (
    <div className=" mt-4 mx-8">
      <Navbar />
      <Categories />
      <div className="flex p-4 ">
        <Menu />
        <Cart />
      </div>
    </div>
  );
}
export default App;
