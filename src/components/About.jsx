import image1 from "../assets/img1.png"
function About() {
  return (
    <>
      <div style={{ marginTop: '10rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center" style={{marginTop:"150px"}}>
            <img alt="about" src={image1} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT <br /> WEINTEL LAB</h2>
            <p className="main-p">
            We specialize in drone education, skilling individuals for employment in the growing technology sector. Our training programs equip students with industry-ready skills, while our expertise extends to surveying, inspection, and mapping services. We provide advanced drone solutions for defense security and surveillance. Committed to innovation, we drive employment growth and deliver high-quality products and services, fostering strong industry relationships.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
