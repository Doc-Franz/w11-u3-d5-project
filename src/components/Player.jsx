import { Col, Container, Row } from "react-bootstrap";
import shuffle from "../assets/shuffle.png";
import prev from "../assets/prev.png";
import play from "../assets/play.png";
import next from "../assets/next.png";
import repeat from "../assets/repeat.png";
import { useDispatch, useSelector } from "react-redux";
import { HeartFill } from "react-bootstrap-icons";
import { addToFavourites, removeFromFavourites } from "../redux/actions";

const Player = () => {
  const songToPlay = useSelector((state) => state.player.content);
  const favourites = useSelector((state) => state.player.favouriteSongs);
  const dispatch = useDispatch();

  const isFavourite = songToPlay ? favourites.find((singleSong) => singleSong.id === songToPlay.id) !== undefined : false;

  const handleClick = (song) => {
    const indexOfSong = favourites.findIndex((obj) => obj.id === song.id);

    if (indexOfSong !== -1) {
      dispatch(removeFromFavourites(indexOfSong));
    } else {
      dispatch(addToFavourites(song));
    }
  };

  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row className="row h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className={`row h-100 d-flex justify-content-center align-items-center`}>
            {songToPlay && (
              <Col className="col-6 col-md-4 d-flex d-flex align-items-center">
                <HeartFill
                  className="me-3 "
                  style={{
                    cursor: "pointer",
                    fill: isFavourite ? "white" : "transparent",
                    stroke: "white",
                    strokeWidth: 2
                  }}
                  viewBox="-1 0 18 16"
                  onClick={() => {
                    handleClick(songToPlay);
                  }}
                />
                <img className="img-fluid me-3" src={songToPlay.album.cover_medium} alt="track" style={{ width: "70px", height: "70px" }} />
                <p style={{ color: "white", fontSize: "0.8rem" }}>
                  Track: {songToPlay.title}
                  <br />
                  Artist: {songToPlay.artist.name}
                </p>
              </Col>
            )}
            <Col className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
