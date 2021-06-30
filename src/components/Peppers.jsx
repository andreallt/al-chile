import { useState } from 'react';

function Peppers(props){
const { name, origin, shu, specie, image,} = props.hotPepper.fields;
const [showMore, setShowMore] = useState(false);

function toggle() {
  (showMore === false) ? setShowMore(true)
  : setShowMore(false)
}

  return(
    <article onClick={toggle}>
    <section className="peppers">
    <img className="p-images" src={image} alt={name}/>
    <h2>{name}</h2>
    </section>

    {showMore === true ?(
    <section className="p-info">
    <h3>Origin</h3>
    <p>{origin}</p>
    <h3>SHU</h3>
    <p>{shu}</p>
    <h3>Specie</h3>
    <p>{specie}</p>
    </section>):(""
      )}

    </article>
  )
}

export default Peppers;