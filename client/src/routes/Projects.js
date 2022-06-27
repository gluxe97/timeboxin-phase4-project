import React,{useState,useEffect} from "react";
import ProjectCard from "./ProjectCard";

function Projects(){
    const [projects,setProjects]=useState([]);
    useEffect (()=>{
        fetch('/projects')
        .then(res => {
          if(res.ok){
            res.json().then(projects => {
            setProjects(projects);
        });
        }
      });
      },[]);
      const projectCard=projects.map((project)=>{
        return <ProjectCard project={project}/>
      })



    return(
        <div>
            <div>
                {projectCard}
            </div>
            <button>create project</button>
        </div>
    )
}

export default Projects;