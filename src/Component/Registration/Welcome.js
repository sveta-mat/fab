import { FcLock } from "react-icons/fc";
import s from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div>
      <FcLock className={s.iconLock} />
      <h1 className={s.lockTitle}>Անձնական տվյալներ</h1>
      <a href="#" className={s.title1}>Անձնական տվյալները</a> <a href="#" className={s.title2}>Գաղտնաբառը</a>
      <a href="#" className={s.title3}>Իմ հասցեն</a> <a href="#" className={s.title4}>Նախընրելիներ</a>
    </div>
  );
};

export default Welcome;
