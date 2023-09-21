import './slider.css'
import sliderData from '../../data/sliderData'
import { nanoid } from 'nanoid'


const Slider = () => {
   const data = sliderData

   return (
      <section className='slider-section'>
         <div className="home-slider-container">
            {
               data?.map(item => {
                  return (
                     <div key={nanoid()} className='home-slider-item'>
                        <div className='home-slider-item-image-container'>
                           <img src={item.attributes.icon_path} alt='icon' className='slider-icon' />
                        </div>
                        <div className='home-slider-item-symbol-container'>
                           <p className='home-slider-item-symbol'>{item.attributes.symbol}</p>
                        </div>
                        <div className='home-slider-item-price-container'>
                           <p className='home-slider-item-price'><span>$</span>{item.attributes.price_usd.toFixed(2)}</p>
                        </div>
                        <div className='home-slider-item-rate-container'>
                           <p className={`home-slider-item-rate ${item.attributes.change_24h > 0 ? 'green' : 'red'}`}>{`${item.attributes.change_24h}%`} </p>
                        </div>
                        <div className='home-slider-time-container'>
                           <p className='home-slider-time'>(24h)</p>
                        </div>
                        <div className='divider'></div>
                     </div>
                  )
               })
            }
            {
               data?.map(item => {
                  return (
                     <div key={nanoid()} className='home-slider-item'>
                        <div className='home-slider-item-image-container'>
                           <img src={item.attributes.icon_path} alt='icon' className='slider-icon' />
                        </div>
                        <div className='home-slider-item-symbol-container'>
                           <p className='home-slider-item-symbol'>{item.attributes.symbol}</p>
                        </div>
                        <div className='home-slider-item-price-container'>
                           <p className='home-slider-item-price'><span>$</span>{item.attributes.price_usd.toFixed(2)}</p>
                        </div>
                        <div className='home-slider-item-rate-container'>
                           <p className={`home-slider-item-rate ${item.attributes.change_24h > 0 ? 'green' : 'red'}`}>{`${item.attributes.change_24h}%`} </p>
                        </div>
                        <div className='home-slider-time-container'>
                           <p className='home-slider-time'>(24h)</p>
                        </div>
                        <div className='divider'></div>
                     </div>
                  )
               })
            }
         </div>
      </section>
   )
}

export default Slider