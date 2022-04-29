import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import Navbar from "./Components/Navbar/Navbar";
import InventoryDetails from "./Components/InvetoryDetails/InvetoryDetails";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import AddItem from "./Components/AddItem/AddItem";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <InventoryDetails />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
