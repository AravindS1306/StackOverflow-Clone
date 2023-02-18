import React from 'react'
import { useNavigate } from 'react-router-dom'
import google from '../../assets/google.jpg'
import github from '../../assets/github.png'
import fb from '../../assets/fb.png'
import './Auth.css'
import icon from '../../assets/icon.png'
const Auth = () => {
    const navigate = useNavigate()
    const checkAuth=()=>{
        navigate('/Auth2')
    }
    return (
        <section class='auth-section1'>
            <div class='auth-container-21'>
                <img src={icon} alt='stack overflow' className='login-logo1'/>
                <img src={google} alt='stack overflow' className='google-logo'/>
                <button type='button' className='google'>Sign up with Google</button> 
                <img src={github} alt='stack overflow' className='github-logo'/>  
                <button type='button' className='github'>Sign up with Github</button>
                <img src={fb} alt='stack overflow' className='fb-logo'/> 
                <button type='button' className='fb'>Sign up with Facebook</button>
                <form>
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" name='email' id='email'/>
                    </label>
                    <label htmlFor="password">
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <h4>Password</h4>
                            <p style={{ color: "#007ac6", fontSize:'13px'}}>Forgot password?</p> 
                        </div>
                        <input type="password" name='password' id='password'/>
                    </label>
                    <button type='submit' className='auth-btn1'>Log in</button>
                </form>
                <p style={{fontWeight:400, fontSize:13}}>
                    Don't have an account?
                    <button onClick={checkAuth} className='handle-switch-btn1'>Sign up</button>
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

export default Auth
