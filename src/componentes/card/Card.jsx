import GithubBtn from "../footer-rrss/rrss/GithubbBtn";
import "./Card.scss";

const Card = ({ className, cita }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-body">
        <h3 className="card-title headers">{cita.work}</h3>
        <p className="card-text paragraph ">{cita.description}</p>
        <p className=" paragraph">{cita.skills_used}</p>
        <div className="content-footerCard">
        <a className="link" href={cita.Github}>
          <GithubBtn />
        </a>
        <button href="#" className="btn-card button-send">
          {" "}
          <a href={cita.url} className="link">
            &gt;
          </a>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
