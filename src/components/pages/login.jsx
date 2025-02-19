import { useForm } from 'react-hook-form';
import '../../assets/style/pages-style/login.css';
import { useState } from 'react';
import axios from 'axios';

export let loginResponse = ''; 
       let titleLoginResponse = '';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [ useFormState, setFormState ] = useState({
    email: '',
    password: '',
  })
  
  const onInputChange = ( { target } )=>{

    const { name, value } = target;

    setFormState({ ...useFormState, [name] : value })

  }

  const loginPetition = async( )=>{

    try {

      await axios.post('http://localhost:3001/api/login', { email: useFormState.email, password: useFormState.password} )
      // await axios.post('http://192.168.18.2:3001/api/login', { email: useFormState.email, password: useFormState.password} )
      .then(( { data, status } )=>{
      
      if(status === 200){
        loginResponse = status;

        titleLoginResponse = data;
      }

      });

    } catch ( { response, status } ) {

      const { data } = response;

      if( status === 401 ){

        titleLoginResponse = data;
      } 
      if ( status === 500 ){

        titleLoginResponse = data;
      }
      
    }
    
  };

  const cleanForm = ( formData )=>{

    const { email, password } = formData;
 
     if( email && password ){
 
       setTimeout(() => {
         setFormState( {
           email: '',
           password: '',
         } )
       }, 500);
       
       return;
     }
     
   };

  return (
    <div className='login-container'>
      <h1>Inicia Sesión</h1>

      <form className="form" onSubmit={ handleSubmit( ( eventData )=> { loginPetition( eventData ), cleanForm( eventData ) } ) } >
        <div className='label'>
          <label htmlFor="email">Escribe tu email</label>
        </div>
        <input 
          type="email" 
          id="email"
          name="email" 
          value={ useFormState.email }
          onChange={ onInputChange }
          placeholder="email@gmail.com"
          { ...register( 'email', { required: true, onChange: onInputChange } )}/>
          

        <div className='label'>
          <label htmlFor="password">Escribe tu contraseña</label>
        </div>
        <input 
          type="password" 
          id="password" 
          name="password"
          value={ useFormState.password }
          onChange={ onInputChange } 
          placeholder="Xxxxxx56."
          { ...register( 'password', { required: true, onChange: onInputChange } )}/>

        <button className="button button-login">Iniciar</button>
      </form>

      <h3 className='title-login-response' > { titleLoginResponse } </h3>

    </div>
  )
}

export default Login;
