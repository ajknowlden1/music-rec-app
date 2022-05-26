function OriginList({ setOrigin }) {
  return (
    <ol className="origin-list">
      <li>
        Choose a continent of origin:
        <select
          name="select-origin"
          onChange={(event) => setOrigin(event.target.value)}
        >
          <option>Europe</option>
          <option>North America</option>
          <option>South America</option>
          <option>Asia</option>
          <option>Africa</option>
          <option>Rest of World</option>
        </select>
      </li>
    </ol>
  );
}

export default OriginList;
