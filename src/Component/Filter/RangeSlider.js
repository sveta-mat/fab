import { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import data from "../Blues/Data1";
import { TbShoppingCartPlus } from "react-icons/tb";
import "./Filter.css";

const RangeSlider = ({ setData, initialData }) => {
  const [min, setMin] = useState(990);
  const [max, setMax] = useState(12900);
  const [list, setList] = useState(initialData);

  const handlePrice = ([min, max]) => {
    const newData = initialData.filter((item) => {
    
      return item.prise >= min && item.prise <= max
    
    });
    setData(newData);
    console.log(newData, 'asdasdasd');

    setList(newData);
    setMin(min);
    setMax(max);
  };

  return (
    <div>
      <div className="values-wrapper">
        <input className="input" value={min} />
        <span className="g">-</span>
        <input className="input1" value={max} />
        <span className="pr">դր․</span>
      </div>
      <div className="container">
        <ReactSlider
          defaultValue={[min, max]}
          className="slider"
          trackClassName="tracker"
          min={990}
          max={12900}
          minDistance={50}
          step={50}
          withTracks={true}
          pearling={true}
          onChange={handlePrice}
          renderThumb={(props) => {
            return <div {...props} className="thumb"></div>;
          }}
          renderTrack={(props) => {
            return <div {...props} className="track"></div>;
          }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
