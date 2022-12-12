import { Card } from "react-bootstrap";

const campArray = [
  {
    src: "CAMP_SCREENSHOTS/CampS1.png",
    alt: "Main page",
    description: "Main page",
  },
  {
    src: "../CAMP_SCREENSHOTS/CampS2.png",
    alt: "Main page (continuing)",
    description: "Main page (continuing)",
  },
  {
    src: "../CAMP_SCREENSHOTS/CampS3.png",
    alt: "Page of Campground",
    description: "Page of Campground",
  },
  {
    src: "../CAMP_SCREENSHOTS/CampS4.png",
    alt: "Page of Campground (with features)",
    description: "Page of Campground (with features)",
  },
];
const foodArray = [];

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
                  about different Camps where people can stay during their trip.
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
              <img className=" align-self-start img-fluid border-0"
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
              <img className=" align-self-start img-fluid border-0"
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
                  Description is coming
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
