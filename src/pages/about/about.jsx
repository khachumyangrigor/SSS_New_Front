import React, { useEffect, useRef, useState } from "react";
// import scrollToComponent from 'react-scroll-to-component';
// import Img from "react-image";
import { Helmet } from "react-helmet-async";
import Header from "../headNew/head.jsx";
import aboutData from "./data";
import Intro from "../../components/Intro";

// css
import "./about.css";

const About = (props) => {
  const [gallery, setGallery] = useState({
    uae2021: [
      "sevan2016",
      "SSSholidays —",
      "49.jpg",
      "50.jpg",
      "https://www.youtube.com/embed/EPldXGsNEbU",
      "51.jpg",
      "52.jpg",
      "53.jpg",
      "54.jpg",
      "55.jpg",
      "56.jpg",
      "sevan2019",
    ],
    sevan2019: [
      "uae2021",
      "SEVAN STARTUP SUMMIT 2019 —",
      "1.jpg",
      "2.jpg",
      "https://www.youtube.com/embed/2EQFRmIHSBs",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "sevan2018",
    ],
    sevan2018: [
      "sevan2019",
      "SEVAN STARTUP SUMMIT 2018 —",
      "9.jpg",
      "10.jpg",
      "https://www.youtube.com/embed/FkDxAiIaLzY",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "india18",
    ],
    india18: [
      "sevan2018",
      "SEASIDE STARTUP SUMMIT INDIA GOA —",
      "25.jpg",
      "26.jpg",
      "https://www.youtube.com/embed/3l5_QQv2d2g",
      "27.jpg",
      "28.jpg",
      "29.jpg",
      "30.jpg",
      "31.jpg",
      "32.jpg",
      "uae18",
    ],
    uae18: [
      "india18",
      "SEASIDE STARTUP SUMMIT UAE RAK —",
      "17.jpg",
      "18.jpg",
      "https://www.youtube.com/embed/7RG0wH9t3UA",
      "19.jpg",
      "20.jpg",
      "21.jpg",
      "22.jpg",
      "23.jpg",
      "24.jpg",
      "sevan2017",
    ],
    sevan2017: [
      "india18",
      "SEVAN STARTUP SUMMIT 2017 —",
      "33.jpg",
      "34.jpg",
      "https://www.youtube.com/embed/30JZ1-fd-SQ",
      "35.jpg",
      "36.jpg",
      "37.jpg",
      "38.jpg",
      "39.jpg",
      "40.jpg",
      "sevan2016",
    ],
    sevan2016: [
      "sevan2017",
      "SEVAN STARTUP SUMMIT 2016 —",
      "41.jpg",
      "42.jpg",
      "https://www.youtube.com/embed/j2D2o7C0xoY?list=PLCcLpJIHQ5vf0Sru8mg0P7T8xWt5SiMb1",
      "43.jpg",
      "44.jpg",
      "45.jpg",
      "46.jpg",
      "47.jpg",
      "48.jpg",
      "uae2021",
    ],
  });

  const [galleryArr, setGalleryArr] = useState([
    "sevan2016",
    "SEVAN STARTUP SUMMIT 2019 —",
    "49.jpg",
    "50.jpg",
    "https://www.youtube.com/embed/EPldXGsNEbU",
    "51.jpg",
    "52.jpg",
    "53.jpg",
    "54.jpg",
    "55.jpg",
    "56.jpg",
    "sevan2019",
  ]);
  const [galleryTitle, setGalleryTitle] = useState("SSSholidays —");
  const [galleryNext, setGalleryNext] = useState("sevan2019");
  const [galleryPrev, setGalleryPrev] = useState("sevan2016");
  const [imgSrc, setImgSrc] = useState("49.jpg");

  const scrollY = useRef(0);
  const headerText = useRef(null);
  const aboutTop = useRef(null);
  const imgOpenRef = useRef(null);
  const GalleryOpenPrev = useRef(null);
  const GalleryOpenNext = useRef(null);
  const shuttle = useRef(null);
  const car = useRef(null);
  const job = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.innerWidth > 1024) {
        if (
          window.scrollY <
          aboutTop.current.offsetHeight -
            headerText.current.offsetHeight -
            headerText.current.offsetTop
        ) {
          headerText.current.classList.add("headfixed");
        } else {
          headerText.current.classList.remove("headfixed");
        }
        if (scrollY.current < window.scrollY) {
          if (parseFloat(headerText.current.style.opacity) > 0) {
            headerText.current.style.opacity =
              parseFloat(headerText.current.style.opacity) - 0.01;
          }
          scrollY.current = window.scrollY + 1;
        } else if (scrollY.current > window.scrollY) {
          if (
            parseFloat(headerText.current.style.opacity) < 1 &&
            window.scrollY <
              aboutTop.current.offsetHeight -
                headerText.current.offsetHeight -
                headerText.current.offsetTop
          ) {
            headerText.current.style.opacity =
              parseFloat(headerText.current.style.opacity) + 0.01;
          }
          if (window.scrollY <= 1) headerText.current.style.opacity = 1;
          scrollY.current = window.scrollY - 1;
        }
      } else {
        headerText.current.classList.remove("headfixed");
        headerText.current.style.opacity = 1;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);
    headerText.current.style.opacity = 1;

    if (props.match.path.split("/")[2] === "job") {
      scrollToJob();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.match.path]);

  const shuttleOpen = () => {
    shuttle.current.classList.add("vihacleFullOpen");
    shuttle.current.classList.remove("vihacleFullClose");
  };

  const carOpen = () => {
    car.current.classList.add("vihacleFullOpen");
    car.current.classList.remove("vihacleFullClose");
  };

  const galeryNext = () => {
    setGalleryArr(gallery[galleryNext]);
    setGalleryTitle(gallery[galleryNext][1]);
    setGalleryNext(gallery[galleryNext][11]);
    setGalleryPrev(gallery[galleryNext][0]);
  };

  const galeryPrev = () => {
    setGalleryArr(gallery[galleryPrev]);
    setGalleryTitle(gallery[galleryPrev][1]);
    setGalleryNext(gallery[galleryPrev][11]);
    setGalleryPrev(gallery[galleryPrev][0]);
  };

  const imgOpen = (e) => {
    imgOpenRef.current.style.display = "flex";
    const mainSrc = e.target.src;
    const Id = Number(e.target.id);
    let NextId;
    let PrevId;
    Id === 10 ? (NextId = 2) : (NextId = Id + 1 !== 4 ? Id + 1 : Id + 2);
    Id === 2 ? (PrevId = 10) : (PrevId = Id - 1 !== 4 ? Id - 1 : Id - 2);
    imgOpenRef.current.querySelector("img").src = mainSrc;
    GalleryOpenPrev.current.id = PrevId;
    GalleryOpenNext.current.id = NextId;
  };

  const galleryOpenNext = (e) => {
    e.stopPropagation();
    const Id = Number(e.currentTarget.id);
    setImgSrc(galleryArr[Id]);
    let NextId;
    let PrevId;
    Id === 10 ? (NextId = 2) : (NextId = Id + 1 !== 4 ? Id + 1 : Id + 2);
    Id === 2 ? (PrevId = 10) : (PrevId = Id - 1 !== 4 ? Id - 1 : Id - 2);
    GalleryOpenPrev.current.id = PrevId;
    GalleryOpenNext.current.id = NextId;
  };

  const galleryOpenPrev = (e) => {
    e.stopPropagation();
    const Id = Number(e.currentTarget.id);
    setImgSrc(galleryArr[Id]);
    let NextId;
    let PrevId;
    Id === 10 ? (NextId = 2) : (NextId = Id + 1 !== 4 ? Id + 1 : Id + 2);
    Id === 2 ? (PrevId = 10) : (PrevId = Id - 1 !== 4 ? Id - 1 : Id - 2);
    GalleryOpenPrev.current.id = PrevId;
    GalleryOpenNext.current.id = NextId;
  };

  const elemClose = () => {
    imgOpenRef.current.style.display = "none";
  };

  const scrollToJob = () => {
    // scrollToComponent(job.current, {
    //     offset: -200,
    //     align: 'top',
    //     duration: 800
    // });
  };

  return (
    <>
      <Helmet>
        <title>About Us | Seaside Startup Summit</title>
        <meta
          name="description"
          content="Seaside Startup Summit is about Connect,Learn,Win and Have Fun.Here you can find information about Founders,Vacancies,Gallery."
        />
        <meta
          property="og:title"
          content="Check Our Upcoming and Past Events | Seaside Startup Summit"
        />
        <meta
          property="og:url"
          content={`https://www.seasidestartupsummit.com/event`}
        />
        <meta
          property="og:image"
          content="http://seasidestartupsummit.com/ogImage/about_us.jpg"
        />
        <meta
          property="og:description"
          content="Seaside Startup Summit is about Connect,Learn,Win and Have Fun.Here you can find information about Founders,Vacancies,Gallery."
        />
      </Helmet>
      <div className="aboutNew">
        <div className="galleryOpen" ref={imgOpenRef} onClick={elemClose}>
          <div className="imgClose" onClick={elemClose}>
            <span />
            <span />
          </div>
          <div>
            <div
              className="GalleryOpenPrev"
              ref={GalleryOpenPrev}
              onClick={galleryOpenPrev}
            >
              <i />
            </div>
            <div className="GalleryOpenBox">
              <img src={require(`./img/gallery/${imgSrc}`)} alt={imgSrc} />
            </div>
            <div
              className="GalleryOpenNext"
              ref={GalleryOpenNext}
              onClick={galleryOpenNext}
            >
              <i />
            </div>
          </div>
        </div>
        <div className="aboutTop" ref={aboutTop}>
          <div ref={headerText}>
            <h1>PLATFORM CREATED</h1>
            <h3>BY ENTREPRENEURS FOR ENTREPRENEURS</h3>
            <p>Seaside Startup Summit</p>
          </div>
        </div>
        <Header />
        <Intro data={aboutData} />
        <div className="aboutStatus">
          <h3>WHAT IS IT ALL ABOUT</h3>
          <div className="status">
            <h3>Connect</h3>
            <p>Expand your network and get new opportunities</p>
          </div>
          <div className="status">
            <h3>Learn</h3>
            <p>Get knowledge and explore the business ecosystem</p>
          </div>
          <div className="status">
            <h3>Win</h3>
            <p>
              While pitching
              <br />
              While investing
            </p>
          </div>
          <div className="status">
            <h3>Have Fun</h3>
            <p>Enjoy your time during the summit we’ll make it unforgettable</p>
          </div>
          <div className="buutonBox">
            <a href="/events">Check our events</a>
          </div>
        </div>
        <div className="teamBox">
          <div className="subTeam">
            <h3>FOUNDERS</h3>
            <div className="teamImgBox">
              <div>
                <div>
                  <img src={require("./img/team/Artur.jpg")} alt="co-founder" />
                </div>
                <h3>Artur Janibekyan</h3>
                <p>Co-founder</p>
                <a
                  href="https://en.wikipedia.org/wiki/Artur_Janibekyan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i />
                </a>
              </div>
              <div>
                <div>
                  <img src={require("./img/team/Hakob.png")} alt="co-founder" />
                </div>
                <h3>Hakob Hakobyan</h3>
                <p>Co-founder</p>
                <a
                  href="https://www.linkedin.com/in/hakob-hakobyan-sss/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i />
                </a>
              </div>
              <div>
                <div>
                  <img src={require("./img/team/Tiran.png")} alt="co-founder" />
                </div>
                <h3>Tiran Hakobyan</h3>
                <p>Co-founder</p>
                <a
                  href="https://www.linkedin.com/in/tiran-hakobyan-a74539a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="upcommingReach vihacle_about" ref={job}>
          <h2>Join the team</h2>
          <p>— Please check our vacancies —</p>
          <div className="upcommingReach_middle">
            <div className="vihacle" ref={shuttle}>
              <div className="vihacleBox">
                <div>
                  <img src={require("./img/icon/1.png")} alt="shuttle" />
                </div>
                <button onClick={shuttleOpen}>Job vacancies</button>
              </div>
              <div className="vihacleOpen">
                <div className="vihacleOpenIN">
                  <p>There are no current openings, please check back soon </p>
                </div>
              </div>
              <div className="border" />
            </div>
          </div>
        </div>
        <div className="aboutGallery">
          <div className="galleryHead">
            <h3>Our Gallery</h3>
            <div>
              <h4>{galleryTitle}</h4>
              <div>
                <span onClick={galeryPrev} />
                <span onClick={galeryNext} />
              </div>
            </div>
          </div>
          {/* <div className="galleryBody">
            <div onClick={imgOpen}>
              <Img
                src={require(`./img/gallery/${galleryArr[2]}`)}
                decode={false}
                id="2"
                alt="gallery"
              />
            </div>
            <div onClick={imgOpen}>
              <Img
                src={require(`./img/gallery/${galleryArr[3]}`)}
                decode={false}
                id="3"
                alt="gallery"
              />
            </div>
            <div>
              <iframe
                src={`${galleryArr[4]}`}
                title="frem193"
                frameBorder="0"
              ></iframe>
            </div>
            <div onClick={imgOpen}>
              <Img
                src={require(`./img/gallery/${galleryArr[5]}`)}
                decode={false}
                id="5"
                alt="gallery"
              />
            </div>
            <div onClick={imgOpen}>
              <Img
                src={require(`./img/gallery/${galleryArr[6]}`)}
                decode={false}
                id="6"
                alt="gallery"
              />
            </div>
            <div onClick={imgOpen}>
              <Img
                src={require(`./img/gallery/${galleryArr[7]}`)}
                decode={false}
                id="7"
                alt="gallery"
              />
            </div>
            <div onClick={imgOpen}>
              <Img
                src={require(`./img/gallery/${galleryArr[8]}`)}
                decode={false}
                id="8"
                alt="gallery"
              />
            </div>
            <div onClick={imgOpen}>
              <Img
                src={require(`./img/gallery/${galleryArr[9]}`)}
                decode={false}
                id="9"
                alt="gallery"
              />
            </div>
            <div onClick={imgOpen}>
              <Img
                src={require(`./img/gallery/${galleryArr[10]}`)}
                decode={false}
                id="10"
                alt="gallery"
              />
            </div>
          </div> */}
          <div className="galleryFootter">
            The photographs and video materials contained on this site are the
            property of Seaside Startup Summit LLC and are protected by
            International copyright laws. All copyright, trademark, and other
            intellectual property rights in this site, are the property of
            Seaside Startup Summit LLC. Those persons who wish to use the
            photography found on this site in a commercial purpose must receive
            written consent from Seaside Startup Summit LLC, prior to its
            commercial use.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
