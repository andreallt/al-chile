import Heat from "./Heat";
import "./Sauce.css";
import Toggle from "./Toggle";

function Sauce(props) {
  const { sauce, peppers, shu, hotLevels, image, pairing } =
    props.hotSauce.fields;

  return (
    <Toggle>
      {({ on, toggle }) => (
        <article className="sauce-article">
          <img onClick={toggle} src={image} alt={sauce} />
          <div className="sauce-heat">
            <Heat hotLevels={hotLevels} />
            <h2>{sauce}</h2>

            {on && (
              <section className="info-box">
                <div className="info">
                  <h3>Great on:</h3>
                  <p>{pairing}</p>
                  <h3>Scoville Heat Units:</h3>
                  <p>{shu}</p>
                  <h3>Peppers:</h3>
                  <p>{peppers}</p>
                </div>
              </section>
            )}
          </div>
        </article>
      )}
    </Toggle>
  );
}

export default Sauce;
