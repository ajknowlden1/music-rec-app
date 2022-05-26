function DecadeList({ setDecade }) {
  return (
    <ol className="decade-list">
      <li>
        Choose a decade:
        <select
          name="select-decade"
          onChange={(event) => setDecade(event.target.value)}
        >
          <option>60s</option>
          <option>70s</option>
          <option>80s</option>
          <option>90s</option>
          <option>2000s</option>
          <option>Contemporary</option>
        </select>
      </li>
    </ol>
  );
}

export default DecadeList;
