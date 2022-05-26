import AlbumList from "./AlbumList";
import NextButton from "./NextButton";
import { useState } from "react";
import BackButton from "./BackButton";
function Result(props, { setRender }) {
  const [page, setPage] = useState(0);
  function nextArtist(resArray) {
    if (page < resArray.length - 1) setPage((curr) => curr + 1);
  }
  function prevArtist(resArray) {
    if (page <= resArray.length && page > 0) setPage((curr) => curr - 1);
  }
  if (props.render === true) {
    if (props.resArray.length !== 0) {
      return (
        <div className="result">
          <p>{props.resArray.length} artist(s) found!</p>
          <BackButton resArray={props.resArray} prevArtist={prevArtist} />
          <NextButton resArray={props.resArray} nextArtist={nextArtist} />

          <h2>You should listen to...</h2>
          <img
            className="result-img"
            src={props.resArray[page].img}
            alt="artist-img"
          ></img>
          <h2 className="artist-name">{props.resArray[page].name}</h2>
          <h3 className="artist-desc">Artist Description</h3>
          <p className="artist-info">{props.resArray[page].description}</p>
          <h3>Where to start?</h3>
          <AlbumList albums={props.resArray[page].albums} />
          <button className="reset" onClick={() => props.setRender(false)}>
            Reset
          </button>
        </div>
      );
    } else return <h2>No matches found...</h2>;
  } else return <h2>Select your criteria!</h2>;
}

export default Result;
