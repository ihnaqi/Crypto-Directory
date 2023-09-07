import './three-tile.css'

const ThreeTiles = ({ list }) => {
   return (
      <section className='tile-container'>
         {
            list?.map(item => {
               return (
                  <div className='item-wrapper'>
                     <div className='item-title-wrapper'>
                        <h5>{item.title}</h5>
                     </div>
                     <div className='item-subtitle-wrapper'>
                        <h4>{item.subtitle}</h4>
                     </div>
                     <div className='item-date-wrapper'>
                        <p className='date'>{item.date}</p>
                     </div>
                  </div>
               )
            })
         }
      </section>
   )
}

export default ThreeTiles