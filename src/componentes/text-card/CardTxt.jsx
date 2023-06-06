import "./CardTxt.scss";

const CardTxt = ({ card }) => {
  return (
    <>
      <div className="card-skills ">
        <div className="card-body">
          <h3 className="card-title">{card.title}</h3>
          <p className="card-tx paragraph">{card.paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default CardTxt;
