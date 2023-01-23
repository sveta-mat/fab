import s from "./Shoping.module.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsSliders } from "react-icons/bs";
import Filter from "../Filter/Filter";

const Women = () => {
  return (
    <div>
      <div className="home1">
        <NavLink to="/" className="homeIcon">
          <FaHome className="icon12" />
        </NavLink>
      </div>

      <div>
        <h1 className={s.title}>Կանացի</h1>
        <Filter />
      </div>
      <div>
        <img
          className={s.img}
          src="https://fabrikastore.am/image/cache/catalog/xGroup,P202-1202x282.png.pagespeed.ic.Qqvw2TO718.webp"
        />
      </div>
      <NavLink className={s.t} to="/blues">
        <span className={s.t1}>Բլուզ</span>
        <span className={s.nam}>4</span>
      </NavLink>
      <a className={s.ti} href="#">
        <span className={s.t2}>Տաբատ</span>
        <span className={s.nam2}>4</span>
      </a>
      <a className={s.ti1} href="#">
        <span className={s.t3}>Գիշերանոց</span>
        <span className={s.nam3}>4</span>
      </a>
      <a className={s.ti2} href="#">
        <span className={s.t4}>տոպ</span>
        <span className={s.nam4}>4</span>
      </a>
    </div>
  );
};

export default Women;
