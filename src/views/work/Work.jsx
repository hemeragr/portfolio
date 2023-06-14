import Footer from "../../componentes/footer-rrss/Footer";
import Slider from "../../componentes/slider/Slider";
import "./Work.scss";
import "./index.js";

const Work = () => {
  return (
    <>
      <div className="body-work">
        <section className="content-home">
          <main>
            <span className="ornament">&lt;h2&gt;</span>
            <h2 className="headers header-h2">Mi código</h2>
            <span className="ornament">&lt;/h2&gt;</span>
            <div className="content-slider">
              <Slider />
            </div>
          </main>

          <footer className="footer-work">
            <Footer />
          </footer>
        </section>
      </div>
    </>
  );
};

export default Work;
