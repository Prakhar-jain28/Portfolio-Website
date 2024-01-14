import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="A Full-Stack chatting application with one-on-one as well as group chatting features. Uses Socket.io for real-time
              communication and encrypts the message using AES encryption algorithm."
              ghLink="https://github.com/Prakhar-jain28/MERN-Chat-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="A Video Conferencing web application made using WebRTC for real time communication. It has multiple features like present screen, WhiteBoard, chatroom etc. "
              ghLink="https://github.com/Prakhar-jain28/Connect-Video-conferencing-web-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="CPU Scheduling Algorithm"
              description="A Menu-Driven C++ program that calculates the Average Waiting Time, Turnaround Time, and Waiting Time of processes. The
              Scheduling algorithms used are - FCFS, SJF, Round Robin, and Priority Scheduling."
              ghLink="https://github.com/Prakhar-jain28/CPU-Scheduling"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
