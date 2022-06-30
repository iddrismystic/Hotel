import Typography from "../../Funcss/Components/Typography";
import Button from "../../Funcss/Components/Button";
import { useState } from 'react';
import Navbar from "../../components/Navbar";
const Detail = () => {
    
const [currentPic, setcurrentPic] = useState("/img/3.jpg")
    return ( 
        <div className="">
            <Navbar bg="white" color="white"/>
            <div className="mainContent">
                <div className="leftContent">
                    <div className="light padding border">
                        <div className="section padding">
                        <img src={currentPic} className="fit round-edge" alt="" />
                        </div>
                        <div className="section">
                            <div className="row">
                                <div className="col sm-6 md-4 lg-3 padding">
                                    <img src="/img/4.jpg" className="fit round-edge pointer" alt="" onClick={()=>setcurrentPic("/img/4.jpg")} />
                                </div>
                                <div className="col sm-6 md-4 lg-3 padding">
                                    <img src="/img/5.jpg" className="fit round-edge pointer" alt="" onClick={()=>setcurrentPic("/img/5.jpg")}/>
                                </div>
                                <div className="col sm-6 md-4 lg-3 padding">
                                    <img src="/img/6.jpg" className="fit round-edge pointer" alt="" onClick={()=>setcurrentPic("/img/6.jpg")}/>
                                </div>
                                <div className="col sm-6 md-4 lg-3 padding">
                                    <img src="/img/3.jpg" className="fit round-edge pointer" alt="" onClick={()=>setcurrentPic("/img/3.jpg")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightContent">
                  <div className="padding border light section">
                    <Typography text="$400.00" heading="h2"/>
                    <Button text="Book Room" bg="indigo" color="white" funcss="card full-width"/>
                  </div>
                  <div className="padding border light section">
                    <Typography text="Features" heading="h3"/>
                    <ul className="list">
                        <li><i className="text-success fas fa-check"></i> Good environment</li>
                        <li><i className="text-success fas fa-check"></i> Recreational Faciliies</li>
                        <li><i className="text-success fas fa-check"></i> Music Theatre</li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
     );
}
 
export default Detail;