import axios from "axios";



export const projectDelete = ( eventId ) => {

    const option = confirm('Estas seguro de eliminar el proyecto');
    
    if( option ){
        const id = eventId.target.id;
        axios.delete(`http://localhost:3001/api/project-delete/${id}`)
            .then((response)=>{
                console.log(response);

        });

        return;
    };

    
};

