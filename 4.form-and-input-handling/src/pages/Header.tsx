import { Link } from "react-router";

const Header = () => {
  return(<>
      <ul>
        <li> <Link to="/">Uncontrlolled Component/input</Link> </li>
        <li> <Link to="/form-page-controlled">controlled Component/input</Link> </li>
      </ul>
  </>)

}
export default Header;
