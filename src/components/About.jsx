import myPic from "../assets/img/myPic.jpeg";
import {Card} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

export const About = () => {
  return (
    <Card className="d-flex justify-content-center" style={{border: "none"}}>
      <Card.Header className="text-center fs-2" style={{border: "none"}}>About me</Card.Header>
      <div className="row g-0 pt-3">
        <div className="col-lg-3 d-flex justify-content-center">
          <img src={myPic} alt="My pic" width={250} height={250} style={{objectFit: 'cover'}} className="rounded-circle pt-2"/>
        </div>
        <div className="col-lg-9">
          <Card.Body>
            <Card.Text className="fs-5">
            I’m a Software Engineer with a unique customer care background, which sharpened my leadership and
management skills, especially in high-stress situations, and helped to establish and maintain productive
consistent working relationships with the team and long-term partnerships. I am a client-service-oriented
developer with a vision of the big picture and a sharp, analytical mindset who is highly motivated by
challenges and always looking to grow.<br/>
            </Card.Text>
            <Card.Text className="fs-5">
            <b>Soft skills:</b> excellent communication and team collaboration, attention to detail, ability to prioritize,
compliance with time management, focus on results, critical thinking, emotional stability while working in
a multitasking and fast-paced environment, self-starter, and fast learner.
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
