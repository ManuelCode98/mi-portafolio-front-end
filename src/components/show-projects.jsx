import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import '../assets/style/show-projects.css';
import axios  from 'axios';
import { projectDelete } from '../use-case/project-delete';
import { fillInFormField } from './pages/panel-control';




/////////////////////////////////////////////


// import * as imagesProjects from '../../../server/src/upload-image/';
// import imagesProjects from '../../public/upload-image/';

// const img = '1734398254333.png';

// const obj = {
//     imagesProjects,
//     img
// }

// {/* <img className='project-img' src={imagn[i]} />  */}
//  {/* <img className='project-img' src={require('../../public/upload-image/1734398254333.png')} /> */}
////////////////////////////////////////////

// '1734496470643.jpg'
let imagens ='upload-image/';
// let image = [

// ]



export const ShowProjects = ()=>{

    // const [ project, setImage ] = useState([]);
    const [ projects, setProjects ] = useState([]);


        const getProjects = ()=> {
            console.log('entre')
            console.log('Se llamo requestToShowProjects')
            axios.get('http://localhost:3001/api/show-projects')
            .then( async(response)=>{

            const arrProjects = await response.data;
            
            setProjects(arrProjects);   
            
            }) 
        }

        useEffect(()=>{
            getProjects();

        },[]);

  return (
    <div>
        <div className="container-show-projects"  >
            {   
                projects.map( (projectValue, key)=>{
                   return <div className='project-container' key={projectValue.id}>
                        <img className='img-project' src={imagens+projectValue.project_file}/>
                        <h4 className='title-project' >{projectValue.name_project}</h4>
                        <p className='sub-title-project'>Tecnologias: <span className='technology'>{projectValue.name_technology}</span></p>
                        <a className='link' href={projectValue.project_link} target='_blank' >Enlace del proyecto</a>
                        <div className='icons-container'>
                            <button id={ projectValue.id } className='icons-projects icon-update' ><Link  id={ projectValue.id } onClick={ (event)=> fillInFormField( event, projectValue ) } className='link-icon-update' to='panel-control'>p</Link></button>
                            <button id={ projectValue.id } className='icons-projects icon-delete' onClick={projectDelete} >'</button>
                        </div>
                    </div> 
                } )

                
            }

        </div>
        
    </div>
  )
};

 
