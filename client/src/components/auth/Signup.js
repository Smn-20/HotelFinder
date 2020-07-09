import React,{Fragment,useState} from 'react';
import { connect } from 'react-redux';
import './auth.css';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Signup = ({ setAlert, register, isAuthenticated }) => {
  const [formInfo,setFormInfo]=useState({
    names:'',
    email:'',
    phone:'',
    password:'',
    password2:''
  });

  const { names, email, phone, password, password2}= formInfo;

  const onChange= e => setFormInfo({...formInfo, [e.target.name]:e.target.value});
  const onSubmit= async e => {
    e.preventDefault();
    if(password!==password2){
      setAlert('Password do not match','danger');
    }else{
     register({ names, email, phone, password});
    }
  }
  //Redirect if registered
  if(isAuthenticated){
    return <Redirect to="/" />
  }
    return (
      <Fragment>
        <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card-signup">
            <div className="card-header">
              <h3>SignUp</h3>
            </div>
            <div className="card-body">
              <form onSubmit={e=>onSubmit(e)}>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                  <input type="text" className="form-control" name="names" placeholder="first and last names" value={names} onChange={e => onChange(e)}/>
              </div>

              <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-mail-bulk"></i></span>
                  </div>
                  <input type="email" className="form-control" name="email"  placeholder="email" value={email} onChange={e => onChange(e)}/>
              </div>

              <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-phone"></i></span>
                  </div>
                  <input type="text" className="form-control" name="phone" placeholder="enter your phone number" value={phone} onChange={e => onChange(e)}/>
              </div>

              <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" className="form-control" name="password" placeholder="password" value={password} onChange={e => onChange(e)}/>
              </div>

              <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" className="form-control" name="password2" placeholder="Confirm your password" value={password2} onChange={e => onChange(e)}/>
              </div>

              <div className="row align-items-center remember">
                  <input type="checkbox"/>Remember Me
              </div>

              <div className="form-group">
                  <input type="submit" value="Signup" className="btn float-right login_btn"/>
              </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Already have an account?<Link to="/login">Login</Link>
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
Signup.propTypes={
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated:state.auth.isAuthenticated
})

export default connect( mapStateToProps, { setAlert, register } )(Signup);

