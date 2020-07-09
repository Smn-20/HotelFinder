import React,{Fragment,useState} from 'react';
import './auth.css';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({login,isAuthenticated}) => {
  const[formInfo,setFormInfo]=useState({
    email:'',
    password:''
  })
  const { email, password } = formInfo;
  const onChange= e => setFormInfo({...formInfo, [e.target.name]:e.target.value});
  const onSubmit= async e => {
    e.preventDefault();
    login(email,password);
  }
  //Redirect if logged in
  if(isAuthenticated){
    return <Redirect to="/" />
  }
    return (
      <Fragment>
        <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card-log">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={ e => onSubmit(e)}>
              <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="email" className="form-control" name="email" placeholder="email" value={email} onChange={e=>onChange(e)}/>
              </div>

             

              <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" className="form-control" name="password" placeholder="password"  value={password} onChange={e=>onChange(e)}/>
              </div>


              <div className="row align-items-center remember">
                  <input type="checkbox"/>Remember Me
              </div>

              <div className="form-group">
                  <input type="submit" value="Login" className="btn float-right login_btn"/>
              </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
              Don't have an account?<Link to="/signup">Signup</Link>
              </div>
              <div className="d-flex justify-content-center">
                <a href="/">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    )
}

Login.propTypes={
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps= state => ({
  isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{login})(Login);

