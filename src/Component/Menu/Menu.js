import "./Menu.css";
import {AiOutlineClose} from 'react-icons/ai'

const Menu = ({menu, setMenu}) => {
  return (
    <div className={menu ? 'menu active': 'menu'}>
        
      <div className="blur" />
      <div className="menu-content">
        <span className="menuTitle">Բաժիններ</span>
        <i className="iconmenu"><AiOutlineClose onClick={()=>setMenu(false)}/></i>
        <ul ><a href="#">Կանացի</a></ul>
        <ul><a href="#">Տղամարդու</a></ul>
        <ul><a href="#">Մանկական</a></ul>
        
      </div>
    </div>
  );
};

export default Menu;
