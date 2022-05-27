function HelpPopUp(props) {
  if (props.help === true) {
    return (
      <div className="help">
        <h2>How to use this app</h2>
        <p>
          Choose your search criteria from the drop down menu and click
          'Recommend me!' to see a list of artists matching at least 2 of the
          search criteria.
        </p>
        <button
          className="hide-btn"
          onClick={() => {
            props.setHelp(false);
          }}
        >
          Hide
        </button>
      </div>
    );
  }
}

export default HelpPopUp;
