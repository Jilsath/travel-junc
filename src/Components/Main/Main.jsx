import React,{useEffect} from 'react'
import './main.css'
//import images.
import img1 from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'
import img10 from '../../Assets/img (10).jpg'
import img11 from '../../Assets/img (11).jpg'
import img12 from '../../Assets/img (12).jpg'
import img13 from '../../Assets/img (13).jpg'
import img14 from '../../Assets/img (14).jpg'

//import icon from  react icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";


import Aos from 'aos'
import 'aos/dist/aos.css'



const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$800',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurios stays and adventurous activities.'
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Goa',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$600',
   description:'The Goa, a tiny emerald on the west coast of India, with its natural Scenic beauty, abundant greenery, attractive beaches, historical temples and churches.' 
  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Petra',
    location:'Jordan',
    grade:'CULTURAL RELAX',
    fees:'$900',
    description:'The Petra is a sight to behold with its ancient architecture, rich history, and intricate monuments. As a UNESCO World Heritage Site, it offers breathtaking.'
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'Angkor Wat',
    location:'Cambodia',
    grade:'CULTURAL RELAX',
    fees:'$800',
   description:'The Angkor Wat is a Hindu-Buddhist temple complex in Cambodia. Located on a site measuring 162.6 hectares within the ancient Khmer capital city of Angkor.' 
  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'Dubai Mall',
    location:'United Arab Emirates ',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Dubai Mall is the largest shopping mall in Dubai. It is the second largest mall in the world by total land area after the Iran Mall.26th-largest shopping mall in the world.'
  },
  {
    id:6,
    imgSrc:img6,
    destTitle:'Victoria Harbour',
    location:'Hong Kong',
    grade:'CULTURAL RELAX',
    fees:'$900',
   description:'The harbour is a major tourist attraction of Hong Kong. Lying in the middle of the territory`s dense urban region.natural landform harbour in Hong Kong separating Hong Kong.' 
  },
  {
    id:7,
    imgSrc:img7,
    destTitle:'Gros Piton',
    location:'Saint Lucia',
    grade:'CULTURAL RELAX',
    fees:'$800',
    description:'The The Pitons are two mountainous volcanic plugs, volcanic spires, located in Saint Lucia.The Pitons are two mountainous volcanic plugs, volcanic spires.'
  },
  {
    id:8,
    imgSrc:img8,
    destTitle:'Times Square',
    location:'New York City',
    grade:'CULTURAL RELAX',
    fees:'$800',
   description:'Times Square is a major commercial intersection, tourist destination, entertainment hub.Times Square is a major commercial intersection, tourist destination.' 
  },
  {
    id:9,
    imgSrc:img9,
    destTitle:'Navy Pier',
    location:'Chicago',
    grade:'CULTURAL RELAX',
    fees:'$800',
    description:'Navy Pier is a 3,300-foot-long pier on the shoreline of Lake Michigan. located in the Streeterville neighborhood of the Near North Side community area in Chicago.'
  },
  {
    id:10,
    imgSrc:img10,
    destTitle:'Lake Como',
    location:'Italy',
    grade:'CULTURAL RELAX',
    fees:'$700',
   description:'The lake is shaped like an upside-down Y, with three slender branches that meet at the resort town of Bellagio.Lake Como, in Northern Italy`s Lombardy region.' 
  },
  {
    id:11,
    imgSrc:img11,
    destTitle:'Alhambra',
    location:'Spain',
    grade:'CULTURAL RELAX',
    fees:'$900',
    description:'The Alhambra is a palace and fortress complex located in Granada, Andalusia, Spain. It is one of the most famous monuments of Islamic architecture.'
  },
  {
    id:12,
    imgSrc:img12,
    destTitle:'Mount Fuji',
    location:'Japan',
    grade:'CULTURAL RELAX',
    fees:'$700',
   description:'Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters.' 
  },
  {
    id:13,
    imgSrc:img13,
    destTitle:'Delhi',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$800',
    description:'Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Red Fort.'
  },
  {
    id:14,
    imgSrc:img14,
    destTitle:'Oshino Hakkai',
    location:'Japan',
    grade:'CULTURAL RELAX',
    fees:'$900',
   description:'Oshino Hakkai are the eight springs found in Oshino, Yamanashi, Japan. The aquifer water from Mount Fuji comes out to the ground to form these springs.' 
  },
]

const Main = () => {
  //create react hook for adding scroll animation....

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right"className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/*high order array methode(map). list of objs in one array.array name data and from that .map() array to fetch each destination at once*/}
      {
        Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
          return(
            <div key={id}
            data-aos="fade-up"
             className="singleDestination">
            {/*it will return single id  from the map array*/}

            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="destTitle">{destTitle}</h4>
              <span className="continent flex">
              <HiOutlineLocationMarker className='iccon'/>
              <span className="name">{location}</span>
              </span>

              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>

              <div className="desc">
                <p>{description}</p>
              </div>
              <button className='btn flex'>
                DETAILS <HiOutlineClipboardCheck className='icon'/>
              </button>
            </div>
            </div>
          )

        })
      }
      </div>

    </section>
  )
}

export default Main
