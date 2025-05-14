
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
const linkCv = 'https://drive.usercontent.google.com/download?id=15nalZmKy0MUf6grES5akU5Jtw6CbvNei&export=download&authuser=0&confirm=t&uuid=3253bfa6-338a-4ba5-b8c6-4c877cf3c8a8&at=ALoNOgnKJ_tNI-73a-VH1UD0QY1O:1747256844710';

const linkLinkedin = 'https://www.linkedin.com/in/manuel-rodriguez-ba5b5b339/';
const linkWhatsapp = 'https://wa.me/3157382433';
const linkInstagram = 'https://www.instagram.com/manuelr098/';
const linkFacebook = 'https://www.facebook.com/profile.php?id=100001364317304';

const HeaderImageBackground = ()=>{

    return (
        <div className='header-and-title-container'>
            <img className="header-image-background" src={headerImageBackground}/>
            <div className='header-information-container'>
                <h1 className='header-title'>{title}</h1>
                <h3 className='sub-title'>{subTitle}</h3>
                <span className='container-social-networks'>
                    <a href={ linkLinkedin }  target='_blank' > <img className='icons linkedin-icon' src={linkedinIcon} /> </a>
                    <a href={ linkWhatsapp }  target='_blank' > <img className='icons whatsapp-icon' src={whatsappIcon} /> </a>
                    <a href={ linkInstagram } target='_blank' > <img className='icons instagram-icon' src={instagramIcon} /> </a>
                    <a href={ linkFacebook }  target='_blank' > <img className='icons facebook-icon' src={facebookIcon} /> </a>
                </span>
                <button className='cv' target='_blank' href={linkCv}><a target='_blank' href={linkCv}>{cv}</a>
                    
                    <div className='icon-download-container'>
                        <img className='icon-download' src={downloadIcon} />
                    </div>
                </button>
            </div>
        </div>
        
    );

};

export default HeaderImageBackground;