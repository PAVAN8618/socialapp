import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";


 const PageNotFound = () => {
  useTitle("Page Not Found");

  return (
    <section className="pageNotFound">
      <p>404 / Page Not Found</p>
      <img src='https://img.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788955.jpg?size=626&ext=jpg' alt="Page Not Found" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  )
}
export default PageNotFound;