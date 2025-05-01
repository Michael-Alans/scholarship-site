import React from "react";
import { Outlet,  NavLink, useSearchParams, Link } from "react-router-dom";



export default function Scholarships() {


      const activeLink = {
        color:"white",
        borderBottom: "3px solid black",
        fontWeigh: "bold"
      }

      const [scholarships, setScholarships] = React.useState([])
      const [searchParams, setSearchParams ]   = useSearchParams()
      const typeFilter = searchParams.get('type');
      console.log(typeFilter)

          
  
      React.useEffect(()=> {
         fetch('/data/scholarships.json')
         .then(res => res.json())
         .then(data => {
          
           setScholarships(data)
  
         })
  
        
      },[])

      const displayedScholarship = typeFilter ? scholarships.filter(item => item.degree.toLowerCase()
         === typeFilter.toLowerCase())
        : scholarships

      const scholarshipElements = displayedScholarship.map(

        scholarship => (
          <div className="scholarshipCard" key={scholarship.id}>
            <Link to={`/scholarships/${scholarship.id}`}>
            <img src={scholarship.imageUrl} alt={scholarship.title} />
            <h3 className="scholarshipTitle">{scholarship.title}</h3>
            <p className="degreeType">Degree type: {scholarship.degree}</p>
            <p className="country">Country: {scholarship.country}</p>
            <p className="deadline">Deadline: {scholarship.deadline}</p>
            </Link>
        </div>    
        )

      )

    return(
        <>
          
          <nav className="scholarship-page-header">
            <NavLink to="?type=undergraduate" className="nav-link-color"
            style={({isActive}) => isActive? activeLink :null}
            >Undergraduate</NavLink>

            <NavLink to="?type=masters" className="nav-link-color"
            style={({isActive}) => isActive? activeLink :null}
            >Masters</NavLink>

            <NavLink to="?type=postgraduate" className="nav-link-color"
            style={({isActive}) => isActive? activeLink :null}
            >Postgraduates</NavLink>

            <NavLink to="?type=internships" className="nav-link-color"
            style={({isActive}) => isActive? activeLink :null}
            >Internships</NavLink>
          </nav>
          <Outlet />
          <section className="scholarships-grid">
             {scholarshipElements}
           </section>
        </>
    )
}