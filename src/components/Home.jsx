import Toggle from "./Toggle";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <h1>
        If you love all things spicy and hot-sauce, you are in the right place!
      </h1>
      <br />
      <div className="home-box">
        <div className="chile">
          <h3>Chili</h3>
          <p className="sub-title">🌶️ (From Nahuatl chīlli)</p>
          <Toggle>
            {({ on, toggle }) => (
              <p onClick={toggle}>
                Berry-fruit of plants from the genus Capsicum which are members
                of the nightshade family, Solanaceae.
                {on && (
                  <p>
                    Chili peppers are widely used in many cuisines as a spice to
                    add pungent heat to dishes. Capsaicin and related compounds
                    known as capsaicinoids are the substances giving chili
                    peppers their intensity when ingested or applied topically.
                  </p>
                )}
              </p>
            )}
          </Toggle>
        </div>

        <div className="chile">
          <h3>Heat Levels</h3>
          <p className="sub-title">🔥 The Scoville Scale</p>
          <Toggle>
            {({ on, toggle }) => (
              <p onClick={toggle}>
                Scoville Heat Unit (SHU) were named for scientist Wilbur
                Scoville in 1912.
                {on && (
                  <p>
                    The measurements are divided into multiples of 100. Note
                    that 1 part per 1,000,000 dilutions of water is rated at 1.5
                    Scoville Units. Pure capsaicin, the stuff that makes chili
                    peppers hot, is rated between 15 – 16,000,000 Scoville heat
                    units.
                  </p>
                )}
              </p>
            )}
          </Toggle>
        </div>
      </div>
    </section>
  );
}

export default Home;
