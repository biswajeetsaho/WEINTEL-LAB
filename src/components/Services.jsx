import Card from "./Card";
import card1 from "../assets/card4.jpg";
import card2 from "../assets/card5.webp";
import card3 from "../assets/card3.jpeg";
import { LuBrain } from "react-icons/lu";

import Button from "@mui/material/Button";


function Services() {
    return (
        <div className="container services">
            <h2 className="main-title text-center">Industry We Represent</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="Skill Development with Drone Technology in Education " img={card1} text="Empowering education through advanced skill development with cutting-edge drone technology for innovation and hands-on learning. " />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Drones for Security & Surveillance" img={card2} text="Drones revolutionizing security and surveillance with real-time monitoring, enhanced situational awareness, and rapid response capabilities." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Drone-as-a-Service(DaaS)" img={card3} text="Drone-as-a-Service (DaaS) offers scalable, on-demand drone solutions for industries, enabling efficient surveillance, delivery, mapping, and data collection" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="outlined" color="success">
                    Know More &nbsp;<LuBrain />
                </Button>
            </div>

        </div>
    );
}
export default Services;
