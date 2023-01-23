import { useEffect, useState } from "react";
import s from "./Slideshow.module.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Data1 from "../Blues/Data1";


function Slideshow({ imgs, filter}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const after = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const before = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  // let dataSearch=Data1.cardData.filter(item=>{
  //   return Object.keys(item).some(key=>
  //     item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
  //     )
  // })
  return (
    <div className={s.imgs}>
      <img className={s.img3} src={imgs[index]} />
      <div>
        <i className={s.icons} onClick={after}>
          <GrNext />
        </i>
        <i className={s.icons1} onClick={before}>
          <GrPrevious />
        </i>
      </div>
      <div>
        <NavLink to='women' className={s.link}>
          <img
            className={s.img} 
            src="https://fabrikastore.am/image/xwoman.png.pagespeed.ic.CsGIHITgwb.webp"
          />
          <h3 className={s.tit}>Կանացի</h3>
        </NavLink>
      </div>
      <div>
        <a href="#" className={s.link1}>
          <img
            className={s.img1}
            src="https://fabrikastore.am/image/xman.png.pagespeed.ic.HvfaCx5Ksb.webp"
          />
          <h3 className={s.tit1}>Տղամարդու</h3>
        </a>
      </div>
      <div>
        <a href="'#" className={s.link2}>
          <img
            className={s.img2}
            src="https://fabrikastore.am/image/xbaby.png.pagespeed.ic.Q-EyOu4hao.webp"
          />
          <h3 className={s.tit2}>Մանկական</h3>
        </a>
      </div>
    
    </div>
  );
}

export default Slideshow;
