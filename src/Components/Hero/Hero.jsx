import './Hero.scss'
const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
  return (
    <div className="hero">
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore the features</p>
            <i className="fas fa-arrow-right"></i>
        </div>
        <div className="hero-dot-play">
            <ul className='hero-dots'>
                <li onClick={()=> setHeroCount(0)} className={heroCount===0 ? 'hero-dot orange': 'hero-dot' }></li>
                <li onClick={()=> setHeroCount(1)} className={heroCount===1 ? 'hero-dot orange': 'hero-dot' }></li>
                <li onClick={()=> setHeroCount(2)} className={heroCount===2 ? 'hero-dot orange': 'hero-dot' }></li>
            </ul>
            <div className="hero-play">
                <i onClick={()=>setPlayStatus(!playStatus)} className={playStatus ? "fas fa-pause": "fas fa-play"}></i>
                <p>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero