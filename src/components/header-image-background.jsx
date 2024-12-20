
import headerImageBackground from '../assets/imgs/header-image-background/header-image-background.png';

import linkedinIcon from '../assets/imgs/social-media-icons/linkedin.png';
import whatsappIcon from '../assets/imgs/social-media-icons/whatsapp.png';
import instagramIcon from '../assets/imgs/social-media-icons/instagram.png';
import facebookIcon from '../assets/imgs/social-media-icons/facebook.png';
import downloadIcon from '../assets/imgs/social-media-icons/download.png';


import '../assets/style/header-image-background.css';

const title = 'Manuel Rodriguez';
const subTitle = 'Desarrollador de software en Palmira-Colombia';
const cv = 'Descarga mi CV';


const HeaderImageBackground = ()=>{
    

    return (
        <div className='header-and-title-container'>
            <img className="header-image-background" src={headerImageBackground}/>
            <div className='header-information-container'>
                <h1 className='header-title'>{title}</h1>
                <h3 className='sub-title'>{subTitle}</h3>
                <span className='container-social-networks'>
                    <img className='icons linkedin-icon' src={linkedinIcon} />
                    <img className='icons whatsapp-icon' src={whatsappIcon} />
                    <img className='icons instagram-icon' src={instagramIcon} />
                    <img className='icons facebook-icon' src={facebookIcon} />
                </span>
                <button className='cv'><a>{cv}</a>
                    
                    <div className='icon-download-container'>
                        <img className='icon-download' src={downloadIcon} />
                    </div>
                </button>
            </div>
        </div>
        
    );

};

export default HeaderImageBackground;