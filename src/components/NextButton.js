function NextButton(props, { nextArtist }) {
  if (props.resArray.length > 1) {
    return (
      <button
        className="next-btn"
        onClick={() => props.nextArtist(props.resArray)}
      >
        Next
      </button>
    );
  }
}

export default NextButton;
