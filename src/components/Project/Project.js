import { useSelector, useDispatch } from "react-redux";
import ProjectItem from "./ProjectItem";
import { projectActions } from "../../store/project-slice";

function Project(){
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.project);

  const searchProjectHandler = (event) => {
    dispatch(projectActions.searchProject(event.target.value));
  };

  let projectList = (
    <div className="alert col-span-3 flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-info shrink-0 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>Project tidak ditemukan</span>
    </div>
  );

  if(project.length > 0){
    projectList = (
      project.map((item) => (
            <ProjectItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              technology={item.technology}
              link={item.link}
            />
          ))
    )
  }

  let content = projectList;

  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider font-bold text-xl mb-10">
          <div className="card bg-base-300 px-4 py-2">Project</div>
        </div>
      </div>
      <div className="form-control mb-10">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
            onChange={searchProjectHandler}
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {content}
      </div>
    </>
  );
}

export default Project;