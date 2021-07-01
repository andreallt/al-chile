import { useEffect, useState } from "react"; 
import { baseURL, secondURL, config } from './services';
import { Route, Link} from "react-router-dom";
import axios from "axios";
import Sauce from './components/Sauce';
import Form from './components/Form';
import Nav from './components/Nav';
import Peppers from "./components/Peppers";
import Home from "./components/Home";
import './App.css';

function App() {
  const [hotSauces, setHotSauces] = useState([]);
  const [hotPeppers, setHotPeppers] = useState([]);
  const [toggleFetch, setToggleFetch] = useState (true);


  useEffect(() => {
  const getHot = async () => {
    const resp = await axios.get(baseURL, config);
   setHotSauces(resp.data.records)
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
<header>
   <Link style={{
          textDecoration: "none",
          color: "white",
          fontFamily: "Red Hat Text, sans-serif",
          fontWeight: 500,
          fontSize: 50,
          }}
         to="/">Al Chile</Link>
</header>

    <Nav />

    <Route exact path="/">
    <Home />
    </Route>

      <Route path="/hot-sauce">
        <main>
    
        <p className="hot-sauce"> Here is a list of the best Hot Sauces from around the world and pairing recommendations.</p>
        
          {hotSauces.map((hotSauce) => (
            <Sauce key={hotSauce.id} hotSauce={hotSauce} setToggleFetch={setToggleFetch}/> ))}

       <div className="add-sauce">
        <h3>
          Can't find your favorite sauce?
        </h3>
        <Link to="/new">
        <button style={{margin: "5px",}}>Add it!</button>
        </Link>
        </div>
        </main>
      </Route>

    <Route path="/peppers">
        <main>
            <p className="hot-p">  Due to the large and changing number of cultivars,
            and the variation of cultivar names in different regions there is an estimated 
            50,000 pepper varieties. <br/> HERE ARE A FEW: </p>
            <br/> <hr/>

             <section className="pepper-grid">    
              {hotPeppers.map((hotPepper) => (
                <Peppers key={hotPepper.id} hotPepper={hotPepper} setToggleFetch={setToggleFetch}/> ))}    
               </section>
        </main>
    </Route>

      <Route path="/new">
      <Form setToggleFetch={setToggleFetch}/>
      </Route>

    </div>
  );
}

export default App;
