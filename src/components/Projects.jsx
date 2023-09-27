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
                  <a target="_blank" href="https://github.com/mikemel31/CampGround-project">GitHub</a>
                <ul className="my-2">Technologies used
                  <li>EJS</li>
                  <li>Express.js / Node.js</li>
                  <li>MongoDB / Mongoose</li>
                  <li>Passport</li>
                  <li>APIs: cloudinary.com, mapbox.com</li>
                  <li>more technologies used at <a target="_blank" href="https://github.com/mikemel31/CampGround-project">GitHub</a></li>
                </ul>
                <p>• Coded a user login system, storing encrypted information in cookies and SQL, to allow custom user
experiences based on preferences while maintaining user privacy<br/>
• Dynamically integrated 3rd party APIs: mapbox.com & cloudinary.com which helped reducing latency of the app<br/></p>
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
                  <a target="_blank" href="https://github.com/mikemel31/MarvelProject">GitHub</a>
                  <ul className="my-2"> Technologies used
                    <li>React</li>
                    <li>React Router</li>
                    <li>Bootstrap / CSS</li>
                    <li>Formik</li>
                    <li>Yup</li>
                    <li>Marvel API</li>
                  </ul>
                  <p>• Dynamically integrated asynchronous Axios API calls with minimization efforts to reduce latency and
increase the app’s speed and overall smoothness by 15%<br/>
• Converted image formats to webp to optimize quality and page load time <br/>
• Handle app deployments by utilizing the Heroku<br/></p>
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
                  <a target="_blank" href="https://github.com/mikemel31/SmartFood">GitHub</a>
                  <ul>Technologies used
                    <li>HTML / CSS / Javascript</li>
                    <li>Webpack / Babel</li>
                  </ul>
                  <p>• Used Lazy loading techniques to optimize Page Speed and user experience in general on an overall
80%<br/>
• Utilized the Lighthouse tool to analyze and optimize site performance, SEO, and accessibility metrics<br/>
• Applied webpack to support different assets, configure and improve compile time by 10%<br/></p>
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
