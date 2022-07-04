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

export default function Home() {
  return (
    <section>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
<div className="darken-5">
<Navbar />
 
  <div className="central height-300-min margin-top-40">
<div className="width-700-max text-white center text-center">
<div className="text-bigger ">
    Welcome To Paradise, Welcome To Hotel Bay.
</div>
<div className="section width-400-max center">
    Sed ut perspiciatis unde omnis iste 
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
</div>
  
<div>
<Link href="/hotels">
  <a>
  <button className="bookBtn pointer hover-up hover-text-blue text-success">
    Book a room <i className="far fa-paper-plane text-white"></i>
    </button>
  </a>
</Link>
</div>
  
</div>
  </div>
</div>
</div>
<div className="m-section bg-1">
<div className="container">
<Div funcss="width-700-max section padding">
<Typography text="Signature Ultima Services" size="bigger"/>
</Div>
<Div funcss="width-500-max section padding">
<Typography text="We’re 
known for our world-class service, surpassing ‘luxury’ 
to offer highly personalised experiences in utter seclusion.
Not onlydo we get to know and anticipate your needs,
but we’ll delight you with surprises along the way." 
/>
</Div>
  <Grid>
    <Col sm={12} md={4} lg={4} funcss="padding">
      <Div>
        <Div>
          <img src="/img/food.jpg" className="fit"/>
        </Div>
        <Div funcss="section">
        <Typography text="Get The Best Recipes" heading="h2"/>
        </Div>
        <Div funcss="section padding-right-10">
        <Typography text="Helicopter transfers, Michelin star chefs
         and 24/7 service staff can be arranged by our in-house
         teams to personalise each experience. Consider it handled,
          however spontaneous the idea."/>
        </Div>
      </Div>
    </Col>
    <Col sm={12} md={4} lg={4} funcss="padding">
      <Div>
        <Div>
          <img src="/img/water.jpg" className="fit"/>
        </Div>
        <Div funcss="section">
        <Typography text="Have A Relaxing Time" heading="h2"/>
        </Div>
        <Div funcss="section padding-right-10">
        <Typography text="Helicopter transfers, Michelin star chefs
         and 24/7 service staff can be arranged by our in-house
         teams to personalise each experience. Consider it handled,
          however spontaneous the idea."/>
        </Div>
      </Div>
    </Col>
    <Col sm={12} md={4} lg={4} funcss="padding">
      <Div>
        <Div>
          <img src="/img/event.jpg" className="fit"/>
        </Div>
        <Div funcss="section">
        <Typography text="Make Your Holidays Special" heading="h2"/>
        </Div>
        <Div funcss="section padding-right-10">
        <Typography text="Helicopter transfers, Michelin star chefs
         and 24/7 service staff can be arranged by our in-house
         teams to personalise each experience. Consider it handled,
          however spontaneous the idea."/>
        </Div>
      </Div>
    </Col>
  </Grid>
</div>
</div>
<div className="row m-section bg-2 h-middle">
    <div className="col padding sm-12 md-6 lg-6">
      <img
        src="/img/2.jpg" 
        className="round-edge fit hover-up pointer " />
    </div>
    <div className="col padding sm-12 md-4 lg-6">
      <div className="text-bigger section">
 <span className="text-indigo text-bigger">   Step  </span> Into the World of Ultima Collection
</div>
<div className="section width-400-max">
<Typography text="Sed ut perspiciatis unde omnis iste 
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
    Sed ut perspiciatis unde omnis iste 
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
  "
 funcss="section"
  />
            <Typography text="Sed ut perspiciatis unde omnis iste 
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
    Sed ut perspiciatis unde omnis iste 
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
  "
 funcss="section"
  />
</div>
    </div>
    </div>
      <div className="row m-section h-middle">

    <div className="col padding sm-12 md-4 lg-6">
      <div className="text-bigger section">
 <span className="text-indigo text-bigger"> Comfortable </span> Environment For You
</div>
<div className="section width-400-max">
<Typography text="Sed ut perspiciatis unde omnis iste 
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
    Sed ut perspiciatis unde omnis iste 
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
  "
 funcss="section"
  />
<Typography text="Sed ut perspiciatis unde omnis iste 
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
    Sed ut perspiciatis unde omnis iste 
  natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam
  "
 funcss="section"
  />

</div>
    </div>
            <div className="col padding sm-12 md-6 lg-6">
      <img
        src="/img/1.jpg" 
        className="round-edge fit hover-up pointer " />
    </div>
    </div>

<div className="m-section" id="contact">
<div className="container">
<div className="h1 text-center">Contact Us Now</div>
  <div className="row">
    <div className="col sm-12 md-6 lg-6 padding">
      <input type="text" placeholder='Full Name' className='input bordered full-width' />
    </div>
    <div className="col sm-12 md-6 lg-6 padding">
      <input type="text" placeholder='Email' className='input bordered full-width' />
    </div>
    <div className="col sm-12 md-12 lg-12 padding">
      <textarea type="text" placeholder='Message' className='input bordered full-width' rows={5}/>
      <div className="section">
      <button type="submit" value="Submit" className="button darkMode text-white card" >Send Message</button>
      </div>
    </div>
  </div>
</div>
</div>
    </section>
  )
}
