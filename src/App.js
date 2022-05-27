import "./App.css";
import Result from "./components/Result";
import GenreList from "./components/GenreList";
import DecadeList from "./components/DecadeList";
import OriginList from "./components/OriginList";

import { useState } from "react";
import HelpPopUp from "./components/HelpPopUp";

function App() {
  const [genre, setGenre] = useState("Rock");
  const [decade, setDecade] = useState("60s");
  const [origin, setOrigin] = useState("Europe");
  const [result, setResult] = useState([]);
  const [render, setRender] = useState(false);
  const [help, setHelp] = useState(false);
  const [match, setMatch] = useState(true);
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
    {
      name: "Tears for Fears",
      genre: ["Pop", "Rock"],
      decade: ["80s"],
      origin: "Europe",
      description: `Tears for Fears are an English pop rock band formed in Bath, England, in 1981 by Roland Orzabal and Curt Smith. Founded after the dissolution of their first band, the mod-influenced Graduate, Tears for Fears were associated with the new wave synthesizer bands of the early 1980s, and attained international chart success. Tears for Fears were part of the MTV-driven Second British Invasion of the US.`,
      albums: [
        { albumName: "Songs from The Big Chair", releaseYear: 1984 },
        { albumName: "The Seeds of Love", releaseYear: 1983 },
      ],
      img: "https://www.tvovermind.com/wp-content/uploads/2018/01/Tears-for-Fears.jpg",
    },
    {
      name: "LTJ Bukem",
      genre: ["Electronic"],
      decade: ["90s"],
      origin: "Europe",
      description: `Daniel Williamson, better known as LTJ Bukem, is a British drum and bass musician, producer and DJ. He and his record label Good Looking are most associated with the jazzy, atmospheric side of drum and bass music`,
      albums: [{ albumName: "Journey Inwards", releaseYear: 2000 }],
      img: "https://artist3.cdn107.com/bf9/bf9a0b5902185a6a13c0f7673f821280.jpg",
    },
    {
      name: "Kate Bush",
      genre: ["Pop"],
      decade: ["70s", "80s"],
      origin: "Europe",
      description: `Catherine Bush CBE is an English singer, songwriter, musician, dancer and record producer. In 1978, aged 19, she topped the UK Singles Chart for four weeks with her debut single "Wuthering Heights", becoming the first female artist to achieve a UK number one with a self-written song. Bush has since released 25 UK Top 40 singles, including the Top 10 hits "The Man with the Child in His Eyes", "Babooshka", "Running Up That Hill", "Don't Give Up" (a duet with Peter Gabriel) and "King of the Mountain". All ten of her studio albums reached the UK Top 10, including the UK number one albums Never for Ever (1980), Hounds of Love (1985) and the compilation The Whole Story (1986). She was the first British solo female artist to top the UK album charts and the first female artist to enter the album chart at number one.`,
      albums: [{ albumName: "Never Forever", releaseYear: 1980 }],
      img: "https://observer.com/wp-content/uploads/sites/2/2016/11/gettyimages-3281809.jpg?quality=80&strip",
    },
    {
      name: "Mazzy Star",
      genre: ["Pop", "Alternative/Indie"],
      decade: ["80s", "90s"],
      origin: "North America",
      description: `Mazzy Star is an American alternative rock band formed in 1988 in Santa Monica, California, from remnants of the group Opal. Founding member David Roback's friend Hope Sandoval became the group's vocalist when Kendra Smith left Opal.`,
      albums: [{ albumName: "She Hangs Brightly", releaseYear: 1990 }],
      img: "http://365daysinmusic.com/wp-content/uploads/2013/02/Mazzy-Star.jpg",
    },
    {
      name: "Sepultura",
      genre: ["Metal"],
      decade: ["80s", "90s"],
      origin: "South America",
      description: `Sepultura is a Brazilian heavy metal band from Belo Horizonte. Formed in 1984 by brothers Max and Igor Cavalera, the band was a major force in the groove metal, thrash metal and death metal genres during the late 1980s and early 1990s, with their later experiments drawing influence from alternative metal, world music, nu metal, hardcore punk, and industrial metal. Sepultura has also been credited as one of the second wave of thrash metal acts from the late 1980s to early-to-mid-1990s`,
      albums: [
        { albumName: "Arise", releaseYear: 1991 },
        { albumName: "Roots", releaseYear: 1996 },
      ],
      img: "https://loadedradio.com/wp-content/uploads/2015/06/sepultura92.jpg",
    },
    {
      name: "Vince Staples",
      genre: ["Hip Hop"],
      decade: ["Contemporary"],
      origin: "North America",
      description: `Vincent Jamal Staples is an American rapper and singer. He is a member of the hip hop trio Cutthroat Boyz alongside fellow California rappers Aston Matthews and Joey Fatts. Staples was once a close associate of Odd Future, Mike G and Earl Sweatshirt in particular. He is currently signed to Motown and Talib Kweli's Blacksmith Records.`,
      albums: [
        { albumName: "Big Fish Theory", releaseYear: 2017 },
        { albumName: "FM!", releaseYear: 2018 },
      ],
      img: "https://www.chicagotribune.com/resizer/2FwEKqDASgvQB3ESp_EiknBJiJc=/1200x0/top/www.trbimg.com/img-550ed2dd/turbine/redeye-vince-staples-interview-20150322",
    },
    {
      name: "Miki Matsubara",
      genre: ["Pop"],
      decade: ["80s"],
      origin: "Asia",
      description: `Miki Matsubara (松原 みき, Matsubara Miki) was a Japanese composer, lyricist, and singer from Nishi-ku, Sakai, Osaka, Japan. Matsubara started her career in 1979 and is known from hit songs such as her debut and immediate breakthrough "Mayonaka no Door (Stay with Me)" which has been covered by numerous artists, including Akina Nakamori. The song was ranked 28th on the Oricon Chart, and according to that chart sold 104,000 copies and 300,000 copies announced by Canyon records. Some of her other known songs were "Neat na gogo san-ji (ニートな午後3時)" and "The Winner" among others.`,
      albums: [{ albumName: "Super Best", releaseYear: 1986 }],
      img: "https://lastfm.freetls.fastly.net/i/u/ar0/11e79043370fabce083ab48e844ca2f5.jpg",
    },
  ];

  function getResult(genre, decade, origin) {
    let resultArr = artists.filter((artist) => {
      return (
        (artist.genre.includes(genre) && artist.decade.includes(decade)) ||
        (artist.origin.includes(origin) && artist.genre.includes(genre)) ||
        (artist.decade.includes(decade) && artist.origin.includes(origin))
      );
    });

    if (resultArr.length !== 0) {
      setResult(resultArr);
      setRender(true);

      setMatch(true);
    } else setMatch(false);

    console.log(result, render);
  }

  function NoMatch(props) {
    if (match === false) return <h2>No matches found...</h2>;
  }

  return (
    <div className="app-wrapper">
      <h1 className="header">What should I listen to?</h1>
      <div className="main-display">
        <button
          className="help-btn"
          onClick={() => {
            setHelp(true);
          }}
        >
          Help
        </button>
        <HelpPopUp help={help} setHelp={setHelp} />
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
      <NoMatch />
      <Result render={render} resArray={result} setRender={setRender} />
    </div>
  );
}

export default App;
