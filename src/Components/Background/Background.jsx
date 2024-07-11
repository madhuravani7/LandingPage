import './Background.scss'
import video2 from '../../assets/video2.mp4'
import bmw from '../../assets/bmw.jpg'
import merce from '../../assets/merce.jpg'
import audi from '../../assets/audi.jpg'

const Background = ({playStatus, heroCount}) => {

    if(playStatus) {
        return (
            <video className='background' autoPlay loop muted>
                <source src={video2} type='video/mp4'/>
            </video>
        )
    }
    else if(heroCount === 0){
        return (
            <img src={bmw} className='background fade-in' alt="car" />
        )
    }
    else if(heroCount === 1){
        return (
            <img src={merce} className='background fade-in' alt="car" />
        )
    }
    else if(heroCount === 2){
        return (
            <img src={audi} className='background fade-in' alt="car" />
        )
    }
}

export default Background