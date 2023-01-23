import { RiDeleteBinLine } from "react-icons/ri";

const Delete=({addDelete, item})=>{
    return (
        <div><RiDeleteBinLine onClick={()=>addDelete(item)} /></div>
    )
}
export default Delete