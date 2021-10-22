import React from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import "../player.css";

const mapStateToProps = (state) => ({
  song: state.player.current,
  album: state.player.album,
});

const Player = ({ song, album }) => (
  <div className="container-fluid fixed-bottom bg-container pt-1">
    <Row>
      <Col xs="5">
        {album[0] && song[0] ? (
          <div className="player-align d-flex">
            <div>
              <img className="img-fluid" src={album[0].cover_small} alt="1" />
            </div>
            <div className="text-container">
              <div className="song">{song[0].title} </div>
              <div className="album">{album[0].title}</div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </Col>
      <Col xs="7">
        <Row className="mr-auto">
          <div className="col-lg-10">
            <Row>
              <div className="col-6 col-md-4 col-lg-2 offset-md-4 offset-lg-5 playerControls mt-1">
                <Row>
                  <a href="/">
                    <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
                  </a>
                  <a href="/">
                    <img src="/playerbuttons/Previous.png" alt="shuffle" />
                  </a>
                  <a href="/">
                    <img src="/playerbuttons/Play.png" alt="shuffle" />
                  </a>
                  <a href="/">
                    <img src="/playerbuttons/Next.png" alt="shuffle" />
                  </a>
                  <a href="/">
                    <img src="/playerbuttons/Repeat.png" alt="shuffle" />
                  </a>
                </Row>
              </div>
            </Row>
            <Row className="justify-content-center playBar py-3">
              <div className="col-8 col-md-6">
                <div id="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </Row>
          </div>
        </Row>
      </Col>
    </Row>
  </div>
);

export default connect(mapStateToProps)(Player);
