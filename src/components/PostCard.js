// import { doc, deleteDoc } from "firebase/firestore";
// import { auth, db } from "../firebase/config";

 const PostCard = ({post, toggle, setToggle}) => {
    const {id, title, description, author} = post;
    

  

  return (
    <div className="card">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        
    </div>
  )
}
export default PostCard;