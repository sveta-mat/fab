import logo from "./logo.svg";
import "./App.css";
import Women from "./Component/Shoping/Women";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./Component/Registration/Registration";
import Slideshow from "./Component/Slideshow/Slideshow";
import Like from "./Component/Like/Like";
import Search from "./Component/Search/Search";
import Blues from "./Component/Blues/Blues";
import Header from "./Component/Header/Header";
import Menu from "./Component/Menu/Menu";
import data from "../src/Component/Blues/Data1";
import Cart from "./Component/Cart/Cart";
import { AiOutlineMenu } from "react-icons/ai";
import FullBlues from "./Component/Blues/FullBlues";
import { Input } from "rsuite";

function App() {
  const [menu, setMenu] = useState(false);
  const [initialData, setInitialData] = useState(
    JSON.parse(localStorage.getItem("data"))
  );
  const [favourite, setFavourite] = useState([]);
  const [cart, setCart] = useState([]);
  const [CART, setCART] = useState([]);
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");

  
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value, 'ssssss');
  };

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const addCart = (data) => {
    const newCarts = cart.find((item) => item.id === data.id);
    if (!newCarts) {
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  };
  const addDeleteCart = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const addFav = (data) => {
    const newFav = favourite.find((item) => item.id === data.id);

    if (!newFav) {
      setFavourite([...favourite, { ...data, quantity: 1 }]);
    }

    // setActive(!active)
  };

  const addDelete = (id) => {
    let newArray = favourite.filter((item) => {
      return item.id !== id;
    });
    setFavourite(newArray);

    console.log(newArray);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar">
          <p className="titleFa">F A B R I K A</p>
          <div>
            <AiOutlineMenu
              className="burger-menu"
              onClick={() => setMenu(!menu)}
            />
          </div>
          <Search handleSearch={handleSearch} search={search}/>
          <Header />
        </nav>

        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Slideshow
                  imgs={[
                    "https://fabrikastore.am/image/cache/catalog/xGroup,P202-1670x380.png.pagespeed.ic._8rY-MEqTb.webp",
                    "https://fabrikastore.am/image/cache/catalog/xGroup,P203,P20,281,29-1670x380.png.pagespeed.ic._x6Wv4uE4q.webpx",
                    "https://fabrikastore.am/image/cache/catalog/xGroup,P203-1670x380.png.pagespeed.ic.ANuRRUA6X2.webp",
                  ]}
                />
              }
            />
            <Route path="/registration" element={<Registration />} />
            <Route path="/women" element={<Women />} />
            <Route
              path="/like"
              element={<Like favourite={favourite} addDelete={addDelete} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  addDeleteCart={addDeleteCart}
                  CART={CART}
                  setCART={setCART}
                />
              }
            />
            <Route
              path="/blues"
              element={
                <Blues
                search={search}
                  initialData={initialData}
                  active={active}
                  setInitialData={setInitialData}
                  addFav={addFav}
                  addCart={addCart}
                />
              }
            />
            <Route
              path="/blues/:id"
              element={
                <FullBlues
                  addCart={addCart}
                  initialData={initialData}
                  setInitialData={setInitialData}
                  setCart={setCart}
                  cart={cart}
                  CART={CART}
                  setCART={setCART}
                />
              }
            />
          </Routes>
        </div>

        <Menu menu={menu} setMenu={setMenu} />
      </div>
    </BrowserRouter>
  );
}

export default App;
