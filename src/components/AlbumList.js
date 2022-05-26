function AlbumList(props) {
  return (
    <ul className="album-list">
      {props.albums.map((album) => {
        return (
          <li key={album.albumName}>
            {album.albumName} - {album.releaseYear}
          </li>
        );
      })}
    </ul>
  );
}

export default AlbumList;
