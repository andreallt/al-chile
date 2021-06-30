import { Link } from "react-router-dom";

function Nav (){
return(
<nav>
<Link style = {{
          textDecoration: "none",
          color: "white",
          fontFamily: "Nunito, sans-serif",
          fontWeight: 100,
          fontSize: 10,
          fontStyle: "italic",
          }}
          to="/hot-sauce">
<button> Hot Sauce </button> </Link>

<Link style = {{
          textDecoration: "none",
          color: "white",
          fontFamily: "Nunito, sans-serif",
          fontWeight: 100,
          fontSize: 10,
          fontStyle: "italic",
          }}
          to="/peppers">
<button> Peppers </button> </Link>

</nav>
)}

export default Nav;