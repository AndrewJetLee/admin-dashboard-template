import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/users" element={<UserList />}/>
            <Route path="/user/:userId" element={<User />}/>
            <Route path="/newUser" element={<NewUser />}/>
            <Route path="/products" element={<ProductList />}/>
            <Route path="/product/:productId" element={<Product />}/>
            <Route path="/newProduct" element={<NewProduct />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
