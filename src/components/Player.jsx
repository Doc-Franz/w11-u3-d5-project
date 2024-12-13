import { Col, Container, Row } from "react-bootstrap";
import shuffle from "../assets/shuffle.png";
import prev from "../assets/prev.png";
import play from "../assets/play.png";
import next from "../assets/next.png";
import repeat from "../assets/repeat.png";
import { useSelector } from "react-redux";

const Player = () => {
  const songToPlay = useSelector((state) => state.player.content);

  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row className="row h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className={`row h-100 d-flex justify-content-center align-items-center`}>
            {songToPlay && (
              <Col className="col-6 col-md-4 d-flex justify-content-start">
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
