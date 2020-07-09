import React, { Fragment } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Home=() => {
    return (
        <Fragment>
     
        <div className="mybody">
          <section className="section-top">
          
          <div className="content rellax">
          <Link to="/">
           <button className="btn btn-success mt-5 ml-3"><i className="fas fa-book mr-1"></i>Learn More</button>
           </Link>
          </div>
         
          </section>

          <section>
           <div className="stream">
           <h1>Find the right Hotel for you!!</h1>
           </div>
          </section>
          
         
         
   
   <section className="section-grid">
          <div className="row">
          
  <div className="col-sm-4">
  
    <div className="card hotelcard my-3">
      <div className="card-body1">
      <i className="fas fa-home fa-3x secondary-text"></i>
      <h2 className="primary-text">Best hotels</h2>
      <hr style={{background:'white',}}/>
      <p>les enfants jouent au ballon avec leurs amis alors que je les ai interdits de jouer 
      sous la pluie.</p>
      </div>
    </div>
   
  </div>
  
  
  <div className="col-sm-4">
  
    <div className="card hotelcard my-3">
      <div className="card-body1">
      <i className="fas fa-home fa-3x secondary-text"></i>
      <h2 className="primary-text">Best hotels</h2>
      <hr style={{background:'white',}}/>
      <p>les enfants jouent au ballon avec leurs amis alors que je les ai interdits de jouer 
      sous la pluie.</p>
      </div>
    </div>
    
  </div>
 
  
  <div className="col-sm-4">
  
    <div className="card hotelcard my-3">
      <div className="card-body1">
      <i className="fas fa-home fa-3x secondary-text"></i>
      <h2 className="primary-text">Best hotels</h2>
      <hr style={{background:'white',}}/>
      <p>les enfants jouent au ballon avec leurs amis alors que je les ai interdits de jouer 
      sous la pluie.</p>
      </div>
    </div>
    
  </div>
  
</div>
</section>       
 
  <footer className="footer">
     <ul>
       <li>copyright <i className="far fa-copyright"></i> 2020 Smn_20</li>
     </ul>
  </footer>

   
          </div>
        
        </Fragment>
    )
}

export default Home;