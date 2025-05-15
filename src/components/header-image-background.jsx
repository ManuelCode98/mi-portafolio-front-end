
import headerImageBackground from '../assets/imgs/header-image-background/header-image-background.png';
import linkedinIcon from '../assets/imgs/social-media-icons/linkedin.png';
import whatsappIcon from '../assets/imgs/social-media-icons/whatsapp.png';
import instagramIcon from '../assets/imgs/social-media-icons/instagram.png';
import facebookIcon from '../assets/imgs/social-media-icons/facebook.png';
import downloadIcon from '../assets/imgs/social-media-icons/download.png';
import '../assets/style/header-image-background.css';


const title = 'Manuel Rodriguez';
const subTitle = 'Desarrollador de software en Palmira-Colombia';
const cv = 'Ver mi CV';
const linkCv = 'https://docs.google.com/document/d/1FjwtVY-uXpHi9b4Q2Vxe4Ol46KWSpDdt/edit?usp=sharing&ouid=112308223268136842079&rtpof=true&sd=true';

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
                <div className='cv' ><a className='cv-link' target='_blank' href={linkCv}>{cv}</a>
                    <a className='icon-download-container' target='_blank' href={linkCv} > % </a>
                </div>
            </div>
        </div>
        
    );

};

export default HeaderImageBackground;