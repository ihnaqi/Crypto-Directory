import { nanoid } from 'nanoid'
import './feature.css'

const Feature = ({data}: {data: {imageURL: string, title: string, date: string}[]}) => {

   return (
      <div className="feature-container">
         <h3 className="feature-title">Features </h3>
         <div className="feature-content-container">
            {
               data.map((item : {imageURL: string, title: string, date: string}) => {
                  return(
                     <div key={nanoid()} className="feature-content">
                        <img src={item.imageURL} alt="feature" className="feature-image"/>
                        <div className="feature-text-container">
                           <h3 className="feature-text-title">{item.title}</h3>
                           <p className="feature-text-date">{item.date}</p>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Feature