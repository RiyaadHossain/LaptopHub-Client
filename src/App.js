import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import Navbar from "./Components/Navbar/Navbar";
import ItemDetails from "./Components/ItemDetails/ItemDetails";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import AddItem from "./Components/AddItem/AddItem";
import LogIn from "./Components/Auth/LogIn/LogIn";
import SignUp from "./Components/Auth/SignUp/SignUp";

function App() {
  return (
    <div>
      <Navbar />
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
