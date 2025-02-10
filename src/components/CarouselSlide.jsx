import { ImageSlider } from "./ImageSlider";
import car1 from "../assets/rj6.jpg"
import car2 from "../assets/rj6.jpg"
import car3 from "../assets/rj6.jpg"
import car4 from "../assets/rj6.jpg"
import car5 from "../assets/rj6.jpg"

const IMAGES = [
    { url: car1, alt: "Car One" },
    { url: car2, alt: "Car Two" },
    { url: car3, alt: "Car Three" },
    { url: car4, alt: "Car Four" },
    { url: car5, alt: "Car Five" },
]


function CarouselSlide() {


    return (
        <div className="container services">

            <h2 className="main-title text-center" style={{ margin: "10px" }}>Achievements</h2>



            <div
                style={{
                    maxWidth: "700px",
                    width: "100%",
                    aspectRatio: "10 / 6",
                    margin: "0 auto",
                    marginTop: "100px"
                }}
            >
                <ImageSlider images={IMAGES} />

            </div>


        </div>
    );
}
export default CarouselSlide;