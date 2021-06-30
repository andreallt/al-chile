import { useState } from 'react';

function Home(){
const [showMore, setShowMore] = useState(false);
const [moreShu, setMoreShu] = useState(false);

function toggleChili() {
  (showMore === false) ? setShowMore(true)
  : setShowMore(false)
}

function toggleShu() {
  (moreShu === false) ? setMoreShu(true)
  : setMoreShu(false)
}

  return(
<section className="home">
<p style={{textAlign:"center",}}> If you love all things spicy and hot-sauce, you are in the right place! </p> <br/>
<h3 >Chili</h3>
<div className="chile">
<p style={{
          fontWeight: "100",
          fontStyle: "italic",
          color: "white",
          marginTop: "0",
          }}>🌶️ (From Nahuatl chīlli)</p>

<p onClick={toggleChili} > Berry-fruit of plants from the genus Capsicum 
          which are members of the nightshade family, Solanaceae.
          {showMore === true ?(
          <p> Chili peppers are widely used in many cuisines as a spice to add pungent heat to dishes.
          Capsaicin and related compounds known as capsaicinoids are the substances giving chili peppers
          their intensity when ingested or applied topically. </p>):(" +")}
 </p>
 </div>

<h3 style={{
          marginTop: "15px",
          }}> Heat Levels </h3>
<div className="chile">
<p style={{
          fontWeight: "100",
          fontStyle: "italic",
          color: "white",
          marginTop: "0",
          }}> 🔥 The Scoville Scale </p>
<p  onClick={toggleShu} > Scoville Heat Unit (SHU) were named for scientist Wilbur Scoville in 1912.
          {moreShu === true ?(
            <p>
          The measurements are divided into multiples of 100. Note that 1 part per 1,000,000 
          dilutions of water is rated at 1.5 Scoville Units. Pure capsaicin, the stuff that 
          makes chili peppers hot, is rated between 15 – 16,000,000 Scoville heat units.</p> 
          ):(" +")}
 </p>         
</div>


</section>
  )
}

export default Home;