import Frameworks from "../components/Frameworks";
import profile from "/public/images/droy.jpg";
function Hero() {
  return (
    <>
      <main id="hero" className="hero">
        <div className="black-cover">
          <div className="mobile-image">
            <img src={profile} alt="" srcset="" />
          </div>

          <div className="left-sed">
            <p>
              KONICHIWA
              <br />
              HAJIMEMASHITE!
            </p>
            <h1>My Name Is</h1>
            <h3>
              Ukattah Divine
              <br />A Front-End Developer
            </h3>
            <p>
              Learning never ends, and I am dedicated to growing as a Front-End
              Developer. I have a solidfoundation in HTML, CSS, and JavaScript,
              and I am continuously expanding my skills. My goal is to become a
              top Front-End Developer and eventually transition into Full Stack
              development. I am passionate about building responsive,
              user-friendly web applications and staying current with industry
              trends. So Help Me God!
            </p>
            <div className="buttons mobile">
              <a
                className="project-link dash"
                href="/Ukattah-Divine-CV.pdf"
                download="Ukattah-Divine-CV.pdf"
                title="Download Ukattah Divine's CV (PDF)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path>
                </svg>{" "}
                Download CV
              </a>

              <a className="project-link rex" href="#projects">
                View Projects{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                </svg>
              </a>
            </div>
            <h4>TECH</h4>
            <div className="framework-list">
              <Frameworks name="HTML" />
              <Frameworks name="CSS" />
              <Frameworks name="JAVASCRIPT" />
              <Frameworks name="REACT.JS" />
              <Frameworks name="TAILWIND CSS" />
              <Frameworks name="GIT" />
              <Frameworks name="WORDPRESS" />
              {/* <Frameworks name="UI/UX" /> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
