import React from "react";
import {
  Jumbotron,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

export default function Profile() {
  return (
    <div className="profile-wrapper">
      <Jumbotron className="cover-image"></Jumbotron>
      <Card className="profile">
        <CardImg
          top
          width="100%"
          src="https://images.unsplash.com/photo-1566095763944-23cc46c84c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="name">@JaneDoe</CardTitle>
          <CardText>
            <i className="fa fa-linkedin-square"></i>
            <i className="fa fa-github"></i>
            <i className="fa fa-twitter-square"></i>
          </CardText>
        </CardBody>
      </Card>
      <div className="profile-description">
        <p className="name">Jane Doe</p>
        <span className="online-dot"></span>
        <span className="online">Online</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus
          egestas sed sed risus pretium. Quam lacus suspendisse faucibus
          interdum. Montes nascetur ridiculus mus mauris vitae ultricies leo
          integer malesuada. Rhoncus dolor purus non enim praesent elementum
          facilisis leo.
        </p>
      </div>
      <hr className="my-2" />
    </div>
  );
}
