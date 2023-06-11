import "./Card.scss";

const Card = ({ className, cita }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-body">
        <h3 className="card-title headers">{cita.work}</h3>
        <p className="card-text paragraph ">{cita.description}</p>
        <p className=" paragraph">{cita.skills_used}</p>
        <button href="#" className="btn-card button-send">
          {" "}
          <a href="#" className="link">
            &gt;
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
