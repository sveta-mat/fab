import  "./Filter.css";
import { BsSliders } from "react-icons/bs";
import RangeSlider from "./RangeSlider";




const Filter = ({setInitialData, initialData}) => {
 
  return (
    <div>
      <div>
        <i className='icon1'>
          <BsSliders /> <span className='filtertit'>Ֆիլտր</span>
        </i>
        <span className='prise1'>Գին</span>
      </div>
   

      
        <div>
          <RangeSlider setData={setInitialData} initialData={initialData}/>
          
        </div>
        <div>
          <button className="chexk" type="checkbox">
            <span>Միայն զեղչվածները</span>
          </button>
        </div>
     
    </div>
  );
};

export default Filter;


