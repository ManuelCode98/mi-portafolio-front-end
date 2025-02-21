import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios  from 'axios';
import { Link } from 'react-router';
import { loginResponse } from './login';
import '../../assets/style/pages-style/panel-control.css';

let projectId = '';
let project = 0;
let enableButtonUpdate = '';

let showMessageResponse = '';

const projectAdd = async( data )=>{

  const { name_project, name_technology, project_link, project_file } = data;

  const data_project_file = project_file[0];

  const formData = new FormData();
  formData.append('name_project',name_project);
  formData.append('name_technology',name_technology);
  formData.append('project_link',project_link);
  formData.append('file',data_project_file);
  formData.append('image',data_project_file);

  console.log(data_project_file)

  try {
   const response = await axios.post(`https://api.imgbb.com/1/upload?key=12474afbd8f57b42c6df468c4bcf3cd7`, formData, { 
      headers: {
        'Content-Type':'multipart/form-data'
      } 

    });
    
   const { success } = response.data;
   const { url } = response.data.data;
   

      if( success ){

        const project_file = url;

        const response = await axios.post('https://portafolio-back-end-yyu5.onrender.com/api/create-project', {

          name_project,
          name_technology,
          project_link,
          project_file,

        });

        const { data, success } = response.data;

        if( success ){

          showMessageResponse = data ;

          setTimeout(()=>{

            showMessageResponse='';
            
          }, 5000)

        }
        
      } else {

        showMessageResponse = 'Imagen no subida';

        setTimeout(()=>{

          showMessageResponse = '';

          }, 3000)
        }

  } catch (error) {

    console.log(error)
  }

}

const projectUpdate = async(  data ,id )=>{

  const { name_project, name_technology, project_link, project_file } = data;

  // Se utiliza el FormData para crear un para de valor osea que la imagen tenga su
  // llaver y asi la pueda recibir el backend
  const data_project_file = project_file[0];

  const formData = new FormData();
  formData.append('name_project',name_project);
  formData.append('name_technology',name_technology);
  formData.append('project_link',project_link);
  formData.append('image',data_project_file);

  try{
    const response = await axios.post( `https://api.imgbb.com/1/upload?key=12474afbd8f57b42c6df468c4bcf3cd7`, formData, {
      
      headers: {
        "Content-Type":"multipart/form-data"
      }
    })

    const { success } = response.data;
    const { url } = response.data.data;

    if( success ){

      // const response = await axios.put(`http://localhost:3001/api/update-project/${id}`, {
      const response = await axios.put(`https://portafolio-back-end-yyu5.onrender.com/api/update-project/${id}`, {

        name_project,
        name_technology,
        project_link,
        project_file: url,
      })

      const { data, success } = response.data;

      if( success ){

        showMessageResponse = data;

        setTimeout(()=>{
          showMessageResponse = '';

          console.log(hola)
        }, 3000)

      }

    }else{
  
      showMessageResponse = 'Imagen no actualizada...';
    
        setTimeout(()=>{
          showMessageResponse = '';
        }, 5000)
    }

  }catch(error){
    console.log(error)
  }


}

export const fillInFormField = ( eventClick, projectObj )=>{

  projectId = eventClick.target.id;
  project = projectObj;
  enableButtonUpdate = eventClick.target.className;

};


export const PanelControl = ( ) => {
  
  const [ errorMessage, setErrorMessage ] = useState('error-message-none');

  const [ useFormState, setFormState ] = useState({
    name_project: project.name_project,
    name_technology: project.name_technology,
    project_link: project.project_link,
    project_file: project.project_file,
  })

  const { register, handleSubmit, formState : { errors } } = useForm();
  
  const { name_project, name_technology, project_link, project_file } = useFormState;

  const cleanForm = ( formData )=>{

   const { name_project, name_technology, project_link, project_file } = formData;

    if( name_project && name_technology && project_link && project_file ){

      setTimeout(() => {
        setFormState( {
          name_project: '',
          name_technology: '',
          project_link: '',
          project_file: '',
        } )
      }, 500);
      
      return;
    }
    
  };


  const onInputChange = ( { target } )=>{

    const { name, value } = target;


    if(project != 0){

      setFormState({ ...useFormState, [name] : value});

      return;
    }
 
    setFormState({ ...useFormState, [name] : value})
  }

  return ( 
    <div className='panel-control-container'>
      
      <h1 className='panel-control-title'>Agrega tus proyectos</h1> 

      <span className={ errorMessage }>Los campos marcado con * son obligatorios...</span>
      { loginResponse ? (  
      <form className='form' onSubmit={ enableButtonUpdate ? (
           handleSubmit( ( eventData ) => { projectUpdate( eventData, projectId ), cleanForm( eventData )} )
        ): handleSubmit( ( eventData ) => { projectAdd( eventData ), cleanForm( eventData )} ) }> 

        <div className='label'>
          <label htmlFor="name_project">Nombre del proyecto<span className='asterisk'>*</span></label>
        </div>
        <input 
          type='text' 
          id='name_project' 
          name='name_project' 
          value={name_project}
          onChange={ onInputChange }
          placeholder='Escribe el nombre del proyecto...'
          {... register('name_project', {required: true, onChange: onInputChange })}
          />

          {
            errors.name_project?.type === 'required' && (
              <p className='error-message'>El nombre del proyecto es obligatorio...</p> 
            )
          }


        <div className='label'>
          <label htmlFor="name_technology">Nombra las tecnologias que utilizaste<span className='asterisk'>*</span></label>
        </div>
        <input type='text' 
          id='name_technology' 
          name='name_technology'
          value={name_technology}
          onChange={ onInputChange }
          placeholder='Escribe las tecnologias usadas...'
          {...register('name_technology', { required: true, onChange: onInputChange } ) }
        />

          {
            errors.name_technology?.type === 'required' && (
              <p className='error-message'>Las tecnologias usadas en el proyecto son obligatorias...</p> 
            )
          }



        <div className='label'>
          <label htmlFor='project_link' type='text' >Link del projecto en gitHub<span className='asterisk'>*</span></label>
        </div>
        <input type='text' 
          id='project_link' 
          name='project_link' 
          value={project_link}
          onChange={ onInputChange }
          placeholder='www.github.com/name1234/project' 
          {...register('project_link', { required: true, onChange: onInputChange } )}
        />

          {
            errors.project_link?.type === 'required' && (
              <p className='error-message'>El link del proyecto es obligatorio...</p>

            )
          }


        <div className='label'>
          <label htmlFor='project_file' type='file'>Imagen del proyecto<span className='asterisk'>*</span></label>
        </div>
        <input className='button button-load-file' type='file' 
          id='project_file' 
          name='project_file'
          // accept='.png, .jpg' 
          accept='image/*'
          {...register( 'project_file', { required: true, }) }
        />

        {
          errors.project_file?.type === 'required' && (
            <p className='error-message'>La imagen del proyecto es obligatoria...</p>

          ) 
        }

        {
          enableButtonUpdate ? (
          <button className='button button-update'  >Actualizar proyecto</button>
          ): <button className='button button-add' onClick={ cleanForm } >Agregar proyecto</button>
        }
 
        <h3 className='projectCommentCreated'>{ showMessageResponse }</h3>

      </form> 

      ):( <h3>Debes inicia sesión <Link to={'../login'}> Click aqui</Link></h3>) }
    </div>

  )
}