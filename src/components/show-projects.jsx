import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import '../assets/style/show-projects.css';


export const ShowProjects = ()=>{

    const changeClass = ( { target } )=>{
        
        const idProject = target.id;
    
        const selectProject = document.getElementById(`container-img-project${ idProject }`);
            
        if( selectProject.className === 'container-img-project show-disabled' ){

            console.log('Estoy en el if')
    
            selectProject.classList.add( 'show-active' );

            return

        };

        selectProject.classList.remove( 'show-active' );

    };


    const [ projects, setProjects ] = useState([]);

        const getProjects = async( event = null  )=> {

            
            
        }
        
        useEffect(()=>{ 
            getProjects(); 
        },[]);

        return (
            <div className="container-show-projects"  >
                { 
                    projects.map( (projectValue, key)=>{
                       return <div className='project-container' key={projectValue.id}>
                                <div id={ `container-img-project${ projectValue.id }` } className={ 'container-img-project show-disabled' }>
                                    <img className='img-project' src={projectValue.project_file}/>
                                </div>
                                <div className='container-data-project'>
                                    <h4 className='title-project' >{projectValue.name_project}</h4>
                                    <p className='sub-title-project'>Tecnologias: <span className='technology'>{projectValue.name_technology}</span></p>
                                    <a className='link' href={'https://'+projectValue.project_link} target='_blank' rel='noopener noreferrer' >Enlace del proyecto</a>
                                </div>
                                <div className='icons-container'>
                                    <button className='icons-projects icon-update' >
                                        <Link id={ projectValue.id } 
                                            onClick={ (event)=> fillInFormField( event, projectValue, projectValue.project_file ) } 
                                            className='link-icon-update' to='panel-control'> 
                                                p
                                        </Link>
                                    </button>
        
                                { loginResponse && (
                                    <button className='icons-projects icon-delete' >
                                        <Link id={ projectValue.id } 
                                            onClick={ async( e ) =>  { await projectDelete(e), await getProjects( e ) }} 
                                            className='link-icon-delete' to='/'>
                                                ' 
                                        </Link>
                                    </button>
                                )}
                                    <button id={ projectValue.id } className = 'icons-projects icon-show' 
                                            onClick={ changeClass }>
                                                I
                                    </button>
                                    
                                </div>
                        </div> 
                    } )
                }
    
            </div>
      )

};