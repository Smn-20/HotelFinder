import React, { Fragment, useEffect } from 'react';
import {connect} from 'react-redux';
import {getHotels} from '../../actions/hotel';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const MostPopular = ({getHotels,hotel:{hotels,loading}}) => {
    useEffect(()=>{
        getHotels();
    },[])
    return (
        <Fragment>
         
         {loading?<body style={{background:'black',height:'600px'}}><Spinner/></body>: <body style={{background:'white'}}>
         <div>
          {hotels.length>0?(
            hotels.map(hotel=>(
                
                <div className="container">
                 <img id='img1' src={URL.createObjectURL(new Blob(hotel.image1.data, {type: "buffer"}))} alt="image"/>
                </div>
            ))
          ): <h4>No hotels found...</h4> }
         </div>
        </body> }
        
          
        </Fragment>
    )
}

MostPopular.propTypes={
  getHotels: PropTypes.func.isRequired,
  hotel: PropTypes.object.isRequired
}
const mapStateToProps= state => ({
    hotel: state.hotel
})
export default connect(mapStateToProps,{ getHotels })(MostPopular);