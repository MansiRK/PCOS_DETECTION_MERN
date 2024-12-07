import React from "react";
import Slider from "../components/Slider";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";

const Home = () => {
  const BannerSliderData = [
    {
      image: "/images/home-banner/banner1.png",
      title: "Empowering Women to Take Control of Their Health",
      subtitle:
        "PCOS affects millions, but early detection can make a difference. Learn how we help you predict and manage PCOS effectively.",
      btnText: "Get Started Today",
    },
    {
      image: "/images/home-banner/banner2.jpeg",
      title: "AI-Powered PCOS Prediction Made Simple",
      subtitle:
        "Our advanced algorithms analyze your health data to provide accurate insights and early warnings.",
      btnText: "Try Our Free Prediction Tool",
    },
    {
      image: "/images/home-banner/banner3.jpeg",
      title: "Understand the Symptoms of PCOS",
      subtitle:
        "Irregular periods? Acne? Hair loss? Take control by learning the signs and how to address them.",
      btnText: "Learn More About PCOS",
    },
    {
      image: "/images/home-banner/banner4.png",
      title: "Your Partner in Lifestyle Management",
      subtitle:
        "From personalized advice to dietary tips, we’re here to support your journey to better health.",
      btnText: "Explore Lifestyle Tips",
    },
  ];
  const BannerSliderSettings = {
    navigation: {
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    },
    pagination: { clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    // autoplay: false,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
  };

  return (
    <>
      <section className="banner-section">
        <div className="swiper-button-prev custom-prev">
          <img src="/images/icons/arrow.png" alt="" />
        </div>

        <div className="swiper-button-next custom-next">
          <img src="/images/icons/right-arrow.png" alt="" />
        </div>
        <Slider slides={BannerSliderData} settings={BannerSliderSettings} />
      </section>

      <section className="pcos-impact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-8">
                  <div className="pcos-impact-content">
                    <h6 className="section-subtitle">
                      <span></span>The Facts Behind PCOS
                    </h6>
                    <h2 className="setion-title">Impact of PCOS</h2>

                    <p>
                      <span>Polycystic Ovary Syndrome (PCOS)</span> is a common
                      hormonal disorder affecting women of reproductive age. It
                      impacts up to 1 in 10 women worldwide and can lead to
                      serious health issues if left unmanaged.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="key-points">
                    <h5>Did You Know?</h5>
                    <div className="points-div">
                      <div className="single-point">
                        <img src="/images/icons/world.png" alt="world" />
                        <p>Affects many women globally</p>
                      </div>

                      <div className="single-point">
                        <img
                          src="/images/icons/reproductive-system.png"
                          alt="world"
                        />
                        <p>Leading cause of infertility in women</p>
                      </div>

                      <div className="single-point">
                        <img src="/images/icons/drop-counter.png" alt="world" />
                        <span>+</span>
                        <img src="/images/icons/heart-attack.png" alt="world" />

                        <span>+</span>
                        <img src="/images/icons/brain.png" alt="world" />
                        <p>
                          Increases risk of diabetes, heart disease, and mental
                          health issues
                        </p>
                      </div>

                      <div className="single-point">
                        <img src="/images/icons/calendar.png" alt="world" />
                        <span>+</span>
                        <img src="/images/icons/facial.png" alt="world" />
                        <span>+</span>
                        <img src="/images/icons/weighing.png" alt="world" />

                        <p>
                          Symptoms can include irregular periods, acne, hair
                          loss, and weight gain
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="pcos-impact-img">
                    <img
                      src="/images/pcos-matters-bg.jpg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="who-we-are-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h6 className="section-subtitle">
                <span></span>Empowering Women to Take Control of PCOS
              </h6>
              <h2 className="setion-title">Who We Are</h2>
            </div>

            <div className="col-lg-7">
              <div className="who-we-are-content">
                <p>
                  At <span>PCOSCARE</span>, we combine the power of AI with
                  expert insights to help women take charge of their health. Our
                  mission is to make PCOS management simple, personalized, and
                  accessible to everyone. Whether it's early detection,
                  lifestyle tips, or health resources, we're your trusted
                  partner on this journey to wellness.
                </p>

                <div className="custom-btn about-us-btn">
                  <NavLink>Learn more about us</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="insight-action-section">
        <div className="container">
          <h6 className="section-subtitle">
            <span></span>Empowering Women to Take Control of PCOS
          </h6>
          <h2 className="setion-title">From Insight to Action</h2>

          <div className="col-lg-12">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-10 mt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="action-div">
                      <h2>01</h2>
                      <div className="single-action">
                        <div className="action-img">
                          <svg
                            class="circle"
                            viewBox="0 0 120 120"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="60" cy="60" r="58" />
                          </svg>
                          <img src="/images/icons/personal-file.png" alt="" />
                        </div>

                        <h6>Enter Your Details</h6>
                        <p>
                          Provide your basic health information to get started
                          on your personalized PCOS assessment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="action-div">
                      <h2>02</h2>
                      <div className="single-action">
                        <div className="action-img">
                          <svg
                            class="circle"
                            viewBox="0 0 120 120"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="60" cy="60" r="58" />
                          </svg>
                          <img src="/images/icons/ai-technology.png" alt="" />
                        </div>
                        <h6>AI Analysis</h6>
                        <p>
                          Our advanced AI analyzes your data to deliver accurate
                          and personalized insights into your health.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="action-div">
                      <h2>03</h2>
                      <div className="single-action">
                        <div className="action-img">
                          <svg
                            class="circle"
                            viewBox="0 0 120 120"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="60" cy="60" r="58" />
                          </svg>
                          <img src="/images/icons/recommendation.png" alt="" />
                        </div>
                        <h6>Personalized Insights</h6>
                        <p>
                          Receive tailored recommendations and actionable steps
                          to effectively manage your PCOS journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="row">
                  <div className="custom-btn get-started-btn mt-5">
                    <NavLink to="/">Get Started</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-section">
        <div className="container">
          <h6 className="section-subtitle">
            <span></span>The numbers speak for themselves
          </h6>
          <h2 className="setion-title">Scale of PCOS</h2>
        </div>
        <div className=" counter-row ">
          <img src="/images/counter-bg 1.png" alt="counter-bg" />

          <div className=" counter-div">
            <div className="container">
              <div className="col-lg-12">
                <div className="row align-items-center">
                  <div className="col-lg col-md-6 col-sm-12">
                    <div className="single-counter">
                      <CountUp start={0} end={1} duration={20} />
                      <p>in 10 Women Affected Worldwide</p>
                    </div>
                  </div>
                  <div className="col-lg col-md-6 col-sm-12">
                    <div className="single-counter">
                      <CountUp start={0} end={70} duration={10} />
                      <span>%</span>
                      <p>of Women with PCOS Face Infertility Issues</p>
                    </div>
                  </div>
                  <div className="col-lg col-md-6 col-sm-12">
                    <div className="single-counter">
                      <CountUp start={0} end={20} duration={10} />
                      <span>-</span>
                      <CountUp start={0} end={40} duration={10} />
                      <p>Years Most Affected Age Group</p>
                    </div>
                  </div>
                  <div className="col-lg col-md-6 col-sm-12">
                    <div className="single-counter">
                      <CountUp start={0} end={50} duration={10} />{" "}
                      <span>%</span>
                      <p>Remain Undiagnosed Globally</p>
                    </div>
                  </div>
                  <div className="col-lg col-md-6 col-sm-12">
                    <div className="single-counter">
                      <CountUp start={0} end={95} duration={10} />
                      <span>%</span>
                      <p>Better Outcomes with Early Detection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="get-test-section">
        <div className="container">
          <div className="col-lg-12">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cta-text">
                  <h2>Detect PCOS Early – Take the Test Now!</h2>

                  <h5>
                    Early detection is key. Take our free PCOS test today to get
                    personalized insights and manage your health effectively.
                  </h5>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-lg-end justify-content-start">
                <div className="custom-btn about-us-btn mt-lg-0">
                  <NavLink>Start Your Test!</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
