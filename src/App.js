import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: [],
      artist: []
    };
  }
  componentDidMount() {
    fetch("https://fb-assessment.glitch.me/artists")
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
      .catch(error => this.setState({ error: "info not found" }));
  }
  handleClick = e => {
    let artist = this.state.data[e.target.id];
    this.setState({ artist: artist });
  };
  render() {
    const { data, artist } = this.state;
    let artperson = [];
    let nullOb = "";
    Object.keys(artist).length > 0
      ? (artperson = artist)
      : (nullOb = artperson);

    const divStyle = {
      display: "inline-block",
      padding: "5px 0px 0px 5px",
      width: "400px"
    };

    return (
      <Container>
        {data.map((data, artistID) => (
          <div key={data.artistID}>
            <div style={{ width: "350px", height: "100px" }}>
              <ListGroup>
                <ListGroupItem tag="a" href="#">
                  <Col sm="6" xs="12" className="color">
                    <img
                      id={artistID}
                      onClick={this.handleClick}
                      className="rounded-circle textCenter"
                      src={data.imageURL}
                      width="50px"
                      height="50"
                      alt="img"
                    />
                  </Col>
                  <Col
                    sm="6"
                    xs="12"
                    style={{
                      position: "reletive",
                      top: "-50px",
                      width: "300px",
                      left: "60px",
                      marginBottom: "0"
                    }}
                  >
                    <p id={artistID} onClick={this.handleClick}>
                      {" "}
                      {data.firstName} {data.lastName}{" "}
                    </p>
                    <p id={artistID} onClick={this.handleClick}>
                      {" "}
                      {data.art}{" "}
                    </p>
                  </Col>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
        ))}

        <div style={divStyle}>
          <Col>
            {artperson === artist && (
              <React.Fragment>
                <div
                  style={{
                    width: "300px",
                    height: "5%",
                    position: "absolute",
                    bottom: "1000px",
                    left: "500px",
                    padding: "5px 0px 0px 5px"
                  }}
                  className="text-center"
                >
                  <h3>
                    {artperson.firstName} {artperson.lastName}
                  </h3>
                  <p className="img-fluid">{artperson.art}</p>
                  <img
                    className="img-fluid"
                    src={artperson.imageURL}
                    width="30%"
                    height="30%"
                    alt="img"
                  />
                </div>
              </React.Fragment>
            )}
          </Col>
        </div>
      </Container>
    );
  }
}

export default App;
