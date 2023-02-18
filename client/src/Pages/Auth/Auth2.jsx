import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth2.css'
import google from '../../assets/google.jpg'
import github from '../../assets/github.png'
import fb from '../../assets/fb.png'
import recaptcha from '../../assets/recaptcha.png'
import AboutAuth from './AboutAuth'
const Auth2 = () => {
    const navigate = useNavigate()
    const checkAuth=()=>{
        navigate('/Auth')
    }
  return (
    <section class='auth-section2'>
            <AboutAuth />
            <div class='auth-container-22'>
            <img src={google} alt='stack overflow' className='google-logo'/>
            <button type='button' className='google'>Sign up with Google</button> 
            <img src={github} alt='stack overflow' className='github-logo'/>  
            <button type='button' className='github'>Sign up with Github</button>
            <img src={fb} alt='stack overflow' className='fb-logo'/> 
            <button type='button' className='fb'>Sign up with Facebook</button>
                <form>
                    {
                            <label htmlFor='name'>
                                <h4>Display Name</h4>
                                <input type="text" id='name' name='name'/>
                            </label>
                        
                    }
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" name='email' id='email'/>
                    </label>
                    <label htmlFor="password">
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <h4>Password</h4>
                    </div>        
                        <input type="password" name='password' id='password'/>
                        <p style={{ color: "#666767", fontSize:"13px"}}>Passwords must contain at least eight characters,<br /> including at least 1 letter and 1 number.</p> 
                    </label>
                      <div className='iamnotarobot'>
                        <div className='white-container'>
                                <input type="checkbox" id='check' className='increasecheckboxsize'/>
                                <img src={recaptcha} alt='stack overflow' className='recaptcha-logo'/> 
                        </div>
                      </div>
                    {
                            <label htmlFor='check2'>
                                <p className='textmove'>I'm not a robot</p>
                                <div className='reducecheckboxsize'>
                                <input type="checkbox" id='check2'/></div>
                                <div className='movetext'>
                                <p style={{ fontSize:"13px"}}>Opt-in to receive occasional,product<br /> updates, user research invitations,company<br /> announcements, and digests.</p></div>
                            </label>
                    }
                    <button type='submit' className='auth-btn2'>Sign up</button>
                    {
                            <p style={{ color: "#666767", fontSize:"13px"}}>
                                By clicking “Sign up”, you agree to our 
                                <div className='cursor'>
                                <span style={{ color: "#007ac6"}}> terms of service</span>,
                                <span style={{ color: "#007ac6"}}> privacy policy</span> and 
                                <span style={{ color: "#007ac6"}}> cookie policy</span>
                                </div>
                            </p>
                    }
                </form>
                <p style={{fontSize:13}}>
                     Already have an account?
                    <button onClick={checkAuth} className='handle-switch-btn2'>Log in</button>
                </p>
                <p style={{fontSize:13}}>
                    <div style={{marginTop:'-20px'}}>
                    Are you an employer?
                    <button onClick={checkAuth} className='handle-switch-btn2'>Sign up on talent</button>
                    </div>
                </p>    
            </div>
        </section>
  )
}

export default Auth2
