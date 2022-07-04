import Typography from "../../Funcss/Components/Typography";
import Button from "../../Funcss/Components/Button";
import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Link from "next/link";
const Detail = () => {
    
const [currentPic, setcurrentPic] = useState("/img/3.jpg")
    return ( 
        <div className="padding-top-50 light">
            <Navbar/>
            <div className="row">
                <div className="col sm-12 md-8 lg-8 padding">
                    <div className="card padding border white">
                        <div className="section padding">
                        <img src={currentPic} className="fit pointer hover-opacity-5" alt="" />
                        </div>
                        <div className="section">
                            <div className="row">
                                <div className="col sm-6 md-4 lg-3 padding">
                                    <img src="/img/4.jpg" className="fit pointer hover-opacity-5 pointer" alt="" onClick={()=>setcurrentPic("/img/4.jpg")} />
                                </div>
                                <div className="col sm-6 md-4 lg-3 padding">
                                    <img src="/img/5.jpg" className="fit pointer hover-opacity-5 pointer" alt="" onClick={()=>setcurrentPic("/img/5.jpg")}/>
                                </div>
                                <div className="col sm-6 md-4 lg-3 padding">
                                    <img src="/img/6.jpg" className="fit pointer hover-opacity-5 pointer" alt="" onClick={()=>setcurrentPic("/img/6.jpg")}/>
                                </div>
                                <div className="col sm-6 md-4 lg-3 padding">
                                    <img src="/img/3.jpg" className="fit pointer hover-opacity-5 pointer" alt="" onClick={()=>setcurrentPic("/img/3.jpg")}/>
                                </div>
                            </div>
                        </div>
                        <div className="padding">
                            <Typography text="3 Bed Room Apartment" heading="h2"/>
                            <Typography text="Lorem ipsum dolor sit amet consectetur adipisicing elit
                            . Eos laboriosam corporis qui culpa impedit non sequi quae vero, consequatur
                             libero harum sapiente aut doloremque minus veritatis animi expedita assumen
                             da. Neque?
                             " funcss="section width-500-max"/>
                        </div>
                    </div>
                </div>
                <div className="col sm-12 md-4 lg-4 padding">
                  <div className="padding card border white">
                    <Typography text="$400.00" heading="h2"/>
                  <Link href="/booking">
                    <a>
                    <Button text="Book Room" funcss="text-darkMode full-width border-darkMode"/>
                    </a>
                  </Link>
                  </div>
                  <div className="padding border white section card">
                    <Typography text="Features" heading="h3"/>
                    <ul className="list">
                        <li><i className="text-success fas fa-check"></i> Good environment</li>
                        <li><i className="text-success fas fa-check"></i> Recreational Faciliies</li>
                        <li><i className="text-success fas fa-check"></i> Music Theatre</li>
                        <li><i className="text-success fas fa-check"></i> 2 Bed Rooms</li>
                        <li><i className="text-success fas fa-check"></i> Kitchen</li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
     );
}
 
export default Detail;