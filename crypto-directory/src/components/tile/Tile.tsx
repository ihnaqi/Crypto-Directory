import './tile.css'

function getDate() {
   const dateObj = new Date();
   const date = dateObj.getDate();
   const year = dateObj.getFullYear();
   const monthValue = dateObj.getMonth();
   let month = '';
   switch(monthValue){
      case 0:
         month = 'Jan';
         break;
      case 1:
         month = 'Feb';
         break;
      case 2:
         month = 'Mar';
         break;
      case 3:
         month = 'Apr';
         break;
      case 4:
         month = 'May';
         break;
      case 5:
         month = 'Jun';
         break;
      case 6:
         month = 'Jul';
         break;
      case 7:
         month = 'Aug';
         break;
      case 8:
         month = 'Sep';
         break;
      case 9:
         month = 'Oct';
         break;
      case 10:
         month = 'Nov';
         break;
      case 11:
         month = 'Dec';
         break;
   }

   return `${month} ${date}, ${year}`
}

const Tile = ({tag, title, img}) => {

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