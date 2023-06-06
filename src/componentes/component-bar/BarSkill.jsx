import "./BarSkills.scss";

const BarSkill = ({ cita }) => {
  return (
    <>
      <div className="content-bar">
        <span>{cita.icon}</span>
        <span>{cita.bar}</span>
      </div>
    </>
  );
};

export default BarSkill;
