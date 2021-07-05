import './Peppers.css';
import Toggle from './Toggle';

function Peppers(props){
const { name, origin, shu, specie, image,} = props.hotPepper.fields;

  return(
    <Toggle>
        {({on, toggle}) => (
    <article className="p-article" onClick={toggle}>
    <section className="peppers">
    <img className="p-images" src={image} alt={name}/>
    <h2>{name}</h2>
    </section>

    {on &&
    <section className="p-info">
    <h3>Origin</h3>
    <p>{origin}</p>
    <h3>SHU</h3>
    <p>{shu}</p>
    <h3>Specie</h3>
    <p>{specie}</p>
    </section>}
    </article>
    )}
    </Toggle>
  )
}

export default Peppers;