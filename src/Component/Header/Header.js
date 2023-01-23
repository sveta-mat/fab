import s from "./Header.module.css";
import { BsHeart } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { NavLink, useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { Navbar } from "rsuite";

function Header(props) {
  return (
    <div className={s.header}>
      <div className={s.like1}>
        <NavLink className={s.like} to="like">
          <div className={s.iconBox}>
            <BsHeart className={s.icon} />
          </div>

          <div className={s.name}>ՆԱԽԸՆՏՐԵԼԻՆԵՐ</div>
        </NavLink>
      </div>
      <div className={s.regist1}>
        <NavLink className={s.regist} to="registration">
          <div className={s.iconBox1}>
            <BiUser className={s.icon1} />
          </div>
          <div className={s.title}>ՄՈՒՏՔ </div>
        </NavLink>
      </div>

      <div className={s.cart}>
        <NavLink to="cart" className={s.box}>
          <div className={s.cartBox}> <RiShoppingCart2Line className={s.ic} /></div>
         
          <div className={s.ti}>ԶԱՄԲՅՈՒՂ</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
