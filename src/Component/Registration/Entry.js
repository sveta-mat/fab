import s from "./Entry.module.css";
import { useState } from "react";

const Entry = ({Login, error}) => {

  const [details, setDatails]= useState({email: "", password: ""})
  
  const submitHandler=e=>{
    e.preventDefault();
    Login(details)
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div>
        <h1 className={s.entry}>Մուտք</h1>
      </div>
      <div>
        <h3 className={s.email}>Էլ․ հասցե</h3>
        <input className={s.input} type="email" value={details.email} onChange={(e)=>setDatails({...details, email: e.target.value})}/>
      </div>
      <div>
        <h3 className={s.password}>Գաղտնաբառ</h3>
        <input className={s.input1} type="password"value={details.password} onChange={(e)=>setDatails({...details, password: e.target.value})} />
      </div>
      <div>
        <a className={s.a} href="#">
          Մոռացել ե՞ք գաղտնաբառ
        </a>
      </div>
      <div>
        <button className={s.button}>Մուտք</button>
        <a className={s.href} href="#">
          Գրանցում
        </a>
      </div>
    </form>
  );
};

export default Entry;
