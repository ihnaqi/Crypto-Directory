import './tile.css'
import data from './loader'
import { nanoid } from 'nanoid'

const NewsTile = () => {
   const news = [data[0], data[1]]
   return (
      <section className="home-featured-content-wrapper">
         <div className='featured-title-container'>
            <h2 className='featured-news-title'> Latest News </h2>
            <span> More events ⌲</span>
         </div>
         <div className='featured-news-container'>
            {
               news?.map(item => {
                  return(
                     <div key={nanoid()} className='news-tile'>
                        <div className='news-tile-image-container'>
                           <img src={item.imageUrl} alt='logo' className='news-tile-image' />
                        </div>
                        <div className='news-tile-text-container'>
                           <div className='news-tile-text-title'>
                              <h3> {item.title?.editorState.root.children[0].children.map(obj => obj.text)} </h3>
                           </div>
                           <div className='news-tile-text-description'>
                              {/* <NavLink to={`${item.articleUrl}`} relative='path' className='news-tile-link' ><span>Read More 🔗</span> </NavLink> */}
                              <span className='news-tile-link' onClick={
                                 () => window.open(`${item.articleUrl}`, '_blank')
                              }>Read More 🔗</span>
                              <p className='news-tile-date'>
                                 {
                                    getDate(item.updatedAt)
                                 }
                              </p>
                           </div>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </section>
   )
}

function getDate(date: string) {
   const d = new Date(date)
   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

   const diffInDays = ((new Date()).getTime() - d.getTime()) / (1000 * 3600 * 24)

   return diffInDays < 1 ? `${(diffInDays * 24).toFixed(0)} hours ago`:  `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`

}
export default NewsTile