import { Link } from 'react-router';

import logo from '../assets/imgs/header-logo/logo-without-background.png';
import '../assets/style/header-menu.css';


const HeaderMenu = ()=>{


    return (

        <div className="menu-container">

            <div className='image-logo-container'>
                <Link to={'/'} ><img className='image-logo' src={logo} /></Link>
            </div>

            <div className='menu-options-container'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='acerca-de'>Acerca de</Link></li>
                <li><Link to='panel-control'>Panel de control</Link></li>
            </div>

            

        </div>
        

    )


};

export default HeaderMenu;