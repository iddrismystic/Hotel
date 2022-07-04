import '../styles/globals.css'
import '../styles/fun.css'
import Head from "next/head"
import Footer from './../components/Footer';
function MyApp({ Component, pageProps }) {
  return (
<div>
<style>
 @import url({"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"});
 @import url({"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"});
 @import url({"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"});
 @import url({"https://cdn.lineicons.com/3.0/lineicons.css"});
</style>
<Component {...pageProps} />
<Footer />
</div>
)
}

export default MyApp
