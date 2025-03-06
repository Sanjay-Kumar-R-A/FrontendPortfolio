import { Col } from "react-bootstrap";
import { BsLink } from "react-icons/bs";
import Button from 'react-bootstrap/Button';


//  MERN clones
export const MernProjectsCard = ({ title, link, imgUrl, gitHub }) => {
  return (
    <Col size={12} xs={10} sm={6} md={4} className="m-auto">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="MERN-clones" />
        <div className="proj-txtx d-grid">
          <h4>{title}</h4>
          <Button variant="outline-success" className="w-40 m-auto">
            <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href={link}>
              <span className="flex align-items-center text-center justify-evenly">
                Live <BsLink />
              </span>
            </a>
          </Button>
          <Button variant="outline-success" className="w-40 m-auto">
            <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href={gitHub}>
              <span className="flex align-items-center text-center justify-evenly">
                Github<BsLink />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </Col>
  )
}


//    React clones
export const ProjectCard = ({ title, link, imgUrl, gitHub }) => {
  return (
    <Col size={12} xs={10} sm={6} md={4} className="m-auto">
      <div className="proj-imgbx" >
        <img src={imgUrl} alt="React-clones" />
        <div className="proj-txtx d-grid">
          <h4>{title}</h4>
          <Button variant="outline-success" className="w-40 m-auto">
            <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href={link}>
              <span className="flex align-items-center text-center justify-evenly">
                Live <BsLink />
              </span>
            </a>
          </Button>
          <Button variant="outline-success" className="w-40 m-auto">
            <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href={gitHub}>
              <span className="flex align-items-center text-center justify-evenly">
                GitHub <BsLink />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </Col>
  )
}


//  Javascript games
export const JsGamesCard = ({ title, link, imgUrl, gitHub }) => {
  return (
    <Col size={12} xs={10} sm={6} md={4} className="m-auto">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="JS_games" />
        <div className="proj-txtx d-grid">
          <h4>{title}</h4>
          <Button variant="outline-success" className="w-40 m-auto">
            <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href={link}>
              <span className="flex align-items-center text-center justify-evenly">
                Live<BsLink />
              </span>
            </a>
          </Button>
          <Button variant="outline-success" className="w-40 m-auto">
            <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href={gitHub}>
              <span className="flex align-items-center text-center justify-evenly">
                Github<BsLink />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </Col>
  )
}