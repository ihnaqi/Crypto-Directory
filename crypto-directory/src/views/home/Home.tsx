import './home.css'
import featureData from '../../components/features/data'
import guideData from '../../components/features/guide_data'

import img1 from '../../assets/images/news.jpg'
import img2 from '../../assets/images/undervalue.jpg'
import img3 from '../../assets/images/chain.jpg'
import img4 from '../../assets/images/cLogo.png'
import blockchain from '../../assets/images/blockchains.jpg'
import evsb from '../../assets/images/evsb.jpg'
import nft from '../../assets/images/chain.jpg'

import Card from '../../components/home-banner-card/Card'
import Slider from '../../components/slider/Slider'
import Tile from '../../components/tile/Tile'
import NewsTile from '../../components/new-tile/NewsTile'
import ProjectAnalysis from '../../components/project-analysis/ProjectAnalysis'
import Feature from '../../components/features/Feature'
import FeaturedStories from '../../components/featured-stories/FeaturedStories'
import { nanoid } from 'nanoid'

const Home = () => {
   return (
      <main className="home-container">
         <section className="home-banner">
            <div className="home-banner-top">
               <div className="home-banner-content">
                  <h2 className="home-banner-title">
                     Your Atlas To The World Of Crypto 💫</h2>
               </div>
               <div className="home-banner-content">
                  <p className="home-banner-description">
                     Explore and discover cool projects and resources in the world of the crypto ecosystem.
                  </p>
               </div>
            </div>
            <div className="home-banner-card-container">
               <Card identifier="Explore Our Interview" title="Founder Interview" desc="Itheum Founder" bgImage={img1} />
               <Card identifier="Dive Into Our Article" title="Guide" desc="Undervalued Assets" bgImage={img2} />
               <Card identifier="Read Our Guide" title="Feature" desc="NFT royalties" bgImage={img3} />
            </div>
         </section>
         <Slider />
         <section className='home-featured-container'>
            <div className='home-fatured-left-wrapper'>
               <div className='home-featured-title-container'>
                  <h2 className="home-featured-title">Highlights</h2>
               </div>
               <div className='home-featured-left-content-wrapper'>
                  <div className='home-featured-left-content'>
                     <div className='home-featured-left-content-top-left-logo'>
                        <img src={img4} alt='logo' />
                        <p> CryptoDuniya </p>
                     </div>
                     <div className='home-featured-left-content-bottom-left'>
                        <h3> Featured </h3>
                        <p> Tokenization of Real World Assets </p>
                     </div>
                  </div>
               </div>
               <div className='home-featured-left-content-text-section-container'>
                  <h3> The Tokenization of Real-world Assets </h3>
                  <p className='home-desc'> Tokenization bridges conventional and digital assets by digitally representing tangible assets on blockchain networks. This article delves into how real-world asset tokenization works and provides...</p>
                  <p className='date'> Aug 23, 2023 </p>
               </div>
            </div>
            <div className="home-featured-right-wrapper">
               <div className='home-featured-title-container'>
                  <h2 className="home-featured-title">Recent Publications</h2>
               </div>
               <Tile tag="featueres" title="The Tokenzation of Real-world Assets" img={blockchain}/>
               <Tile tag="guides" title="Exploring Crypto Exchanges: Centralized vs. Decentralized" img={evsb}/>
               <Tile tag="featueres" title="What Are NFT Royalties?" img={nft}/>
            </div>
         </section>
         <NewsTile />
         <ProjectAnalysis />
         <Feature key={nanoid()} data={featureData}/>
         <FeaturedStories />
         <Feature key={nanoid()} data={guideData}/>
      </main>
   )
}

export default Home