import Logo from '../../assets/images/BrainFlix-logo.svg'
import Avatar from '../../assets/images/Mohan-muruge.jpg'
import './Header.scss'
import Search from '../../assets/images/search.svg'
import Upload from '../../assets/images/upload.svg'
import { Link } from 'react-router-dom'
import MainVideoPage from '../../Pages/MainVideoPage'
import UploadPage from '../../Pages/UploadPage'

// to-do: 
// add link to MainVideoPage to brainflix logo
// add link to Upload Page to upload button

function Header() {

    return (
        <header className='header'>
            <div className="header__logo-container"><Link className="header__logo-container" to='/'><img className='header__logo' src={Logo}></img></Link></div>
            <section className='header__search-container'>
                <div className='header__search'><img className='header__search-icon' src={Search}/><input className='header__input' type='search' placeholder='Search'></input>
                </div>
                <div className='header__avatar-container'><img src={Avatar} alt='avatar' className='header__avatar'></img></div> 
                <div className='header__upload'><Link className='header__upload' to="/upload"><button className='header__button'><img className='header__icon' src={Upload}/>upload</button></Link></div>                
            </section>
        </header>
    )

}

export default Header