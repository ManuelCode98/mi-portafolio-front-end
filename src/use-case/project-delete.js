import axios from "axios";


export const projectDelete = async( { target } ) => {

    const { id } = target;
    
        const option = confirm('Estas seguro de eliminar el proyecto');

        if( option ){

            await axios.delete(`http://localhost:3001/api/project-delete/${id}`)
                .then((response)=>{
                    
                    const { data, status } = response;
                    const { project_file } = data;

                    if( status === 200 ){

                        axios.delete( `http://localhost:3001/api/image-delete-file-system/${ project_file }` );
                    };
            });
            
            return;
        };

    
};

