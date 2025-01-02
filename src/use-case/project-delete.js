import axios from "axios";




export const projectDelete = async( { target } ) => {

    const { id } = target;
    
        const option = confirm('Estas seguro de eliminar el proyecto');

        if( option ){
            // const id = eventId.target.id;
            await axios.delete(`http://localhost:3001/api/project-delete/${id}`)
                .then((response)=>{
    
                    console.log(`Borraste el proyecto con el id: ${ id}`);
                    console.log(`Llamado la funcion delete `);

                   
            });

            return;
        };

    
};

