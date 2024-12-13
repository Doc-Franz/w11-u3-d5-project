import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, addToPlayer, removeFromFavourites } from "../redux/actions";
import { HeartFill } from "react-bootstrap-icons";

const AlbumCard = (props) => {
  const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const [album, setAlbum] = useState([]);

  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.player.favouriteSongs);

  const handleClick = (song) => {
    const indexOfSong = favourites.findIndex((obj) => obj.id === song.id);

    if (indexOfSong !== -1) {
      dispatch(removeFromFavourites(indexOfSong));
    } else {
      dispatch(addToFavourites(song));
    }
  };

  const fetchAlbums = (artist) => {
    fetch(URL + artist, {
      headers: {
        "x-rapidapi-key": "73bc5a9167mshba98beb262d1447p13ffd3jsnd83c3e8b8575",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        q: artist
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((data) => {
        setAlbum(data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    fetchAlbums(props.artist);
  }, []);

  return (
    <>
      {album.slice(0, 4).map((song) => {
        const isFavourite = favourites.find((singleSong) => singleSong.id === song.id) !== undefined;

        return (
          <Row className="d-flex flex-column" key={song.id}>
            <Col style={{ cursor: "pointer" }} onClick={() => dispatch(addToPlayer(song))}>
              <img className="img-fluid" src={song.album.cover_medium} alt="track" />
              <p>
                Track: {song.title}
                <br />
                Artist: {song.artist.name}
              </p>
            </Col>

            <Col>
              <HeartFill
                style={{
                  cursor: "pointer",
                  fill: isFavourite ? "white" : "transparent",
                  stroke: "white",
                  strokeWidth: 2
                }}
                viewBox="-1 0 18 16"
                onClick={() => {
                  handleClick(song);
                }}
              />
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default AlbumCard;
