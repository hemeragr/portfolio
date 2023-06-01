import Bar50 from "./bar-skills/Bar50";
import IconHtml from "./bar-skills/icons-skills/IconHtml";
import "./BarSkills.scss";
import Bar25 from "./bar-skills/Bar75";
import Bar75 from "./bar-skills/Bar25";
import Bar100 from "./bar-skills/Bar100";

const BarSkill = () => {
  return (
    <>
      <div className="bar-skill">
        <IconHtml />
        <Bar25 />
        <Bar50 />
        <Bar75 />
        <Bar100 />
      </div>
    </>
  );
};

export default BarSkill;
