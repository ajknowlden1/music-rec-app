import "./App.css";
import Result from "./components/Result";
import GenreList from "./components/GenreList";
import DecadeList from "./components/DecadeList";
import OriginList from "./components/OriginList";

import { useState } from "react";

function App() {
  const [genre, setGenre] = useState("Rock");
  const [decade, setDecade] = useState("60s");
  const [origin, setOrigin] = useState("Europe");
  const [result, setResult] = useState([]);
  const [render, setRender] = useState(false);
  const artists = [
    {
      name: "New Order",
      genre: ["Electronic", "Pop", "Alternative/Indie"],
      decade: "80s",
      origin: "Europe",
      description: `New Order are an English rock band formed in 1980 by vocalist and
          guitarist Bernard Sumner, bassist Peter Hook and drummer Stephen
          Morris. The band formed after the demise of Joy Division, following
          the suicide of lead singer Ian Curtis. They were joined by Gillian
          Gilbert on keyboards later that year. New Order's integration of
          post-punk with electronic and dance music made them one of the most
          acclaimed and influential bands of the 1980s. They were the flagship
          band for Manchester-based independent record label Factory Records and
          its nightclub The Haçienda, and they worked in long-term collaboration
          with graphic designer Peter Saville.`,
      albums: [
        { albumName: "Power, Corruption and Lies", releaseYear: 1983 },
        { albumName: "Brotherhood", releaseYear: 1985 },
        { albumName: "Technique", releaseYear: 1989 },
      ],
      img: "https://i.pinimg.com/originals/a7/e9/13/a7e9130304d508714d5007c0210a394c.png",
    },
    {
      name: "Metallica",
      genre: ["Metal", "Rock"],
      decade: ["80s", "90s"],
      origin: "North America",
      description: `Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career. The band's fast tempos, instrumentals and aggressive musicianship made them one of the founding "big four" bands of thrash metal, alongside Megadeth, Anthrax and Slayer. Metallica's current lineup comprises founding members and primary songwriters Hetfield and Ulrich, longtime lead guitarist Kirk Hammett and bassist Robert Trujillo. Guitarist Dave Mustaine (who went on to form Megadeth after being fired from the band) and bassists Ron McGovney, Cliff Burton and Jason Newsted are former members of the band.`,
      albums: [
        { albumName: "Master of Puppets", releaseYear: 1986 },
        { albumName: "...and Justice for All", releaseYear: 1989 },
        { albumName: "Metallica", releaseYear: 1991 },
      ],
      img: "https://i.pinimg.com/originals/e8/4c/f3/e84cf3e6b5b820582fc81be5f6c5a034.jpg",
    },
    {
      name: "Ride",
      genre: ["Alternative/Indie", "Rock"],
      decade: ["90s"],
      origin: "Europe",
      description: `Ride are an English rock band formed in Oxford in 1988. The band consists of Andy Bell, Mark Gardener, Laurence "Loz" Colbert, and Steve Queralt. The band were initially part of the "shoegazing" scene that emerged in England during the early 1990s. Following the break-up of the band in 1996, members moved on to various other projects, most notably Bell who became the bassist for Oasis. In 2001, the band briefly reunited for a one-off performance for a television show. Ride announced their second reunion in November 2014. Their debut album Nowhere has been named one of the important albums of the shoegazing genre. They achieved their biggest commercial success with their 1992 single "Leave Them All Behind", which reached No. 9 on the UK Singles Chart.`,
      albums: [
        { albumName: "Nowhere", releaseYear: 1990 },
        { albumName: "Going Blank Again", releaseYear: 1992 },
      ],
      img: "https://ksassets.timeincuk.net/wp/uploads/sites/55/2014/11/2014Ride_Getty144588558_10060314-1.jpg",
    },
    {
      name: "The Police",
      genre: ["Pop", "Rock"],
      decade: ["70s", "80s"],
      origin: "Europe",
      description: `Ride are an English rock band formed in Oxford in 1988. The band consists of Andy Bell, Mark Gardener, Laurence "Loz" Colbert, and Steve Queralt. The band were initially part of the "shoegazing" scene that emerged in England during the early 1990s. Following the break-up of the band in 1996, members moved on to various other projects, most notably Bell who became the bassist for Oasis. In 2001, the band briefly reunited for a one-off performance for a television show. Ride announced their second reunion in November 2014. Their debut album Nowhere has been named one of the important albums of the shoegazing genre. They achieved their biggest commercial success with their 1992 single "Leave Them All Behind", which reached No. 9 on the UK Singles Chart.`,
      albums: [
        { albumName: "Outlandos d'Amour", releaseYear: 1978 },
        { albumName: "Synchronicity", releaseYear: 1983 },
      ],
      img: "https://i.pinimg.com/originals/72/af/a6/72afa6312aef3f4d222aa0c1c32ae3ed.jpg",
    },
  ];

  function getResult(genre, decade, origin) {
    let resultArr = artists.filter((artist) => {
      return (
        (artist.genre.includes(genre) && artist.decade.includes(decade)) ||
        (artist.origin.includes(origin) && artist.genre.includes(genre)) ||
        (artist.origin.includes(origin) && artist.decade.includes(decade))
      );
    });
    setResult(resultArr);
    setRender(true);

    console.log(result, render);
  }
  return (
    <div className="app-wrapper">
      <h1 className="header">What should I listen to?</h1>
      <div className="main-display">
        <GenreList setGenre={setGenre} />
        <DecadeList setDecade={setDecade} />
        <OriginList setOrigin={setOrigin} />
      </div>
      <button
        className="submit-btn"
        onClick={() => getResult(genre, decade, origin)}
      >
        Reccomend me!
      </button>
      <Result render={render} resArray={result} setRender={setRender} />
    </div>
  );
}

export default App;
