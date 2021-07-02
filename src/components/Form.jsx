import axios from "axios";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { baseURL, config } from '../services';
import "./Form.css"

function Form(props) {
  const [sauce, setSauce] = useState ('')
  const [peppers, setPeppers] = useState('')
  const [shu, setShu] = useState(100);
  const [hotLevels, setHotLevels] = useState('');
  const [image, setImage] = useState('https://pbs.twimg.com/media/DX5LayzUQAEWyW2.jpg');
  const [pairing, setPairing] = useState('');
  const params = useParams();
  const history = useHistory();


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
   history.push('/hot-sauce');
  }, 500);
  }

  const newShu = (shu) => {
    if (hotLevels >= 5){
      setShu(1500000) 
    }else if (hotLevels === 4){
      setShu(500000) 
    }else if (hotLevels === 3){
      setShu(100000)
    }else if (hotLevels === 2){
      setShu(50000)
    }else if (hotLevels === 1){
      setShu(-2000)
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="input-div">
      <label htmlFor="sauce"> Sauce: </label>
      <input id="suace" type="text"
      autoComplete="off"
      required
      value={sauce} onChange={(e) => setSauce(e.target.value)}/>

      <label htmlFor="peppers">Peppers: </label>
      <input id="peppers" 
      required
      value={peppers} onChange={(e) => setPeppers(e.target.value)}></input>

      </div>
      
      <div className="pairing">
      <label htmlFor="pairing">Pairing: </label>
      <textarea id="pairing" 
      required min={1} max={100}
      value={pairing} onChange={(e) => setPairing(e.target.value)}></textarea>
      </div>
      
      <div className="hotLevels">
      <label className="hotLevels" htmlFor="hotLevels" style={{ margin: "0",}}>Heat Levels:</label>
      <p style={{ margin: "0",}}> (1 to 5) </p>
      <input className="hotLevels" type="range" id="hotLevels"  min={1} max={5} value={hotLevels} onChange={(e) => setHotLevels(e.target.valueAsNumber)} />
      </div>

      <button value={shu} onClick={newShu} className="add-button" type="submit"> Add Heat </button>
    </form>
  );
}
export default Form;