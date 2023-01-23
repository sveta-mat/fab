import { useState } from "react";


const Counter=( {})=>{
  const [counter, setCounter] = useState(1);

  const plus = () => {
      setCounter(counter + 1);
      console.log(plus, '444');
    };
  
    const minus = () => {
      setCounter(counter - 1);
      console.log(minus, '5555');
    };
   

    return (
        <div className="shotchik">
        <button className="minus" onClick={minus}>
          -
        </button>
        <input className="input-counter" value={counter} />
        <button className="plus" onClick={plus}>
          +
        </button>
      </div>
    )
}

export default Counter