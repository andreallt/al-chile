import { useState } from 'react';
import Heat from './Heat';
import "./Sauce.css"

function Sauce(props){
const { sauce, peppers, shu, hotLevels, image, pairing } = props.hotSauce.fields;
const [showMore, setShowMore] = useState(false);

function toggle() {
  (showMore === false) ? setShowMore(true)
  : setShowMore(false)
}

  return(

    <article className="sauce-article">
    <img onClick={toggle} src={image} alt={sauce}/>
    <div className="sauce-heat">
    <Heat hotLevels={hotLevels} />
    <h2>{sauce}</h2>
      
    {showMore === true ?(
    <section className="info-box">
    <div className="info">
    <h3>Great on:</h3>
    <p>{pairing}</p>
    <h3>Scoville Heat Units:</h3>
    <p>{shu}</p>
    <h3>Peppers:</h3>
    <p>{peppers}</p>
    </div> 
    </section>
    ):(""
      )}
    </div>
    </article>
  )
}

export default Sauce;