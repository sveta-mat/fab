import s from "./Blues.css";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useState, useRef } from "react";
import Filter from "../Filter/Filter";
import data from "./Data1";
import Heart from "react-heart";
import Counter from "./Counter";

const Blues = ({
  setInitialData,
  initialData,
  addFav,
  addCart,
  active,
  search,
}) => {
  const quantityPageRef = useRef(15);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [endPosition, setEndPosition] = useState(15);

  const handlePagination = (index) => {
    setEndPosition((index + 1) * quantityPageRef.current);
    setCurrentIndex(
      (index + 1) * quantityPageRef.current - quantityPageRef.current
    );
  };

  const handlePrev = () => {
    if (currentIndex) {
      setCurrentIndex(currentIndex - quantityPageRef.current);
      setEndPosition(endPosition - quantityPageRef.current);
    }
  };

  const handleNext = () => {
    if (endPosition < data.length) {
      setCurrentIndex(currentIndex + quantityPageRef.current);
      setEndPosition(endPosition + quantityPageRef.current);
    }
  };

  return (
    <div>
      <div className="home1">
        <NavLink to="/" className="homeIcon">
          <FaHome className="icon12" />
        </NavLink>
      </div>
      <div>
        <h1 className="filter-blues">Բլուզ</h1>
        <Filter setInitialData={setInitialData} initialData={initialData} />
      </div>

      <div className="flex">
        {initialData
          .filter((item) => {
            if (search == "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
          })
          .slice(currentIndex, endPosition)
          .map((item, index) => {
            return (
              <div className="flexChild">
                <div className="headerha">
                  <span className="heart">Նախընտելի</span>
                  <Heart  isActive={active} onClick={() => addFav(item)} />
                </div>
                <img className="img" src={item.image[0].src} />

                <span className="title">{item.title}</span>
                <span className="prise">{item.prise}դր․</span>
                <Counter />
                <div>
                  <NavLink to={`/blues/${item.id}`}>
                    {console.log(item.id, "lll")}
                    <button className="button-1" onClick={() => addCart(item)}>
                      <i className="icons">
                        <TbShoppingCartPlus />
                      </i>
                      Գնել հիմա
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>

      <div className="pogination-catalog">
        <div className="catalog">
          <ul className="pogination">
            <li className="btnPaginate1" onClick={handlePrev}>
              <span>Նախորդ</span>
            </li>
            {Array(Math.ceil(data.length / quantityPageRef.current))
              .fill(null)
              .map((_, index) => (
                <li
                  className={`btnPaginate2 ${
                    currentIndex === 0 && index === currentIndex
                      ? "active"
                      : index === currentIndex / quantityPageRef.current &&
                        "active"
                  }`}
                  onClick={() => handlePagination(index)}
                >
                  {index + 1}
                </li>
              ))}
            <li className="btnPaginate3" onClick={handleNext}>
              <span>Հաջորդ</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blues;
