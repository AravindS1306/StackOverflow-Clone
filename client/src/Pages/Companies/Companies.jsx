import React from 'react'
import './Companies.css'
import search from 'C:/Users/HP/Desktop/Reactjs/stack-overflow-clone/client/src/assets/search-solid.png'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import intuit from '../../assets/intuit.avif'
import { Link } from 'react-router-dom'
import {useNavigate } from 'react-router-dom'
const Companies = () => {
  const tags = ['java', 'spring',  'spring-boot', 'javascript','microservices','ci-cd','github','kubernetes','jenkins'] 
  const navigate = useNavigate()
  const checkTag=()=>{
      navigate('/Tags')
  }
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <p className='stitle'>Companies</p> 
        <p className='cap'>Learn about what it's like to work at companies</p>
        <div className='search-container'>
        <Link to={window.set='https://google.com'} >  
        <img src={search} alt="search" width="18" className='search-icon-company1'/></Link>
            <input type="text" placeholder='       Search all Companies' className='search-containers search1'/>
            <input type="text" placeholder='   Search Companies by location' className='search-containers search2'/>
            <button className='search-containers button'>Search</button>
            <div className='search-containers line'></div>
            <div className='search-containers line2'></div>
            <select className='search-containers dropdown'><option>Filter by Tag</option></select>
        </div>
        <div className='container1'>
        <p>126 Companies</p>
        <hr></hr>
        </div>
        <div className='intuit'>
          <Link to='https://www.intuit.com' className='companylogo1'><img src={intuit} alt="search" className='companylogo1' /></Link>
          <div className='contents'>
            <p style={{color:'blue',cursor:'pointer',position:'relative',top:'0px',fontSize:'17px'}}><Link to={'https://www.intuit.com'} className='decoration'>Intuit</Link></p>
            <div className='moveup'>
            <i class='fas fa-map-marker-alt'></i> <Link to={ window.set = 'https://rb.gy/3v63wi'} className='location'>Banglore, Karnataka, India</Link>
            <p className='about'>Intuit is the global financial technology platform that powers prosperity for the people and communities we serve with TurboTax, Credit Karma, QuickBooks, and Mailchimp. Our teams are fueling innovation through a common architecture shared by all of the company’s applications to deliver awesome customer</p>
            <p className='about'>Hiring for the role of Software Development Engineer-II. Prev Exp-SDE1 at any company. Salary:25CTC</p>
            <p className='about'>Skills</p>
            <div className='widget-tags-div2'>
                {
                    tags.map((tag) => (
                        <p key={tag} onClick={checkTag}>{tag}</p>
                    ))
                }
            </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Companies
