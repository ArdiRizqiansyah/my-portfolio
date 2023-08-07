function ProjectItem(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="card bg-base-100 shadow-xl overflow-hidden"
    >
      <img src={props.image} className="img-fluid self-center" alt={props.name} />
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.technology}</p>
      </div>
    </a>
  );
}

export default ProjectItem;