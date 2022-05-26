function GenreList({ setGenre }) {
  return (
    <ol className="genre-list">
      <li>
        Choose a genre:
        <select name="genre" onChange={(event) => setGenre(event.target.value)}>
          <option>Rock</option>
          <option>Pop</option>
          <option>Electronic</option>
          <option>Metal</option>
          <option>Hip Hop</option>
          <option>Alternative/Indie</option>
        </select>
      </li>
    </ol>
  );
}

export default GenreList;
