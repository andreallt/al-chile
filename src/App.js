import { useEffect, useState } from "react"; 
import { baseURL, config } from './services';
import { Route } from "react-router-dom";
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

    <Nav/>

     <Route exact path="/">
        <main>
          {hotSauces.map((hotSauce) => (
            <Sauce key={hotSauce.id} hotSauce={hotSauce} setToggleFetch={setToggleFetch}/> ))}
        </main>
      </Route>

      <Route path="/new">
      <Form setToggleFetch={setToggleFetch}/>
      </Route>

    </div>
  );
}

export default App;
