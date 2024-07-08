

import './App.css';
import BlogPage from './MyComponents/BlogPage';
import Blog_Page_Detail from './MyComponents/Blog_Page_Detail';
import Homepage from './MyComponents/Homepage';
import Navbaar from './MyComponents/Navbaar';
import Team from './MyComponents/Team';
import AboutUs from './MyComponents/AboutUs';
import CheckOut from './MyComponents/CheckOut';
import ContactUs from './MyComponents/ContactUs';
import Cart from './MyComponents/Cart';
// BrowseRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './MyComponents/Shop';



function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbaar />}>
          <Route index element={<Homepage />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="team" element={<Team />} />
          <Route path="blogpage" element={<BlogPage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="readmore" element={<Blog_Page_Detail />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="team" element={<Team />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="cartdetail" element={<Cart />} />
          <Route path='checkout' element={<CheckOut />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
