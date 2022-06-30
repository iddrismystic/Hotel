import { useEffect, useState } from "react";
import Icon from "../Funcss/Components/Icon";
import Link from "next/link"
const Navbar = ({bg , color}) => {
    const [sidebar, setsidebar] = useState(false)
    useEffect(()=>{
        const sideBar = document.querySelector(".sideBar");
        window.addEventListener("click" ,(e)=>{
            if(e.target === sideBar){
               setsidebar(false)
            }
        })
    })
return ( 
<div className={"navContainer black"}>
<div className="navigation-bar " >
<div className="h2 text-white">Hotel Bay</div>
<div className="link-wrapper">
<Link href="/" ><a className="text-white">Home</a></Link>
<Link href="/" ><a className="text-white">About</a></Link>

<Link href="/hotels" ><a className="text-white">
<Icon icon="far fa-paper-plane" /> Our Hotels
</a></Link>
</div>
<div className="sidebar-trigger">
    <i className="fas fa-bars text-white size-3" onClick={()=>setsidebar(!sidebar)}></i>
</div>

</div>
{/* sidebar */}
<div className="sideBar" style={{marginLeft: `${sidebar ? "0px" : "-100%"}`}}>
<div className="sideBarContent width-300-max">
<div className="text-right padding">
         <span className="close-sidebar text-xx-large text-white pointer" onClick={()=>setsidebar(!sidebar)}>
             &times;
         </span>
     </div>
     <div className="padding">
         <div className="text-center padding"><Link href="/" ><a className="link text-white">Home</a></Link></div>
         <div className="text-center padding"><Link href="/hotels" ><a className="link text-white">Our Hotels</a></Link></div>
         <div className="text-center padding"><Link href="/" ><a className="link text-white">About</a></Link></div>
     </div>
</div>
     </div>
</div>
);
}

export default Navbar;