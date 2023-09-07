
import "./card.css"

const Card = ({identifier, title, desc, bgImage}) => {
   return(
      <section className="banner-card" style={{"--img": `url(${bgImage})`}}>
         <div className="banner-card-content-identifier">
            <div className="card-identifier-text">
               {identifier} &nbsp;&#9654;
            </div>
         </div>
         <div className="banner-card-content-title">
            <p> {title} </p>
            <h3>{desc}</h3>
         </div>
      </section>
   )
}

export default Card