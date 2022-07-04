import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
const Receipt = () => {
const [Data, setData] = useState(null)
useEffect(()=>{
  if(Data  === null){
    const docs = JSON.parse(localStorage.getItem("booking"))
    setData(docs)
  }
})

  if(Data != null){ return ( 
        <div>
            <Navbar />
         <div className="page">
	<h1 className="f">RECEIPT</h1>
	<img className='full-width' src="/img/1.jpg"  />

	<div className="padding-5 clear-both">
		<div className="section light padding-5 round-edge">Full Name: {Data.name}</div>
		<div className="section light padding-5 round-edge">Email: {Data.email}</div>
		<div className="section light padding-5 round-edge">Phone: {Data.phone}</div>

	</div>
    <div className="row">
        <div className="padding-5 col sm-12 md-6 lg-6">
          <div className="section light padding-5 round-edge">
          Street: {Data.street}
          </div>          
        </div>
        <div className="padding-5 col sm-12 md-6 lg-6">
          <div className="section light padding-5 round-edge">
          Street No: {Data.streetNumber}
          </div>          
        </div>
      </div>
      <div className="row">
        <div className="padding-5 col sm-12 md-4 lg-4">
          <div className="section light padding-5 round-edge">
           City: {Data.city}
          </div>         
        </div>
        <div className="padding-5 col sm-12 md-4 lg-4">
          <div className="section light padding-5 round-edge">
          Post Code: {Data.postCode}
          </div>         
        </div>
        <div className="padding-5 col sm-12 md-4 lg-4">
        <div className="section light padding-5 round-edge">
      Country: {Data.country}
      </div>   
        </div>
      </div>
      <div className="row">
        <div className="padding-5 col sm-12 md-6 lg-6">
          <div className="section light padding-5 round-edge">
           Arrival: {Data.arrival}
          </div>         
        </div>
        <div className="padding-5 col sm-12 md-6 lg-6">
          <div className="section light padding-5 round-edge">
          Departure: {Data.departure}
          </div>         
        </div>
 
      </div>
      <div className="row">
        <div className="padding-5 col sm-12 md-4 lg-4">
          <div className="section light padding-5 round-edge">
           No of people: {Data.people}
          </div>         
        </div>
        <div className="padding-5 col sm-12 md-4 lg-4">
          <div className="section light padding-5 round-edge">
          Room: {Data.room}
          </div>         
        </div>
        <div className="padding-5 col sm-12 md-4 lg-4">
        <div className="section light padding-5 round-edge">
      Bed: {Data.bedding}
      </div>   
        </div>
      </div>

	<div>
        <div className=""><h1>Thank You</h1></div>
        <span className="separator"></span>
        <div className="right">
					<p>Payment is due within 15 days.</p>
		</div>
    </div>
</div>
        </div>
     );
}else{
    return "No Data"
}
}
 
export default Receipt;