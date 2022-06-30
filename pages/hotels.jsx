import Head from 'next/head'
import Image from 'next/image'
import Grid from './../Funcss/Components/Grid';
import Col from './../Funcss/Components/Col';
import Input from './../Funcss/Components/Input';
import IconicInput from './../Funcss/Components/IconicInput';
import Icon from './../Funcss/Components/Icon';
import Div from './../Funcss/Components/Div';
import Typography from './../Funcss/Components/Typography';
import Navbar from './../components/Navbar';
import Link from 'next/link';
const Hotels = () => {
  const data = [
    {
      name:"Private Concierge",
      loc:"Ghana",
      about:`Helicopter transfers, Michelin star chefs
      and 24/7 service staff can be arranged.`,
      img:"/img/3.jpg"
    },
    {
      name:"Private Concierge",
      loc:"Ghana",
      about:`Helicopter transfers, Michelin star chefs
      and 24/7 service staff can be arranged.`,
      img:"/img/4.jpg"
    },
    {
      name:"Private Concierge",
      loc:"Germany",
      about:`Helicopter transfers, Michelin star chefs
      and 24/7 service staff can be arranged.`,
      img:"/img/5.jpg"
    },
    {
      name:"Private Concierge",
      loc:"Germany",
      about:`Helicopter transfers, Michelin star chefs
      and 24/7 service staff can be arranged.`,
      img:"/img/6.jpg"
    },
    {
      name:"Private Concierge",
      loc:"Germany",
      about:`Helicopter transfers, Michelin star chefs
      and 24/7 service staff can be arranged.`,
      img:"/img/7.jpg"
    },
    {
      name:"Private Concierge",
      loc:"Germany",
      about:`Helicopter transfers, Michelin star chefs
      and 24/7 service staff can be arranged.`,
      img:"/img/8.jpg"
    }
  ]
    return ( 
        <Div>
                   <div className='subHero'>
            <div className='darken-5'>
            <Navbar />
                <div className='container padding-top-50'>
                    <div className="text-big width-500-max  text-white">
                    Our Hotels
                    </div>
                    <Div funcss="width-400-max padding-top-20 text-white">
                    <Typography text="Sed ut perspiciatis unde omnis iste 
natus error sit voluptatem accusantium 
doloremque laudantium, totam rem aperiam" 
/>    
                    </Div>
                </div>
            </div>
        </div>
        <div className='light padding-top-40'>
              <Grid funcss="container">
                {data.map(doc=>(
          
                  <Col sm={12} md={6} lg={4} funcss="padding" key={doc.id}>
                           <Link href="/detail/detail">
                  <a>
                      <Div funcss="border white pointer hover-up hover-text-blue" >
                        <Div>
                          <img src={doc.img} className="fit"/>
                        </Div>
                        <Div funcss="padding">
                        <Div funcss="">
                        <Typography text={doc.name} heading="h4 text-bold"/>
                        <Div><Typography text={doc.loc} funcss="text-small"/></Div>
                
                        </Div>
                    
                        <Div funcss="section">
                        <Typography text={doc.about} funcss="text-small"/>
                        </Div>
                        </Div>
                      </Div>
                      </a>
                 </Link>
                    </Col>
          
                ))}
              </Grid>
        </div>
        </Div>
     );
}
 
export default Hotels;