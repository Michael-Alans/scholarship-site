import React from "react";
import { Outlet,  NavLink } from "react-router-dom";


export default function Scholarships() {
    return(
        <>
          
          <nav className="scholarship-page-header">
            <NavLink to="." relative="path" end className="nav-link-color">Undergraduate</NavLink>
            <NavLink to="masters" className="nav-link-color">Masters</NavLink>
            <NavLink to="postgraduate" className="nav-link-color">Postgraduates</NavLink>
            <NavLink to="internships" className="nav-link-color">Internships</NavLink>
          </nav>
          <Outlet />
        </>
    )
}