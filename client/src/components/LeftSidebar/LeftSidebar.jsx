import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from  '../../assets/Globe.svg'
import i from '../../assets/i.png'
import teams from '../../assets/teams.svg'
const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeclassname='active'>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p style={{marginTop:'0px'}}>PUBLIC</p></div>
                    <NavLink to='/Questions' className='side-nav-links' activeclassname='active' style={{marginTop:'-10px'}}>
                        <img src={Globe} alt="Globe" />
                        <p style={{paddingLeft: "10px"}}> Questions </p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Users</p>
                    </NavLink>
                    <NavLink to='/Companies' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Companies</p>
                    </NavLink>
                </div>    
                    <div className='new-container'>
                <p style={{fontSize:12}} className='side-nav-links'>COLLECTIVES</p>
                    <img src={i} alt='i' className='side-nav-links' style={{width:'12px'}}/>
                    </div>
                    <NavLink to='/ExploreCollectives' className='side-nav-links' activeclassname='active'>
                        <p style={{marginTop:'0px'}}>Explore Collectives</p>
                    </NavLink>
                <p className='side-nav-links' style={{fontSize:'11px'}}>TEAMS</p>    
                <div className='team-container'>
                      <p><b>Stack Overflow for <br/>
                      Teams -</b> Start <br />
                      collaborating and <br />
                      sharing organizational <br />
                      knowledge.
                      </p>
                      <img src={teams} alt='teams' style={{width:'140px',marginTop:'-15px'}}/>
                     <button className='freeTeams'>Create Free Teams</button>
                     <div className='whiteline'></div>
                     <p style={{fontSize:'11px',marginLeft:'35px',cursor:'pointer',marginTop:'5px'}}>Why Teams?</p>
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar
