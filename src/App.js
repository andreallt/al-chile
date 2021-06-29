import { useEffect, useState } from "react"; 
import { baseURL, config } from './services';
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Sauce from './components/Sauce';
import Form from './components/Form';
import Nav from './components/Nav';
import './App.css';

function App() {
  const [hotSauces, setHotSauces] = useState([]);
  const [toggleFetch, setToggleFetch] = useState (true);

  useEffect(() => {
  const getHot = async () => {
    const resp = await axios.get(baseURL, config);
   setHotSauces(resp.data.records)
   console.log(resp.data.records)
   }
   getHot();
  }, [toggleFetch]);

  return (
    <div className="App">
      <nav>
    <Link to="/">Al Chile</Link>
     <Link to="/new"> Hot Sauce </Link>
     </nav>
     <Route exact path="/">
        <main>
          {hotSauces.map((hotSauce) => (
            <Sauce key={hotSauce.id} hotSauce={hotSauce} setToggleFetch={setToggleFetch}/> ))}
        </main>
      </Route>
  
    </div>
  );
}

export default App;
