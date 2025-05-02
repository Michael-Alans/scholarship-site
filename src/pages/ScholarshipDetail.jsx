import React from "react"
import {  useParams, Link } from "react-router-dom"


export default function ScholarshipDetails() {
  
    const params = useParams()
    
    const [scholarship, setScholarship] = React.useState(null)

    React.useEffect(() => {
        fetch('/data/scholarships.json')
          .then(res => res.json())
          .then(data => {
            const foundScholarship = data.find(item => item.id === params.id)
            setScholarship(foundScholarship)
            console.log('fetched')
            console.log(foundScholarship)
          })
      }, [params.id])
     

    

    return(

        <div className="detailpage">
          
          <Link to=".."
             relative="path"
             end>

            <div className="previous-page">
            <button type="button"><i class="fas fa-arrow-left" aria-hidden="true"></i></button>
            </div>

          </Link>

           {scholarship ? (
           
            <div>
                <div className="scholarship-detail-header">
                  <h1>{scholarship.title}</h1>
                </div>
                <div className="image-and-litte-description-container">
                    <div className="image-and-litte-description-container-image-container">
                        <img src={scholarship.imageUrl} alt={scholarship.title}/>
                    </div>

                    
                </div>
            </div>

           ) : null}
        </div>
        
   
    )
}