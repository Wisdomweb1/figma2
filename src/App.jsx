import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import topLogo from "./assets/images/topLogo.png";
import lightLogo from "./assets/images/lightLogo.png";
import cuteGirl from "./assets/images/cuteGirl.png";
import groupLady from "./assets/images/groupLady.png";
import amstrad from "./assets/images/AmstradLogo.png";
import airbus from "./assets/images/AirbusLogo.png";
import sophos from "./assets/images/SophosLogo.png";
import accelrys from "./assets/images/AccelrysLogo.png";
import spacex from "./assets/images/SpacexLogo.png";
import avena from "./assets/images/AvenaLogo.png";
import benefit from "./assets/images/benefit.png";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import img1 from "./assets/images/img1.png";
import img2 from "./assets/images/img2.png";
import img3 from "./assets/images/img3.png";
import img4 from "./assets/images/img4.png";
import img5 from "./assets/images/img5.png";
import img6 from "./assets/images/img6.png";
import arrowRight from "./assets/images/arrowRight.png";
import play from "./assets/images/play.png";
import star from "./assets/images/star.png";
import userIcon from "./assets/images/userIcon.png";
import bestImg from "./assets/images/bestImg.png";
import amazingImg from "./assets/images/amazingImg.png";
// import polygon from "./assets/images/polygon.png";
import polygon1 from "./assets/images/polygon1.png";
import polygon2 from "./assets/images/polygon2.png";
import downLogo from "./assets/images/downLogo.png";
import facebookIcon from "./assets/images/facebookIcon.png";
import instaIcon from "./assets/images/instaIcon.png";
import xIcon from "./assets/images/xIcon.png";
import Home from "./assets/screens/home";
import Course from "./assets/screens/course";
import Blog from "./assets/screens/blog";
import Monitors from "./assets/screens/monitors";
import Testimonials from "./assets/screens/testimonials";

function App() {
  return (
    <>
      <div>
        <header className="header">
          <img src={topLogo} alt="images" />
          <div>
            
          </div>
          <div className="header-link">
          <div>
          <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route element={<Home />} path="/" />
                  <Route element={<Course />} path="/course" />
                  <Route element={<Monitors />} path="monitors" />
                  <Route element={<Testimonials />} path="testimonials" />
                  <Route element={<Blog />} path="blog" />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
            <div className="header-button">
              <button className="header-button-1">Log in</button>
              <button className="header-button-2">Sign up</button>
              </div>
            
          </div>
        </header>

        <section className="start-container">
          <div className="start">
            <img className="light" src={lightLogo} alt="images" />
            <h1 className="start-learning">
              Start learning skill From your favorite mentor
            </h1>
            <p className="start-para">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              <button className="start-button">Explore Course</button>
            </p>
            <div></div>
          </div>

          <div>
            <img className="img-2" src={cuteGirl} alt="images" />
            <img className="img-1" src={groupLady} alt="images" />
          </div>
        </section>

        <section>
          <div>
            <ul className="logo-container">
              <li>
                <img src={amstrad} alt="images" />
              </li>
              <li>
                <img src={airbus} alt="images" />
              </li>
              <li>
                <img src={sophos} alt="images" />
              </li>
              <li>
                <img src={accelrys} alt="images" />
              </li>
              <li>
                <img src={spacex} alt="images" />
              </li>
              <li>
                <img src={avena} alt="images" />
              </li>
            </ul>
            <hr />
          </div>
        </section>

        <section className="benfit-container">
          <img src={benefit} alt="images" />
          <div className="benefit-text-container">
            <div>
              <h1 className="benefit">
                Benefit from our online Learning Expert
              </h1>
            </div>
            <div>
              <div className="beneft-icon-container">
                <img className="icon3" src={icon1} alt="images" />
                <div>
                  <h6 className="icon-text">Online Degree</h6>
                  <p>
                    Contrary to popular belief, Lorem popular belief, Lorem
                    Ipsum is
                  </p>
                </div>
              </div>

              <div className="beneft-icon-container">
                <img className="icon3" src={icon2} alt="images" />
                <div>
                  <h6 className="icon-text">Short course</h6>
                  <p>
                    Contrary to popular belief, Lorem popular belief, Lorem
                    Ipsum is
                  </p>
                </div>
              </div>

              <div className="beneft-icon-container">
                <img className="icon3" src={icon3} alt="images" />
                <div>
                  <h6 className="icon-text">Learn with expert</h6>
                  <p>
                    Contrary to popular belief, Lorem popular belief, Lorem
                    Ipsum is
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="our-container">
            <h1 className="our">Our Explore Course</h1>
            <p className="our-para">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical{" "}
            </p>
          </div>

          <section className="groups">
            <div className="group">
              <div className="img-contain">
                <img className="imgg" src={img1} alt="images" />
                <div className="butin">
                  <img src={play} alt="images" />
                  <p>20 LESSONS</p>
                </div>
                <h3 className="img-text">web design basic to advance</h3>
                <div className="dollor">
                  <div className="dola">
                    <p className="text-color">$400</p>
                    <p className="text-inline">$480</p>
                  </div>
                  <div className="star">
                    <img className="star-img" src={star} alt="images" />
                    <p>4.9 Rating</p>
                  </div>
                </div>
                <hr />
                <div className="arrow">
                  <div className="user">
                    <img src={userIcon} alt="images" />
                    <p>412 Student</p>
                  </div>
                  <img className="arrow-img" src={arrowRight} alt="images" />
                </div>
              </div>
              <div className="img-contain">
                <img className="imgg" src={img2} alt="images" />
                <div className="butin">
                  <img src={play} alt="images" />
                  <p>20 LESSONS</p>
                </div>
                <h3 className="img-text">web Development basic </h3>
                <div className="dollor">
                  <div className="dola">
                    <p className="text-color">$200</p>
                    <p className="text-inline">$280</p>
                  </div>
                  <div className="star">
                    <img className="star-img" src={star} alt="images" />
                    <p>4.9 Rating</p>
                  </div>
                </div>
                <hr />
                <div className="arrow">
                  <div className="user">
                    <img src={userIcon} alt="images" />
                    <p>450 Student</p>
                  </div>
                  <img className="arrow-img" src={arrowRight} alt="images" />
                </div>
              </div>
              <div className="img-contain">
                <img className="imgg" src={img3} alt="images" />
                <div className="butin">
                  <img src={play} alt="images" />
                  <p>20 LESSONS</p>
                </div>
                <h3 className="img-text">Marketing basic to advance</h3>
                <div className="dollor">
                  <div className="dola">
                    <p className="text-color">$260</p>
                    <p className="text-inline">$280</p>
                  </div>
                  <div className="star">
                    <img className="star-img" src={star} alt="images" />
                    <p>4.9 Rating</p>
                  </div>
                </div>
                <hr />
                <div className="arrow">
                  <div className="user">
                    <img src={userIcon} alt="images" />
                    <p>570 Student</p>
                  </div>
                  <img className="arrow-img" src={arrowRight} alt="images" />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="img-contain">
                <img className="imgg" src={img4} alt="images" />
                <div className="butin">
                  <img src={play} alt="images" />
                  <p>20 LESSONS</p>
                </div>
                <h3 className="img-text">Data Entry basic to advance</h3>
                <div className="dollor">
                  <div className="dola">
                    <p className="text-color">$350</p>
                    <p className="text-inline">$370</p>
                  </div>
                  <div className="star">
                    <img className="star-img" src={star} alt="images" />
                    <p>4.9 Rating</p>
                  </div>
                </div>
                <hr />
                <div className="arrow">
                  <div className="user">
                    <img src={userIcon} alt="images" />
                    <p>790 Student</p>
                  </div>
                  <img className="arrow-img" src={arrowRight} alt="images" />
                </div>
              </div>
              <div className="img-contain">
                <img className="imgg" src={img5} alt="images" />
                <div className="butin">
                  <img src={play} alt="images" />
                  <p>20 LESSONS</p>
                </div>
                <h3 className="img-text">Web Programming basic </h3>
                <div className="dollor">
                  <div className="dola">
                    <p className="text-color">$320</p>
                    <p className="text-inline">$350</p>
                  </div>
                  <div className="star">
                    <img className="star-img" src={star} alt="images" />
                    <p>4.9 Rating</p>
                  </div>
                </div>
                <hr />
                <div className="arrow">
                  <div className="user">
                    <img src={userIcon} alt="images" />
                    <p>805 Student</p>
                  </div>
                  <img className="arrow-img" src={arrowRight} alt="images" />
                </div>
                <div></div>
              </div>
              <div className="img-contain">
                <img className="imgg" src={img6} alt="images" />
                <div className="butin">
                  <img src={play} alt="images" />
                  <p>20 LESSONS</p>
                </div>
                <h3 className="img-text">App Design basic to advance</h3>
                <div className="dollor">
                  <div className="dola">
                    <p className="text-color">$420</p>
                    <p className="text-inline">$450</p>
                  </div>
                  <div className="star">
                    <img className="star-img" src={star} alt="images" />
                    <p>4.9 Rating</p>
                  </div>
                </div>
                <hr />
                <div className="arrow">
                  <div className="user">
                    <img src={userIcon} alt="images" />
                    <p>800 Student</p>
                  </div>
                  <img className="arrow-img" src={arrowRight} alt="images" />
                </div>
              </div>
            </div>
            <section className="view-more">
              <button className="view-more-button">View More</button>
            </section>
          </section>
        </section>

        <section>
          <div className="student-container">
            <h1 className="student">Student says About Course</h1>
            <p className="student-para">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
            </p>
          </div>

          <div className="bst-amz-container">
            <div className="bst-amz-text-container">
              <img className="bst-amz-text-img" src={bestImg} alt="images" />
              <div>
                <img src={star} alt="images" />
                <h2>Best learning platform</h2>
                <p className="bst-amz-para">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45
                </p>
                <div>
                  <h6>Maurice Cain</h6>
                  <p className="bst-amz-para-student">Student</p>
                </div>
              </div>
            </div>

            <div className="bst-amz-text-container">
              <img className="bst-amz-text-img" src={amazingImg} alt="images" />
              <div>
                <img src={star} alt="images" />
                <h2>Amazing Course</h2>
                <p className="bst-amz-para">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45
                </p>
                <div>
                  <h6>Lila Henderson</h6>
                  <p className="bst-amz-para-student">Student</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="polygon-container">
          <div className="polygon-text-container">
            <h1 className="polygon-text">
              Subscribe for Get Update Every new Course
            </h1>
            <p className="polygon-para">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots
            </p>
            <div className="enter-container">
              <h4 className="enter">Enter Your email</h4>

              <h5 className="enteR">Subscribe</h5>
            </div>
          </div>
          <div>
            <img src={polygon1} alt="images" />
            <img className="polygon" src={polygon2} alt="images" />
          </div>

          <div></div>
        </section>

        <footer>
          <div className="footer">
            <div className="footer-icon-container">
              <img src={downLogo} alt="imagges" />
              <div>
                <h5>Follow on social service</h5>
                <div className="footer-icon">
                  <img src={facebookIcon} alt="images" />
                  <img src={instaIcon} alt="images" />
                  <img src={xIcon} alt="images" />
                </div>
              </div>
            </div>

            <div className="footer-text-container">
              <div>
                <div>
                  <h2>Links</h2>
                </div>
                <div className="foot-t">
                  <h5>Homes</h5>
                </div>
                <div className="foot-t">
                  <h5>Help center</h5>
                </div>
                <div className="foot-t">
                  <h5>Services</h5>
                </div>
              </div>

              <div>
                <div>
                  <h2>Resource</h2>
                </div>
                <div className="foot-t">
                  <h5>About Us</h5>
                </div>
                <div className="foot-t">
                  <h5>carrier</h5>
                </div>
                <div className="foot-t">
                  <h5>Legal Notice</h5>
                </div>
              </div>

              <div>
                <div>
                  <h2>Contacts</h2>
                </div>
                <div className="foot-t">
                  <h5>192. New york</h5>
                </div>
                <div className="foot-t">
                  <h5>Support</h5>
                </div>
                <div className="foot-t">
                  <h5>+1125156363</h5>
                </div>
              </div>
            </div>
          </div>
          <hr className="hrr" />
          <h5 className="hhr-text">Copyright 2020@ all right</h5>
        </footer>
      </div>
    </>
  );
}

export default App;
