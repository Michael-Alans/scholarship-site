import React from "react";
import { Outlet,  NavLink, useSearchParams, Link } from "react-router-dom";
import Undergraduate from "./scholarships/Undergraduate";



export default function Scholarships() {


       const activeLink = {
        color:"white",
        backgroundColor: "#1A1A19",
        padding : "8px"
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
            <p className="deadline">Deadline: {scholarship.deadline}</p>
            </Link>
        </div>    
        )

      )

      function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return(
        <>
          
          <nav className="scholarship-page-header">

           <button   className={`filter-links  ${typeFilter === "" ? "activeLink" : null}`}
            onClick={()=> handleFilterChange("type", "")}
            >All scholarships</button>

            <button className={`filter-links  ${typeFilter === "undergraduate" ? "activeLink" : null}`}
            onClick={()=> handleFilterChange("type", "undergraduate")}
            >Undergraduate</button>

            <button  className={`filter-links  ${typeFilter === "masters" ? "activeLink" : null}`}
            onClick={()=> handleFilterChange("type", "masters")}
            >Masters</button>

            <button  className={`filter-links ${typeFilter === "postgraduate" ? "activeLink" : null}`}
            onClick={()=> handleFilterChange("type", "postgraduate")}
            >Postgraduates</button>

            <button  className={`filter-links ${typeFilter === "internships" ? "activeLink" : null}`}
            onClick={()=> handleFilterChange("type", "internships")}
            >Internships</button>
          </nav>
          <Outlet />
          <section className="scholarships-grid">
             {scholarshipElements}
           </section>
        </>
    )
}