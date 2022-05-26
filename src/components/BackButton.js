function BackButton(props, { prevArtist }) {
  if (props.resArray.length > 1 && props.currentPage !== 0) {
    return (
      <button
        className="prev-btn"
        onClick={() => props.prevArtist(props.resArray)}
      >
        Previous
      </button>
    );
  }
}

export default BackButton;
