import { Link, data } from "react-router-dom"
import React from "react"

export default function Home() {


    const [scholarships, setScholarships] = React.useState([])
  

    React.useEffect(()=> {
       fetch('/data/scholarships.json')
       .then(res => res.json())
       .then(data => {
        

         const firstFourScholarships = data.slice(0, 4)
         setScholarships(firstFourScholarships)

         

       })

      
    },[])

    const scholarshipElements = scholarships.map(scholarship => (

        <div className="scholarshipCard" key={scholarship.id}>
            <Link to={`/scholarships/${scholarship.id}`}>
            <img src={scholarship.imageUrl} alt={scholarship.title} />
            <h3 className="scholarshipTitle">{scholarship.title}</h3>
            <p className="deadline">Deadline: {scholarship.deadline}</p>
            </Link>
         </div>
      )
  
        )


    return(
        <>
          <section className="hero-section">
           <h1>Find Your Scholarships</h1>
           <p>Explore a world of opportunities tailored just for you.</p>
           </section>

           <section className="form-container">
            <form action="">
                <div className="search">
                <input type="search" name="search" id="search" placeholder="Search for scholarships"/>
                <button type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
            </form>
           </section>
           
           <section className="scholarships-grid">
             {scholarshipElements}
           </section>

           <div className="view-more-container">
            <Link to="scholarships"><button type="button">More scholarships</button></Link>
           </div>

           
        </>
        

    )
}