import React , {Fragment} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

const Navbar=({logout,auth:{ isAuthenticated, loading }}) => {
  const authLinks=(
    <div>
    <a onClick={logout} href="#!">
      <button className="btn btn-warning my-2 mx-2"><i className="fas fa-sign-out-alt"></i>Logout</button>
    </a>
    <form style={{display:"inline"}}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i>Search</button>
    </form>
    </div>
  );
  const guestLinks=(
          <div>
            <Link to="/login">
               <button className="btn btn-warning my-2 mx-2"><i className="fas fa-sign-in-alt"></i>Login</button>
            </Link>
           
            <Link to="/signup">
               <button className="btn btn-warning my-2 mx-2">Signup</button>
            </Link>
            </div>
  );
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
          <div className="form-inline my-2 my-lg-0">
            {!loading && ( <Fragment>{ isAuthenticated ? authLinks:guestLinks }</Fragment> )}
          </div>
        </div>
      </nav>
    )
}
Navbar.propTypes={
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth:state.auth
})

export default connect(mapStateToProps,{ logout })(Navbar);