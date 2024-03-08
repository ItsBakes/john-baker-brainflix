import Logo from '../../assets/images/BrainFlix-logo.svg'
import Avatar from '../../assets/images/Mohan-muruge.jpg'
import './Header.scss'

function Header() {

    return (
        <header className='header'>
            <div className="header__logo-container"><img className='header__logo' src={Logo}></img></div>
            <section className='header__search-container'>
                <div className='header__search'><i className='header__icon'></i><input className='header__input' type='search' placeholder='Search'></input>
                </div>
                <div className='header__upload'> <button className='header__button'>upload</button></div>
                <div> <img src={Avatar} alt='avatar' className='header__avatar'></img></div>   
                
            </section>
        </header>
    )

}

export default Header