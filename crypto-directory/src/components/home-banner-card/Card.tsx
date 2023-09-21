
import { CSSProperties } from "react"
import "./card.css"

const Card = ({identifier, title, desc, bgImage}: {identifier: string, title: string, desc: string, bgImage: string}) => {
   return(
      <section className="banner-card" style={{"--img": `url(${bgImage})`} as CSSProperties}>
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