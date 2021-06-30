import { useState } from 'react';
import Heat from './Heat';

function Sauce(props){
const { sauce, peppers, shu, hotLevels, image, pairing } = props.hotSauce.fields;
const [showMore, setShowMore] = useState(false);

function toggle() {
  (showMore === false) ? setShowMore(true)
  : setShowMore(false)
}

  return(

    <article>
    <Heat hotLevels={hotLevels} />
    <h2 style={{
        margin: "0",
        fontFamily: "Red Hat Text, sans-serif",
        textAlign: "center",
       }}>{sauce}</h2>
    <img onClick={toggle} src={image} alt={sauce}/>
    
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
    </section>):(""
      )}
      <hr/>  
    </article>
  )
}

export default Sauce;