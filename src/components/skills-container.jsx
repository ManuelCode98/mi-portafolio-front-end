import '../assets/style/skills-container.css';
import htmlCssIcon from '../assets/imgs/technology-icons/html-css.png';
import reactJsIcon from '../assets/imgs/technology-icons/react-js-icon.png';
import sqlNosqlIcon from '../assets/imgs/technology-icons/sql-nosql-icon.png';


const title = 'Tecnologias que domino como desarrollador';

const SkillsContainer = (  )=>{

    return (
        <div id='container' className="container not-located">
            <h2 className='title'>{title}</h2>
            <div className="skills-container">

                <div className="icons-technology-container"> 
                    <div>
                        <img className='technology-icons' src={htmlCssIcon} />
                    </div>
                    <div>
                        <img className='technology-icons' src={reactJsIcon} />
                    </div>
                    <div>
                        <img className='technology-icons' src={sqlNosqlIcon} />
                    </div>
                </div>

                <div className="skills">
                    <div>
                        <h3>Lenguaje de marcado de hipertexto y estilos</h3>
                        <p>HTML y CSS para crear la estructura y el diseño de cada sitio web</p>
                    </div>
                    <div>
                        <h3>Lenguajes de programación y tecnologías</h3>
                        <p>JavaScript y React para agregar funcionalidades que sean interactivas y dinámicas</p>
                        <p>NodeJs, ExpressJS y Prisma para hacer la lógica del lado del servidor</p>
                    </div>
                    <div>
                        <h3>Bases de datos</h3>
                        <p>SQL, NoSQL: PostgreSQL y MongoDB para almacenar y gestionar la infomacion de manera eficiente</p>
                    </div>
                </div>
            </div>
        </div>

    );

};


export default SkillsContainer;