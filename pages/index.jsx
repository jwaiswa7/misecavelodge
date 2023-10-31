import GallerySection from "@/src/components/GallerySection";
import Layout from "@/src/layout/Layout";
import {
  home2Slider,
  sliderActive3Item,
  sliderActive4Item,
} from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const Index2 = () => {
  return (
    <Layout header={2} extraClass={"pt-160"}>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-two">
          {/*=== Hero Slider ===*/}
          <Slider {...home2Slider} className="hero-slider-two">
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/stairs.jpg)",
                  backgroundPosition: "top center",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Where Nature Meets Comfort
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/stairs_2.jpg)",
                  backgroundPosition: "bottom center",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Sipi's Best Kept Secret.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-3.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Elevate Your Sipi Stay
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-4.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Be Our Guest, Feel Your Best
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Booking Section ======*/}
      <section className="booking-form-section">
        <div className="container-fluid">
          <div className="booking-form-wrapper">
            <form className="booking-form-two">
              <div className="form_group">
                <span>Check In</span>
                <label>
                  <i className="far fa-calendar-alt" />
                </label>
                <input
                  type="text"
                  className="form_control datepicker"
                  placeholder="Check In"
                />
              </div>
              <div className="form_group">
                <span>Check Out</span>
                <label>
                  <i className="far fa-calendar-alt" />
                </label>
                <input
                  type="text"
                  className="form_control datepicker"
                  placeholder="Check Out"
                />
              </div>
              <div className="form_group">
                <span>Guest</span>
                <label>
                  <i className="far fa-user-alt" />
                </label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Guest"
                  name="text"
                />
              </div>
              <div className="form_group">
                <button className="booking-btn">
                  Check Availability <i className="far fa-angle-double-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*====== End Booking Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-45 wow fadeInDown">
                {/* <span className="sub-title">Popular Activities</span> */}
                <h2>Explore Real Adventure</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Features Image Item ===*/}
              <div className="single-features-item-two mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img
                    src="assets/images/features/hiking.jpg"
                    alt="Features Image"
                  />
                  <div className="item-overlay">
                    <div className="content">
                      <h3 className="title">Hiking</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Features Image Item ===*/}
              <div className="single-features-item-two mb-40 wow fadeInDown">
                <div className="img-holder">
                  <img
                    src="assets/images/features/rock_climbing.jpg"
                    alt="Features Image"
                  />
                  <div className="item-overlay">
                    <div className="content">
                      <h3 className="title">Rock climbing</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Features Image Item ===*/}
              <div className="single-features-item-two mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img
                    src="assets/images/features/culture.jpg"
                    alt="Features Image"
                  />
                  <div className="item-overlay">
                    <div className="content">
                      <h3 className="title">Cultural tour</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Features Image Item ===*/}
              <div className="single-features-item-two mb-40 wow fadeInDown">
                <div className="img-holder">
                  <img
                    src="assets/images/features/bird_watching.jpg"
                    alt="Features Image"
                  />
                  <div className="item-overlay">
                    <div className="content">
                      <h3 className="title">Bird watching</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-two_content-box mb-35 wow fadeInLeft">
                <div className="section-title mb-30">
                  {/* <span className="sub-title">About Company</span> */}
                  <h2>
                    MiseCave Lodge
                  </h2>
                </div>
                <p>
                The lodge's rustic yet elegant design effortlessly blends with the natural surroundings, creating a harmonious fusion of modern comforts and traditional charm. As you wander along the winding pathway that meanders through the verdant little forest, you'll find yourself guided to the entrance of the restaurant, where the gentle sound of a nearby waterfall adds to the ambiance of serenity
                </p>
                <div className="card-list">
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Bird watching
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Hiking
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Rock Climbing
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Coffee testing
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Local Food
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Couple Camping
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== About Image Box ===*/}
              <div className="about-one_image-box mb-50 wow fadeInRight">
                <img
                  src="assets/images/about/bed.jpeg"
                  className="radius-top-left-right-288"
                  alt="About image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start We Section ======*/}
      <section className="who-we-section">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6 order-2 order-lg-1">
              {/*=== We Image Box ===*/}
              <div className="we-image-box text-center text-lg-left wow fadeInLeft">
                <img
                  src="assets/images/about/cave.jpg"
                  className="radius-top-left-right-288"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              {/*=== We Content Box ===*/}
              <div className="we-one_content-box wow fadeInRight">
                <div className="section-title mb-30">
                  {/* <span className="sub-title">Who We Are</span> */}
                  <h2>Built for adventourous travelors</h2>
                </div>
                <p>
                Immerse yourself in the breathtaking beauty of the Sipi Viplley, flatlands, and Karamoja plains from one of our 9 self-contained double rooms. Nestled amidst the forest, this picturesque resort is perfectly situated between two gentle waterfalls, including the legendary Mise Cave.
                </p>
                <div className="skill-wrapper">
                  <div className="single-skill-circle text-center">
                    <div className="inner-circle">
                      <div className="line" />
                      <span className="number">99%</span>
                    </div>
                    <h5>Saticfied Clients</h5>
                  </div>
                  <div className="single-skill-circle text-center">
                    <div className="inner-circle">
                      <div className="line" />
                      <span className="number">99%</span>
                    </div>
                    <h5>Success Rate</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End We Section ======*/}
      {/*====== Start Activity Section ======*/}
      <section className="activity-section black-bg pt-80 pb-60">
        <div className="container-fluid">
          <div className="row justify-content-center">
          <div className="col-xl-7">
            {/*=== Section Title ===*/}
            <div className="section-title text-center text-white mb-50 wow fadeInDown">
              <h2>Our Rooms</h2>
            </div>
          </div>
          </div>
          {/*=== Slider Active Item ===*/}
          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInUp"
          >
            {/*====== Activity Item ======*/}
            <div className="single-activity-item mb-40">
              <div className="img-holder">
                <img src="assets/images/gallery/act-1.jpg" alt="Image" />
              </div>
              <div className="content">
                <div className="meta">
                  <ul>
                    <li>
                      <span className="icon">
                        <i className="flaticon-blanket" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-cat" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-tent" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-fire" />
                      </span>
                    </li>
                  </ul>
                  <div className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </div>
                </div>
                <h3 className="title">Single Occupancy</h3>
                <table className="table table-bordered">
                  <tr>
                    <th>Bed & Breakfast</th>
                    <td>USD 69<br/> UGX 250,000</td>
                  </tr>
                  <tr>
                    <th>Hald board</th>
                    <td>USD 79<br/> UGX 290,000</td>
                  </tr>
                  <tr>
                    <th>Full board</th>
                    <td>USD 89<br/> UGX 330,000</td>
                  </tr>
                </table>
                <a href="#" className="main-btn filled-btn">
                  Check Now
                  <i className="fas fa-paper-plane" />
                </a>
              </div>
            </div>
            {/*====== Activity Item ======*/}
            <div className="single-activity-item mb-40">
              <div className="img-holder">
                <img src="assets/images/gallery/act-2.jpg" alt="Image" />
              </div>
              <div className="content">
                <div className="meta">
                  <ul>
                    <li>
                      <span className="icon">
                        <i className="flaticon-blanket" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-cat" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-tent" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-fire" />
                      </span>
                    </li>
                  </ul>
                  <div className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </div>
                </div>
                <h3 className="title">Double Occupancy</h3>
                <table className="table table-bordered">
                  <tr>
                    <th>Bed & Breakfast</th>
                    <td>USD 75<br/> UGX 270,000</td>
                  </tr>
                  <tr>
                    <th>Hald board</th>
                    <td>USD 95<br/> UGX 350,000</td>
                  </tr>
                  <tr>
                    <th>Full board</th>
                    <td>USD 115<br/> UGX 430,000</td>
                  </tr>
                </table>
                <a href="#" className="main-btn filled-btn">
                  Check Now
                  <i className="fas fa-paper-plane" />
                </a>
              </div>
            </div>
            {/*====== Activity Item ======*/}
            <div className="single-activity-item mb-40">
              <div className="img-holder">
                <img src="assets/images/gallery/act-3.jpg" alt="Image" />
              </div>
              <div className="content">
                <div className="meta">
                  <ul>
                    <li>
                      <span className="icon">
                        <i className="flaticon-blanket" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-cat" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-tent" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-fire" />
                      </span>
                    </li>
                  </ul>
                  <div className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </div>
                </div>
                <h3 className="title">Honeymoon suite</h3>
                <table className="table table-bordered">
                  <tr>
                    <th>Bed & Breakfast</th>
                    <td>USD 99<br/> UGX 360,000</td>
                  </tr>
                  <tr>
                    <th>Hald board</th>
                    <td>USD 119<br/> UGX 440,000</td>
                  </tr>
                  <tr>
                    <th>Full board</th>
                    <td>USD 139<br/> UGX 520,000</td>
                  </tr>
                </table>
                <a href="#" className="main-btn filled-btn">
                  Check Now
                  <i className="fas fa-paper-plane" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Activity Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-bg overlay bg_cover pt-150 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== CTA Content Box ===*/}
              <div className="cta-content-box text-center text-white wow fadeInUp">
                <h2 className="mb-35">
                  Ready to Travel With Real Adventure and Enjoy Natural
                </h2>
                <Link legacyBehavior href="/about">
                  <a className="main-btn secondary-btn">
                    Check Availability
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
    </Layout>
  );
};
export default Index2;
