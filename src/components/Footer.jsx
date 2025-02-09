import { Link} from 'react-scroll'

import { SiWhatsapp } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">WEINTEL LAB</h1>
                <p className="footer-text">
                  Lorem ipsum Here are thriteen health benefits of apples Lorem

                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                    <Link
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to="headerbg"
                    > Home </Link>
                  </li>
                  <li>
                    <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                    <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >weintellabs@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" >  Head Office: Dhanbad, Jharkhand
                      Branch Offices: Delhi, Guwahati, Bhubaneswar</Link>
                  </li>
                  <li>
                    <Link to="#" > +91 9693366022</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul style={{ display: "flex", listStyle: "none", gap: "20px", padding: 0,marginTop:"20px" }}>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/darkleas" > <CiYoutube style={{ fontSize: "30px" }}/></a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/burhankocadag0" > <FaTwitter style={{ fontSize: "30px" }}/></a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/burhan-kocada%C4%9F-49a3331a5/"> <FaLinkedin style={{ fontSize: "30px" }}/></a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/burhan-kocada%C4%9F-49a3331a5/"> <FaInstagram style={{ fontSize: "30px" }}/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="text-center" style={{ color: "white" }}>
      <hr style={{ border: "0.1px solid white", width: "100%" }} />
        <p>Copyright © 2025.&nbsp;&nbsp;All Rights Reserved By WEINTEL LAB</p>
      </section>
      {/* <button onClick={() => scroll.scrollToTop(2500)} className="gotop">
        <SiWhatsapp style={{ fontSize: "20px" }} />
      </button> */}

      <button
        onClick={() => window.open("https://wa.me/qr/WOPPANB67MW2D1", "_blank")}
        className="gotop"
      >
        <SiWhatsapp style={{ fontSize: "20px" }} />
      </button>

    </footer>
  );
}
export default Footer;
