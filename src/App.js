import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import Navbar from "./Components/Navbar/Navbar";
import ItemDetails from "./Components/ItemDetails/ItemDetails";

import AddItem from "./Components/AddItem/AddItem";
import LogIn from "./Components/Auth/LogIn/LogIn";
import SignUp from "./Components/Auth/SignUp/SignUp";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import ManageItems from "./Components/ManageItems/ManageItems";
import MyItems from "./Components/MyItems/MyItems";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Navbar />
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route
          path="/itemdetails/:id"
          element={
            <RequireAuth>
              <ItemDetails />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/manageitems" element={<ManageItems />} />
        <Route path="/myitems" element={<MyItems />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
