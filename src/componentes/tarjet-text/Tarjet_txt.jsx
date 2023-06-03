import "./Tarjet-txt.scss";

const Tarjet_txt = ({ card }) => {
  return (
    <>
      <div className="card-skills ">
        <div className="card-body">
          <h3 className="card-title">{card.title}</h3>
          <p className="card-tx">{card.paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default Tarjet_txt;
