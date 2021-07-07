import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink className="button" activeClassName="active" to="/hot-sauce">
        Hot Sauce
      </NavLink>

      <NavLink className="button" activeClassName="active" to="/peppers">
        Peppers
      </NavLink>
    </nav>
  );
}

export default Nav;
