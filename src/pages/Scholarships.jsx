import React from "react"
import { Link } from "react-router-dom"

export default function Scholarships() {

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
            <p className="degreeType">Degree type: {scholarship.degree}</p>
            <p className="country">Country: {scholarship.country}</p>
            <p className="deadline">Deadline: {scholarship.deadline}</p>
            </Link>
         </div>
      )
  
        )


    return(
        <div>
            <h1>Scholarships page goes here</h1>
            {scholarshipElements}
        </div>
    )
}