import { useSelector } from "react-redux";
import SkillItem from "./SkillItem";

function Skill() {
    const skill = useSelector((state) => state.skill.skill);

    return (
      <>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider font-bold text-xl mb-10">
            <div className="card bg-base-300 px-4 py-2">Skill</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skill.map((item) => (
                <SkillItem key={item.id} id={item.id} name={item.name} img={item.image} />
            ))}
        </div>
      </>
    );
}

export default Skill;