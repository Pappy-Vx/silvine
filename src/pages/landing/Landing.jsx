import React from "react";
import "./landing.css";
import Nav from "../../components/header/Nav";
import Footer from "../../components/footer/Footer";
import logo from "../../assets/silvine.png";
import line from "../../assets/line.png";
import effect2 from "../../assets/effect2.webp";
import effect1 from "../../assets/effect1.png";
import svg from "../../assets/svg.png";
import advox from "../../assets/advox.png";
import autobuy from "../../assets/autobuy.png";
import brainiac from "../../assets/brainiac.png";
import sgi from "../../assets/sgi.png";
import news from "../../assets/news.png";
import news1 from "../../assets/news1.png";
import team from '../../assets/team.webp'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const Landing = () => {
  return (
    <>
      <section className="hero">
        <div>
          <Nav />
        </div>
        <div className="container">
          <div>
            <h1 className="hero-title">
              Unleashing the Power of{" "}
              <span className="hero-investment">Investments ::</span>
            </h1>
            <p>Silvine strategies transform futures</p>
          </div>
          <div>
            <h3 className="hero-text">Silvine Investment:</h3>
            <p> Empowering Your Financial Journey</p>
          </div>
          <div>
            <button className="cta">
              <span className="hover-underline-animation">
                {" "}
                Read Company Strategy{" "}
              </span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
                fill="#F2EDE4"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="impact_grid">
          <div className="impact_grid1">
            <h2>Our impacts</h2>
            <p>
              Fulfilling Promise: Unveiling the Transformative Impact of Our
              Initiatives
            </p>
          </div>
          <div className="impact_grid2"></div>
        </div>
        <div className="impact_containers">
          <div className="impact1">
            <div>
              <h4>Our Ambition</h4>
              <p>
                We aspire to become leaders in the global market. This involves
                building a strong reputation, attracting top talents, and
                consistently delivering superior investment performance. To get
                to that point of global recognition it involves strategic
                planning, adapting to changing market conditions, and making
                decisions that support our partners stability and longevity.
              </p>
            </div>
          </div>
          <div className="impact2">
            <div>
              <h4>Our Focus</h4>
              <p>
                Our Capital raising methods includes issuing stocks, bonds,
                obtaining loans, seeking venture capital and private equity
                investments. The choice of method depends on a company's
                financial structure, risk tolerance, and strategic goals. Our
                effectively executed capital raising, contributes to a company's
                financial strength, enabling it to pursue opportunities
              </p>
              <div className="mobile_impact_box">
                <div className="mobile_impact_box1">
                  <h5>Hello</h5>
                </div>
                <div className="mobile_impact_box2">
                  <h5>Hello</h5>
                </div>
                <div className="mobile_impact_box3">
                  <h5>Hello</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="silvine_grid">
          <div className="silvine_grid1"></div>
          <div className="silvine_grid2"></div>
        </div>
        <div className="second_impact">
          <div className="silvine1">
            <h5>Silvine Fin-solution</h5>
            <p>
              We offer clients a broad range of asset classes across regional
              and international markets.
            </p>
          </div>
          <div className="silvine2">
            <h5>Silvine investment</h5>
            <p>
              We offer clients a broad range of asset classes across regional
              and international markets.
            </p>
          </div>
          <div className="silvine3">
            <h5>SVG Capital</h5>
            <p>
              We offer clients a broad range of asset classes across regional
              and international markets.
            </p>
          </div>
        </div>
      </section>
      <div className="horizontal">
        <img src={line} alt="" />
      </div>
      <div className="vertical"></div>
      <section className="landpage_container_3">
        <div className="container_box1"></div>
        <div className="container_box2">
          <img src={logo} alt="" />
          <p>
            committed to helping you make the most of all your resources. Our
            mission is clear, to provide comprehensive investment services that
            enable you to achieve your goals. To give you the finest prospects,
            we keep ahead of the curve and adjust to the shifting dynamics of
            the market on a regular basis. We build relationships on trust. At
            Silvine Investment we use your success to measure our own
          </p>
        </div>
        <div className="container_box3">
          <h3>SILVINE</h3>
          <span>Investment</span>
        </div>
      </section>
      <section className="landing_video"></section>

      <section className="landing_container_4">
        <div className="impact_grid">
          <div className="impact_grid1">
            <h2>Our Portfolio</h2>
            <p>
              Showcasing Excellence: A Visual Chronicle of Our Diverse Portfolio
            </p>
          </div>
          <div className="impact_grid2"></div>
        </div>
        <div className="portfolio_grid">
          <div className="portfolio_grid1">
            <div className="overview">
              <img src={effect2} alt="" />
              <div className="overview_text">
                <div>
                  <h4>Overview</h4>
                  <p>
                    By maintaining a disciplined and research-driven approach,
                    we strive to deliver consistent value and financial growth
                    for our clients. Our portfolio comprises a mix of equities,
                    fixed-income securities, and alternative investments,
                    carefully curated to align with our clients' financial goals
                    and risk tolerance.
                  </p>
                </div>
                <div className="overview-brand">
                  <div>
                    <img src={svg} alt="" />
                  </div>
                  <div>
                    <img src={autobuy} alt="" />
                  </div>
                  <div>
                    <img src={brainiac} alt="" />
                  </div>
                  <div>
                    <img src={advox} alt="" />
                  </div>
                  <div>
                    <img src={sgi} alt="" />
                  </div>
                </div>
              </div>
              <div className="overview_box">
                <div className="overviewbox1">Real Estate</div>
                <div className="overviewbox2">Venture & Growth Funds</div>
                <div className="overviewbox3">Financial instruments</div>
                <div className="overviewbox4">Direct Investment</div>
                <div className="overviewbox5">Buyout Funds</div>
              </div>
              <img src={effect1} alt="" className="effect2" />
            </div>
          </div>
          <div className="portfolio_grid2"></div>
        </div>
      </section>
      <section className="news_container">
        <div className="news_text-container1">
          <h2>News</h2>
          <p>
            Stay Informed: Discover the Latest Updates and Insights in Our News
            Hub
          </p>
        </div>
        <div className="news_text-container2">
          <span className="arrow_left">
            <FiChevronLeft />
          </span>
          <span>
            <FiChevronRight />
          </span>
        </div>
        <div className="news_text-container3">
          <span className="news-date">11/12/2023</span>
          <h6>Silvine investment</h6>
          <img src={news} alt="" />
          <span className="news-title">
            Silvine Investment announces partnership of Saudi Arab...
          </span>
          <p>
            Silvien Investment a wholly owned company by Public Investment Fund
            (PIF) signed a partners...
          </p>
          <button className="news-cta">
            <span className="news-hover-underline-animation"> Read More </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
              fill="#292929"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </div>
        <div className="news_text-container4">
          <span className="news-date1">11/12/2023</span>
          <h6>Silvine Fin-solution</h6>
          <img src={news1} alt="" />
          <span className="news-title1">
            Lendo Secures $28M in Series B Funding Led by Silvine f...
          </span>
          <p>
            Silvine Fin-Solution Investments a wholly owned company by Public
            Investment Fund (PIF) signed a partners...
          </p>
          <button className="news-cta">
            <span className="news-hover-underline-animation"> Read More </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
              fill="#292929"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      <section className="management">
        <div className="management-container1">
          <h2>Meet Our Leadership</h2>
          <p>
            Guiding Visionaries: Introducing the Minds Behind Our Leadership
          </p>
        </div>
        <div className="management-container2"></div>
        <div className="management-container3">
          <h5>Our Ambition</h5>
          <p>
            Our board comprises exceptionally reputable and extensively
            qualified leaders who contribute their exceptional experience and
            expertise for the advancement of our company.<br/><br/> Their expertise
            provide valuable insights, strategic guidance, and help make
            informed decisions that contribute to the success and growth of
            Silvine Investment.
          </p>
          <button className="news-cta">
            <span className="news-hover-underline-animation">
              {" "}
              Meet more of our leadership{" "}
            </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
              fill="#292929"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </div>
        <div className="management-container4">
            <div className="team1">
                <img src={team} alt="" />
                <span className="team-name1">Mr. Stephen O.</span>
                <span className="team-position1">CEO</span>
            </div>
            <div className="team2">
                <img src={team} alt="" />
                <span className="team-name2">Mr. Adebayo Something</span>
                <span className="team-position2">Chairman Of Board </span>
            </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Landing;
