import { Link } from 'react-router-dom';
import axios from "axios";
import { baseURL, config} from "../services"

function Sauce(props){
const { sauce, peppers, shu, hotLevels, image, pairing } = props.hotSauce.fields;

const deleteSnack = async () => {
  const hotURL = `${baseURL}/${props.hotSauce.id}`;
  await axios.delete(hotURL, config);
  props.setToggleFetch ((curr) => !curr);
}

  return(
    <article>
    <h3>{sauce}</h3>
    <p>{peppers}</p>
    <p>{shu}</p>
    <p>{hotLevels}</p>
    <img src={image} alt={sauce}></img>
    <p>{pairing}</p>
    </article>
  )
}

export default Sauce;