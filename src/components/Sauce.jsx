import { useState } from 'react';
import Heat from './Heat';

function Sauce(props){
const { sauce, peppers, shu, hotLevels, image, pairing } = props.hotSauce.fields;
const [showMore, setShowMore] = useState(false);

function toggle() {
  (showMore === false) ? setShowMore(true)
  : setShowMore(false)
}

const handleSubmit = (event) => {
  event.preventDefault();
  peppers.setPeppers(showMore);
  shu.setShu(showMore);
  pairing.setPairing(showMore);
  setShowMore(true);
}

  return(
    <article>
    <h2>{sauce}</h2>
    <Heat hotLevels={hotLevels} />
    <img src={image} alt={sauce}></img>
    <button type="button" onClick={toggle}>Show More</button>
      {showMore === true ?(
    <div>
    <p>{peppers}</p>
    <p>{shu}</p>
    <p>{pairing}</p>
    </div> ):(""
      )}
    </article>
  )
}

export default Sauce;