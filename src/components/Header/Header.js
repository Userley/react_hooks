import React from 'react';
import '../../styles/Banner.css';
import logo from '../../images/logo-batman.png';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <React.Fragment>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-warning shadow-sm">
        <img className="my-0 mr-md-auto" src={logo} />
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/useState">
            UseState
          </Link>
          <Link className="p-2 text-dark" to="/UseEffect">
            UseEffect
          </Link>
          <Link className="p-2 text-dark" to="/UseContext">
            UseContext
          </Link>
          <Link className="p-2 text-dark" to="/UseReducer">
            UseReducer
          </Link>
          <Link className="p-2 text-dark" to="/UseCallBack">
            UseCallBack
          </Link>
          <Link className="p-2 text-dark" to="/UseMemoHook">
            UseMemo
          </Link>
          <Link className="p-2 text-dark" to="/UseRefHooks">
            UseRef
          </Link>
          <Link className="p-2 text-dark" to="/CustomHooks">
            Custom Hooks
          </Link>
        </nav>
      </div>
      <header className="masthead"></header>
    </React.Fragment>
  );
};

export default Header;
