function SkillItem(props){
    return (
      <div className="card rounded-xl text-center bg-base-200">
        <div className="card-body py-3">
          <figure>
            <img src={props.img} className="w-10" alt={props.name} />
          </figure>
          <h2 className="text-lg">{props.name}</h2>
        </div>
      </div>
    );
}

export default SkillItem;