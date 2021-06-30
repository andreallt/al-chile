import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { baseURL, config } from '../services';

function Form(props) {
  const [sauce, setSauce] = useState ('')
  const [peppers, setPeppers] = useState('')
  const [shu, setShu] = useState(1);
  const [hotLevels, setHotLevels] = useState('');
  const [image, setImage] = useState('');
  const [pairing, setPairing] = useState('');
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
   if( params.id && props.hotSauces.length > 0){
     const sauceToEdit = props.hotSauces.find((hotSauce) => hotSauce.id === params.id);
     if (sauceToEdit) {
      setSauce(sauceToEdit.fields.sauce);
      setPeppers(sauceToEdit.fields.peppers);
      setShu(sauceToEdit.fields.shu);
      setHotLevels(sauceToEdit.fields.hotLevels);
      setImage(sauceToEdit.fields.image);
      setPairing(sauceToEdit.fields.pairing);
     }
    }
  },[params.id, props.hotSauces])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSauce = {
      sauce,
      peppers,
      shu,
      hotLevels,
      image,
      pairing,
    };
    if(params.id){
      const sauceURL =`${baseURL}/${params.id}`;
      await axios.put(sauceURL, { fields: newSauce },
        config );
    } else {
    await axios.post(baseURL, {fields: newSauce}, config);
    }
   props.setToggleFetch((curr) => !curr);
   setTimeout(()=> {
   history.push('/');
  }, 500);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="sauce"> Sauce: </label>
      <input id="suace" type="text"
      autoComplete="off"
      required
      value={sauce} onChange={(e) => setSauce(e.target.value)}/>

      <label htmlFor="peppers">Peppers: </label>
      <textarea id="peppers" 
      required
      value={peppers} onChange={(e) => setPeppers(e.target.value)}></textarea>

      <label htmlFor="pairing">Pairing: </label>
      <textarea id="pairing" 
      required
      value={pairing} onChange={(e) => setPairing (e.target.value)}></textarea>

      <div className="hotLevels">
      <label htmlFor="hotLevels" style={{ margin: "0",}}>Heat Levels:</label>
      <p style={{ margin: "0",}}> (1 to 5) </p>
      <input type="range" id="hotLevels"  min={1} max={5} value={hotLevels} onChange={(e) => setHotLevels(e.target.valueAsNumber)}/>
      </div>

      <button type="submit"> Add Heat </button>
    </form>
  );
}
export default Form;