import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Scholarships from "./pages/Scholarships"
import WinnersConer from "./pages/WinnersConer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Undergraduate from "./pages/scholarships/Undergraduate"
import Masters from "./pages/scholarships/Masters"
import Postgraduates from "./pages/scholarships/Postgraduate"
import InterShips from "./pages/scholarships/Internships"
import LayoutRoute from './components/LayoutRoute'
import ScholarshipDetail from "./pages/ScholarshipDetail"



function App() {
  

  return (
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<LayoutRoute />}>
         <Route index element={<Home />}/>
         <Route path="scholarships" element={<Scholarships />}>
         <Route index element={<Undergraduate />} />
          <Route path="masters" element={<Masters />}/>
          <Route path="postgraduate" element={<Postgraduates />}/>
          <Route path="internships" element={<InterShips />}/>
         </Route>
         <Route path="scholarships/:id" element={<ScholarshipDetail/>}/>
         <Route path="winnersCorner" element={<WinnersConer />}/>
         <Route path="about" element={<About />}/>
         <Route path="contact" element={<Contact />}/>
       </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
