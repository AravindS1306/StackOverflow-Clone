import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from './Pages/Users/Users'
import Questions from './Pages/Questions/Questions'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Auth2 from './Pages/Auth/Auth2'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import Tags from './Pages/Tags/Tags'
import Companies from './Pages/Companies/Companies'
import ExploreCollectives from './Pages/ExploreCollectives/ExploreCollectives'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/Auth2' element={<Auth2 />}/>
            <Route path='/AskQuestion' element={<AskQuestion />}/>
            <Route path='/Tags' element={<Tags />} />
            <Route path='/Companies' element={<Companies/>} />
            <Route path='/ExploreCollectives' element={<ExploreCollectives/>} />
            <Route path='/Users' element={<Users/>}/>
            <Route path='/Questions' element={<Questions/>}/>
        </Routes>
    )
}

export default AllRoutes
