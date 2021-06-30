import { useEffect, useState } from "react"; 
import { baseURL, secondURL, config } from './services';
import { Route } from "react-router-dom";
import axios from "axios";
import Sauce from './components/Sauce';
import Form from './components/Form';
import Nav from './components/Nav';
import Peppers from "./components/Peppers";
import './App.css';

function App() {
  const [hotSauces, setHotSauces] = useState([]);
  const [hotPeppers, setHotPeppers] = useState([]);
  const [toggleFetch, setToggleFetch] = useState (true);


  useEffect(() => {
  const getHot = async () => {
    const resp = await axios.get(baseURL, config);
   setHotSauces(resp.data.records)
   console.log(resp.data.records)
   }
   getHot();
  }, [toggleFetch]);


  useEffect(() => {
    const getPeppers = async () => {
      const resp = await axios.get(secondURL, config);
     setHotPeppers(resp.data.records)
     console.log(resp.data.records)
     }
     getPeppers();
    }, [toggleFetch]);



  return (
    <div className="App">

    <Nav/>

     <Route exact path="/">
        <main>
          {hotSauces.map((hotSauce) => (
            <Sauce key={hotSauce.id} hotSauce={hotSauce} setToggleFetch={setToggleFetch}/> ))}

          {hotPeppers.map((hotPepper) => (
            <Peppers key={hotPepper.id} hotPepper={hotPepper} setToggleFetch={setToggleFetch}/> ))}
        </main>
      </Route>

      <Route path="/new">
      <Form setToggleFetch={setToggleFetch}/>
      </Route>

    </div>
  );
}

export default App;
