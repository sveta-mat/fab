import { NavLink } from "react-router-dom";
import s from "./Like.module.css";
import { FaHome } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbShoppingCartPlus } from "react-icons/tb";

const Like = ({ favourite, addDelete }) => {
  return (
    <div>
     <div className="home1">
        <NavLink to="/" className="homeIcon">
          <FaHome className="icon12" />
        </NavLink>
      </div>
      <h1 className={s.like}>Նախընտրելիներ</h1>

      <div className={s.flex}>
        {favourite.map((item) => {
          console.log(favourite);
          return (
            <div className={s.flexChild}>
              <div className={s.delete}>
                <RiDeleteBinLine onClick={() => addDelete(item.id)} />
              </div>

              <a href="#" key={item.id}>
                <img className={s.img} src={item.image[0].src} />
                <span className={s.title}>{item.title}</span>
                <span className={s.prise}>{item.prise}դր․</span>

                <div>
                  <button className={s.button1}>
                    <i className={s.icons}>
                      <TbShoppingCartPlus />
                    </i>
                    Ավելացնել
                  </button>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Like;
