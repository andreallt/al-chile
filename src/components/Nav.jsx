import { Link } from "react-router-dom";

function Nav (){
return(
<nav>
  <Link style={{
          textDecoration: "none",
          color: "white",
          fontFamily: "Red Hat Text, sans-serif",
          fontWeight: 500,
          fontSize: 50,
          }}
         to="/">Al Chile</Link>

  <Link style = {{
          textDecoration: "none",
          color: "white",
          fontFamily: "Nunito, sans-serif",
          fontWeight: 100,
          fontSize: 10,
          fontStyle: "italic",
          }}
          to="/new"> Hot Sauce </Link>
</nav>
)}

export default Nav;