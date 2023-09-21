import './tile.css'

function getDate() {
   const dateObj = new Date();
   const date = dateObj.getDate();
   const year = dateObj.getFullYear();
   const monthValue = dateObj.getMonth();
   const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

   return `${month[monthValue]} ${date}, ${year}`
}

const Tile = ({tag, title, img}:{tag: string, title: string, img: string}) => {

   return(
      <div className='tile-wrapper'>
         <div className='tile-item-conatiner'>
            <div className="tile-right-container">
               <strong className="tile-tag"> {tag} </strong>
               <h4 className='tile-title'> {title} </h4>
               <p className='tile-date'> {getDate()} </p>
            </div>
            <div className="tile-left-container">
               <img src={img} alt="tile-img" />
            </div>
         </div>
      </div>
   )
}

export default Tile;