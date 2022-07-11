import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
const Booking = () => {
    const Form = useRef(null)
    const [data, setdata] = useState([])
    useEffect(()=>{
     if (localStorage.getItem("booking")){
      setdata(
        JSON.parse(
          localStorage.getItem("booking")
        )
      )
      }else{
        setdata([])
      }
    },[])
    const HandleBook = (e)=>{
        e.preventDefault()
        const current = Form.current;
        const name = current["name"].value
        const email = current["email"].value
        const phone = current["phone"].value
        const street = current["street"].value
        const streetNumber = current["street-number"].value
        const city = current["city"].value
        const postCode = current["post-code"].value
        const country = current["country"].value
        const arrival = current["arrive"].value
        const departure = current["depart"].value
        const people = current["people"].value
        const room = current["room"].value
        const bedding = current["bedding"].value
        const comments = current["comments"].value
        const doc ={
            name:name,
            email:email,
            phone:phone,
            street:street,
            streetNumber:streetNumber,
            city:city,
            postCode:postCode,
            country:country,
            arrival:arrival,
            departure:departure,
            people:people,
            room:room,
            bedding:bedding,
            comments:comments

        }
       new Promise(async(resolve , reject)=>{
      data.push(doc)
      localStorage.setItem("booking" , JSON.stringify(await data))
      resolve("/receipt")
       }).then(url=>{window.location.assign(url)})

    }
    return ( 
        <div className="padding">
            <Navbar />
            <form ref={Form} className="width-700-max center border padding margin-top-60">
            <div className="form-group">
    <div className="h1 padding">Booking And contact</div>
    <div className="padding">
      <input type="text" id="name" className="input bordered full-width" placeholder="Full Name" name="name" />
    </div>
    <div className="padding">
      <input type="text" id="email" className="input bordered full-width"  placeholder="Email" name="email"/>
    </div>       
    <div className="padding">
      <input type="tel" id="phone" className="input bordered full-width"  placeholder="Phone" name="phone"/>
    </div>
      <div className="row">
        <div className="col sm-12 md-6 lg-6">
          <div className="padding">
           <input type="text" id="street" className="input bordered full-width"  placeholder="Street" name="street"/>
          </div>          
        </div>
        <div className="col sm-12 md-6 lg-6">
          <div className="padding">
            <input type="number" id="street-number" className="input bordered full-width"  placeholder="Street Number" name="street-number"/>
          </div>          
        </div>
      </div>
      <div className="row">
        <div className="col sm-12 md-4 lg-4">
          <div className="padding">
            <input type="text" id="city" className="input bordered full-width"  placeholder="City" name="city"/>
          </div>         
        </div>
        <div className="col sm-12 md-4 lg-4">
          <div className="padding">
            <input type="text" id="post-code" className="input bordered full-width"  placeholder="Post Code" name="post-code"/>
          </div>         
        </div>
        <div className="col sm-12 md-4 lg-4">
        <div className="padding">
        <input type="text" id="country" className="input bordered full-width"  placeholder="Country" name="country"/>
      </div>   
        </div>
      </div>
     
  </div>

  <div className="form-group">
    <div className="h1 padding">Details</div>
    <div className="row">
    <div className="col sm-12 md-6 lg-6">
      <div className="padding">
        <input type="date" id="arrive" className="input bordered full-width" name="arrive"  placeholder="Arrival Date"/>
      </div>      
    </div>
    <div className="col sm-12 md-6 lg-6">
      <div className="padding">
        <input type="date" id="depart" className="input bordered full-width" name="depart" placeholder="Date Of Departure"/>
      </div>      
    </div>
      </div>
      <div className="row">
    <div className="col sm-12 md-4 lg-4">
      <div className="padding">
        <select className="input bordered full-width" name="people">
          <option value="blank">Number Of People</option>
          <option value="1">1</option>
          <option value="2" selected>2</option>
          <option value="3">3</option>
        </select>
      </div>      
    </div>
    <div className="col sm-12 md-4 lg-4">
    <div className="padding">
      <select className="input bordered full-width" name="room">
        <option value="blank">Room</option>
        <option value="deluxe" selected>With Bathroom</option>
        <option value="Zuri-zimmer">Without Bathroom</option>
      </select>
     </div>     
    </div>

    <div className="col sm-12 md-4 lg-4">
    <div className="padding">
      <select className="input bordered full-width" name="bedding">
        <option value="blank">Bed</option>
        <option value="single-bed">Zweibett</option>
        <option value="double-bed" selected>Doppelbett</option>
      </select>
     </div>     
    </div>
      
     </div>
      <div>
        <br/>
        <div className="padding">
          <textarea name="comments" className="input bordered full-width"  placeholder="Comments" id="comments"></textarea>
          </div>
            <button type="submit" value="Submit" className="button primary text-white card" onClick={HandleBook}>Book Room</button>
      </div>  
</div>
            </form>
        </div>
     );
}
 
export default Booking