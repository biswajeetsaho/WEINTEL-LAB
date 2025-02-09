import video from "../assets/video.mp4"
import { FaArrowRight } from "react-icons/fa";

function Header() {
  return (
    <header>
      <video src={video} loop autoPlay muted></video>
      <h1>Intelligence in the Air,</h1>
      <h2> Innovation on the Ground.</h2>
      <p>Innovating with Drones | Enhancing Security | Creating Employment</p>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" ,marginTop:"20px"}}>
          Learn more &nbsp;
          <FaArrowRight />
        </button>

        {/* <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button> */}
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
