import './feature.css'
import data from './data'

const Feature = () => {

   return (
      <div className="feature-container">
         <h3 className="feature-title">Features </h3>
         <div className="feature-content-container">
            {
               data.map(item => {
                  return(
                     <div className="feature-content">
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