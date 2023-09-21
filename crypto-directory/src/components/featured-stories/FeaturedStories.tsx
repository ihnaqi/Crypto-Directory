import ThreeTiles from '../new-tile/three-tile/ThreeTiles'
import './stories.css'
import data from './data'

const FeaturedStories = () => {

   return (
      <>
         <div className='featured-stories-container'>
         <h2 className='stories-title'> Featured Stories </h2>
         <div className="featured-main-content-container">
            <div className="featured-main-left-content">
               <div className="featured-main-left-upper">
                  <strong className='top'> Founder Stories </strong>
                  <h3 className="featured-main-left-title">
                     Mark Paul & Praveen Paul - Co-founder Of Itheum
                  </h3>
                  <p className="featured-main-left-text">
                  We regularly interview the project's founders to learn more about this interesting individual and the story behind their success. We have the chance to deep-dive into their background, their...
                  </p>
               </div>
               <div className="featured-main-left-down">
                  <p className="featured-date">Jul 28, 2023</p>
               </div>
            </div>
            <div className="featured-main-right-content">
               <img src='https://raw.githubusercontent.com/ihnaqi/Crypto-Directory/main/crypto-directory/src/assets/images/itheum_founders.jpg' alt='founders' />
            </div>
         </div>
      </div>
      <ThreeTiles list={data} />
      </>
   )
}

export default FeaturedStories