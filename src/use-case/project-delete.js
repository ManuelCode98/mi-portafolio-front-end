import axios from "axios";


export const projectDelete = async( { target } ) => {

    const { id } = target;
    
        const option = confirm('Estas seguro de eliminar el proyecto');

        if( option ){

            // await axios.delete(`http://localhost:3001/api/project-delete/${id}`)
            await axios.delete(`https://portafolio-back-end-yyu5.onrender.com/api/project-delete/${id}`)
                .then(({ data })=>{
        
                    // console.log(data);
            });
            
            return;
        };

    
};

