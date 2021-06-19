import React from "react";
import { Link} from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="links">
          <Link to="">contact</Link>
          <Link to="">login</Link>
          <Link to="">showdata</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
