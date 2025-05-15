import { Link } from 'react-router';
import logo from '../assets/imgs/header-logo/logo-without-background.png';
import '../assets/style/header-menu.css';


const HeaderMenu = ()=>{

    const scrollToSection = ( goToTheSection ) => {
        const section = document.getElementById( goToTheSection );
        if( section ){
            section.scrollIntoView( { behavior: 'smooth' } );

            section.classList.remove( 'not-located' );
            section.classList.add( 'located' );

            setTimeout(() => {
                section.classList.remove( 'located' );
                section.classList.add( 'not-located' );

            }, 2000);
        }

    };

    return (
        <div className="menu-container">

            <div className='image-logo-container'>
                <Link to={'/'} ><img className='image-logo' src={logo} /></Link>
            </div>

            <div className='menu-options-container'>
                <li><Link to='/'>Inicio</Link></li>
                <li><a onClick={ ( )=> scrollToSection( 'section-show-project' ) }>Proyectos</a></li>
                <li><a onClick={ ( )=> scrollToSection( 'container' ) } >Tecnologías</a></li>
            </div>
        </div>
    );
};

export default HeaderMenu;