import "./Card.scss";

const Card = ({ cita }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title headers">{cita.work}</h3>
          <p className="card-text paragraph">{cita.description}</p>
          <p className=" paragraph">{cita.skills_used}</p>
          <button href="#" className="btn button-send">
            {" "}
            <a href="#" className="link">
              &gt;
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
