import { Col, Nav } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-link">
        <Nav.Item>
            <a href={link}>Link</a>
          </Nav.Item>
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}