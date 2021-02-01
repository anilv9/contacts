import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    // {/* <h1 style={{color:'red', fontSize:'40px'}}>{branding}</h1> */}
    // {/* <h1 style={headingStyle}>{branding}</h1> */}
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="av-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="av-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="av-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  branding: "My App",
};
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
// const headingStyle = {
//   color: 'blue',
//   fontSize: '40px'
// }

export default Header;
