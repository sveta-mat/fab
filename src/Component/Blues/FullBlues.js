import { useParams } from "react-router-dom";
import "./FullBlues.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbMinus, TbPlus } from "react-icons/tb";
import { TbShoppingCartPlus } from "react-icons/tb";

const FullBlues = ({ cart, CART,addCart, setCART, initialData, setInitialData }) => {
  const handleClick = (index) => {
   
    //  {console.log(result.image, 'ddddd');}
    const wordSlider = result.image[index];
   
    setWordData(wordSlider);
   
  };
  const params = useParams();
  let result = initialData.find((item) => {
    return item.id === params.id;
  });

  const [wordData, setWordData] = useState(result.image[0]);
console.log(result.image[0], '456123');
  return (
    <div>
      <div className="home1">
        <NavLink to="/" className="homeIcon">
          <FaHome className="icon12" />
        </NavLink>
      </div>
      <h1 className="mainTitle">{result.title}</h1>
      <h5 className="colorTitle ">Գույն</h5>
      <div className="containe">
        {result.color.map((item, index) => (
          <div className="color">
            <span className="colourItem">{item.col}</span>
            <img className="colourImg" src={item.img} />
          </div>
        ))}
      </div>
      <div className="wordData">
        <img src={wordData.src} />
      </div>
      <div className="fullBlues">
        {result.image.map(
          (item, i) => (
            console.log(item.src, "kkkk123"),
            (
              <img
                className="imgClike"
                onClick={() => handleClick(i)}
                src={item.src}
              />
            )
          )
        )}
      </div>
      <div className="productRight">
        
        {CART?.map((cartItem, cartindex) => {
          return (
            <div className="productBlock">
              {console.log(cartItem.prise, 'ddddd')}
              <span className="pricePro">{cartItem.prise}դր.</span>
              <div className="count">
                
                <span className='p'> {cartItem.quantity} </span>
                <TbPlus className="plus1"
                  onClick={() => {
                    const newCart = CART.map((item, index) => {
                      return cartindex === index
                        ? { quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(newCart);
                  }}
                />
                <TbMinus
                  className='minus1'
                  onClick={() => {
                    const newCart = CART.map((item, index) => {
                      return cartindex === index
                        ? {
                            
                            quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                          }
                        : item;
                    });
                    setCART(newCart);
                  }}
                />
              </div>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FullBlues;

