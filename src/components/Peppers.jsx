import { useState } from 'react';

function Peppers(props){
const { name, origin, shu, specie, image,} = props.hotPepper.fields;
const [showMore, setShowMore] = useState(false);

function toggle() {
  (showMore === false) ? setShowMore(true)
  : setShowMore(false)
}

  return(
    <article>
    <h2>{name}</h2>
    <img onClick={toggle}
      src={image} alt={name}/>
    
    {showMore === true ?(
    <section className="info-box">
    <div className="info">
    <h3>origin</h3>
    <p>{origin}</p>
    <h3>Scoville Heat Units:</h3>
    <p>{shu}</p>
    <h3>specie</h3>
    <p>{specie}</p>
    </div> 
    </section>):(""
      )}
      <hr style={{
            color: "orange",
            backgroundColor: "orange",
            width: "95vw",
            alignContent: "center",
            margin: "0",
        }}/>  
    </article>
  )
}

export default Peppers;