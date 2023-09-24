import './trend.css'
import data from './data'
import { nanoid } from 'nanoid'

const TrendyVideos = () => {
    return (
        <section className='trendy-videos-main-container-wrapper'>
            <h2> Trendy Videos </h2>
            <div className='top-section-container'>
                <div className="top-left-container">
                    <div className='top-left-upper'>
                    <p className='logo-and-text channel-name'> <svg className="yt-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 48 48">
                        <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                    </svg> Lary Davis </p>
                    <h2 className="left-main-title">
                        So… Bitcoin & Crypto Markets Are In Trouble
                    </h2>
                    <p className="left-main-desc">
                        Bitcoin price news, mt gox update, NFTs are dead, trading volume is dead, macro thoughts, and X is getting payments! 🔥 GET MY FREE NEWSLETTER 👉 https://cryptolark.co/WEALTHMASTERY 💸 BYBIT $30,030 BONUS & FEE DISCOUNT 👉 https://cryptolark.co/BYBIT 💡💡💡 ESSENTIAL CRYPTO KNOWLEDGE 💡💡💡 🔥 GET MY FREE NEWSLETTER 👉 ...
                    </p>
                    </div>
                    <p className='date'> 2 days ago </p>
                </div>
                <div className="top-right-container">
                    <iframe className='top-right-video' src="https://www.youtube.com/embed/63NwhDsOoaE?si=fYUtjiNioGUiYsMR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className="bottom-section-container">
                {
                    data.map(item => {
                        return (
                            <div key={nanoid()} className="bottom-data-item-wrapper">
                                <div className="video-container">
                                    <iframe className='bottom-video' src={`${item.channel_link}?si=5B5m38wrhjmdv6Zd`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div className="video-data-container">
                                    <strong className='logo-and-text video-channel-name'> <svg className="yt-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                                        <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                                    </svg> {item.channel_name} </strong>
                                    <h3 className='video-title'>{item.title}</h3>
                                    <p className='video-date'>{item.date}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default TrendyVideos