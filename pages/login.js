import React from 'react'
import Typography from '../Funcss/Components/Typography'
import Container from '../Funcss/Components/Container'
import Breadcrumb from '../Funcss/Components/Breadcrumb'
import Button from '../Funcss/Components/Button'
import Icon from '../Funcss/Components/Icon'
import Card from '../Funcss/Components/Card';
import Input from '../Funcss/Components/Input';
import IconicInput from '../Funcss/Components/IconicInput';
import Div from '../Funcss/Components/Div';
import Section from '../Funcss/Components/Section';
import Grid from '../Funcss/Components/Grid';
import Col from '../Funcss/Components/Col';
import Navbar from '../components/Navbar'
import { useState } from 'react';

export default function Login() {
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [state, setstate] = useState("")
    const HandleLogin = async()=>{
        setstate("")
        if(email && password){
            if(email === "admin@gmail.com" && password === "12345"){
             new Promise((resolve, reject) => {
                if(email && password){
                    sessionStorage.setItem(
                        "user",
                        JSON.stringify({
                            email:email,
                            name:"Hotel Bay"
                        })
                    )
                    resolve()
                }
             }).then(()=>window.location.assign("/bookings"))
            }else{
                setstate("Wrong credentials")
            }
        }else{
            setstate("Please enter your email and password")
        }
    }
  return (
    <div className='padding-top-80'>
        <Navbar />
<Card funcss="width-400-max center padding-20">
<Div funcss="text-center">
    <Icon icon="far fa-user-circle" size={3} color="success" />
    <Typography heading="h1" text="Login Account" />
</Div>
<Grid>
<Col sm={12} md={12} lg={12} funcss="padding">
    <IconicInput funcss="section full-width" position="left" >
<Input type="email" label="Email" funcss="full-width" bordered={true}   onChange={(e)=>setemail(e.target.value)} />
<Icon icon="far fa-paper-plane" color="success" />
</IconicInput>
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
    <IconicInput funcss="section full-width" position="left" >
<Input type="password" label="Password" funcss="full-width" bordered={true}  onChange={(e)=>setpassword(e.target.value)}/>
<Icon icon="fas fa-lock" color="success" />
</IconicInput>
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
<Input type="checkbox" /> Remember Me
    </Col>
 {
    state &&
    <Col sm={12} md={12} lg={12} funcss="padding">
   {state}
        </Col>
 }
    <Col sm={12} md={12} lg={12} funcss="padding">
        <Button text="Login" color="white" bg="success" funcss="full-width" onClick={HandleLogin}/>
    </Col>
</Grid>

</Card>


    </div>
  )
}