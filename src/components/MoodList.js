function MoodList({ setMood }) {
  return (
    <ol className="mood-list">
      <li>
        Choose a continent of origin:
        <select
          name="select-mood"
          onChange={(event) => setMood(event.target.value)}
        >
          <option>Upbeat</option>
          <option>Melancholic</option>
          <option>Dark</option>
          <option>Soulful</option>
          <option>Party</option>
        </select>
      </li>
    </ol>
  );
}

export default MoodList;
