import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prakhar Jain </span>
            from <span className="purple">Ajmer, Rajasthan, India.</span>
            <br />
            I am currently employed as a App Development Intern at Celebal
            Technologies.
            <br />
            I have completed my B.Tech in Computer Science and Engineering from
            Jaypee University of information Technology, Solan.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Gymming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Crafting code that speaks louder than words!"{" "}
          </p>
          <footer className="blockquote-footer">Prakhar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
