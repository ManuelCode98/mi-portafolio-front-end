import { Link } from 'react-router';
import logo from '../assets/imgs/header-logo/logo-without-background.png';
import '../assets/style/header-menu.css';


const HeaderMenu = ()=>{

    const scrollToSection = ( goToTheSection ) => {
        const section = document.getElementById( goToTheSection );
        section && section.scrollIntoView( { behavior: 'smooth' } ); 

    };

    return (
        <div className="menu-container">

            <div className='image-logo-container'>
                <Link to={'/'} ><img className='image-logo' src={logo} /></Link>
            </div>

            <div className='menu-options-container'>
                <li><Link to='/'>Inicio</Link></li>
                <li><a onClick={ ( )=> scrollToSection( 'section-show-project' ) }>Proyectos</a></li>
                <li><a onClick={ ( )=> scrollToSection( 'title-skills' ) } >Tecnologías</a></li>
            </div>
        </div>
    );
};

export default HeaderMenu;