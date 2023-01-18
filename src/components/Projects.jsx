import { Card } from "react-bootstrap";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="project-header">My Projects</h2>
      <div className="row g-0">
        <Card style={{ minHeight: "540px" }} className="border-0">
          <div className="row pl-auto">
            <div className="col-lg-5" id='desktopCamp'>
              <Card.Img
                src="scht/CampDesk.png"
                className="border-0 h-auto pt-5"
              />
            </div>
            <div className="col-lg-2" id='mobileCamp'>
                <Card.Img src="scht/CampMobile.png" className="border-0 h-auto" />
            </div>
            <div className="col-lg-5 pt-4">
              <Card.Body>
                <Card.Title>
                  <a href="https://campproject-mike.herokuapp.com/home">
                    CAMPWITHME
                  </a>
                </Card.Title>
                <Card.Text>
                  This app is a copy of YelpCamp that was created during the Web
                  Developer Bootcamp. This app provides people with information
                  about different Camps where people can stay during their trip.<br/>
                  Credentials to explore project:<br/>
                  username: mike <br/>
                  password: 1234
                  <br></br>
                  <a target="_blank" href="https://github.com/mikemel31/CampGround-project">Find out more about this project</a>
                <ul className="my-2">Technologies used
                  <li>EJS</li>
                  <li>Express.js / Node.js</li>
                  <li>MongoDB / Mongoose</li>
                  <li>Passport</li>
                  <li>APIs: cloudinary.com, mapbox.com</li>
                  <li>more technologies used at <a target="_blank" href="https://github.com/mikemel31/CampGround-project">GitHub</a></li>
                </ul>
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
      <div className="row pt-4">
        <Card style={{ minHeight: "540px" }} className="border-0">
          <div className="row">
            <div className="col-lg-7 d-inline">
              <img alt="Marvel app" className=" align-self-start img-fluid border-0"
                src="scht/MIP.png"
                style={{transform: 'scale(0.75)'}}
              />
            </div>
            <div className="col-lg-5 pt-4">
              <Card.Body className="pt-5" style={{ minHeight: "140px" }}>
                <Card.Title>
                  <a href="https://mikesmarvel.herokuapp.com/">
                    MarvelProject
                  </a>
                </Card.Title>
                <Card.Text>
                  This app made for Marvel studio fans and gives them oportunity 
                  to know more about their favorite characters and comics. 
                  <br></br>
                  <a target="_blank" href="https://github.com/mikemel31/MarvelProject">Find out more about this project</a>
                  <ul className="my-2"> Technologies used
                    <li>React</li>
                    <li>React Router</li>
                    <li>Bootstrap / CSS</li>
                    <li>Formik</li>
                    <li>Yup</li>
                    <li>Marvel API</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
      <div className="row pt-4">
        <Card style={{ minHeight: "540px" }} className="border-0">
          <div className="row">
            <div className="col-lg-7 d-inline">
              <img alt="FoodApp" className=" align-self-start img-fluid border-0"
                src="scht/FoodDesk.png"
                style={{transform: 'scale(0.75)'}}
              />
            </div>
            <div className="col-lg-5 pt-4">
              <Card.Body className="pt-5" style={{ minHeight: "140px" }}>
                <Card.Title>
                  <a href="https://mikemel31.github.io/SmartFood/">
                  FoodSmart
                  </a>
                </Card.Title>
                <Card.Text>
                  This website was created to follow up the calorie plan that is
                  calculating on site and choose food plan for everyday delivery
                  of precooked food. 
                  <br></br>
                  <a target="_blank" href="https://github.com/mikemel31/SmartFood">Find out more about this project</a>
                  <ul>Technologies used
                    <li>HTML / CSS / Javascript</li>
                    <li>Webpack / Babel</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
