import { useEffect, useState } from 'react';
import '../assets/style/show-projects.css';
import { projects } from '../data/projects';



export const ShowProjects = ()=>{

    const [ projectsState, setProjectsState ] = useState([]);
    const [ imageSequenceState, setImageSequenceState ] = useState( 0 );

    setTimeout(() => {
        
        imageSequenceState === 0 && setImageSequenceState( imageSequenceState + 1 );
        imageSequenceState === 1 && setImageSequenceState( imageSequenceState + 1 );
        imageSequenceState === 2 && setImageSequenceState( 0 );

    }, 5000);
    
    useEffect(()=>{ 
    
        projects && setProjectsState( projects );

    },[]);
    

    const changeClass = ( { target } )=>{
        
        const idProject = target.id;
    
        const selectProject = document.getElementById(`container-img-project${ idProject }`);
            
        if( selectProject.className === 'container-img-project show-disabled' ){
    
            selectProject.classList.add( 'show-active' );
            return
        };

        selectProject.classList.remove( 'show-active' );
    };

    return (
            <div id='section-show-project' className="container-show-projects not-located"  >

                { Array.isArray( projectsState ) && projectsState.map( (projectValue, key)=>{
                       return (
                                <div className='project-container' key={projectValue.id}>
                                    <div id={ `container-img-project${ projectValue.id }` } className={ 'container-img-project show-disabled' }>
                                        <img className='img-project' src={projectValue.project_file[imageSequenceState]}/>
                                    </div>
                                    <div className='container-data-project'>
                                        <h4 className='title-project' >{projectValue.name_project}</h4>
                                        <p className='sub-title-project'>Tecnologias: <span className='technology'>{projectValue.name_technology}</span></p>
                                        <a className='link' href={'https://'+projectValue.project_link} target='_blank' rel='noopener noreferrer' >Enlace del proyecto</a>
                                    </div>
                                    <div className='icons-container'>
                                        <button id={ projectValue.id } className = 'icons-projects icon-show' 
                                            onClick={ changeClass }>
                                                I
                                        </button>
                                    </div>
                                </div> 
                              )
                    })
                }
    
            </div>
    )
};