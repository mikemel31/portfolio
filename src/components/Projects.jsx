import { Card, Carousel } from "react-bootstrap";
import { CarouselImg } from "./Carousel";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="text-center">My Projects</h2>
      <div class="row row-cols-1 row-cols-md-2 g-4 pb-4">
        <div class="col">
          <Card style={{minHeight: '540px'}}>
            <CarouselImg />
            <Card.Body style={{minHeight: '140px'}}>
              <Card.Title>CAMPWITHME</Card.Title>
              <Card.Text>
                This app is a copy of YelpCamp that was created during the Web
                Developer Bootcamp. This app provides people with information
                about different Camps where people can stay during their trip.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
                <a href="">Explore CAMPWITHME</a>
            </Card.Footer>
          </Card>
        </div>
        <div class="col">
          <Card style={{minHeight: '540px'}}>
            <CarouselImg />
            <Card.Body style={{minHeight: '140px'}}>
              <Card.Title>FoodSmart</Card.Title>
              <Card.Text>
                This website was created to follow up the calorie plan that is
                calculating on site and choose food plan for everyday delivery
                of precooked food.
              </Card.Text>
            </Card.Body>
            <Card.Footer>

            </Card.Footer>
          </Card>
        </div>
      </div>
    </section>
  );
};
