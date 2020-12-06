import logo from './assets/logo3.png'

function Header (){
    return(
        <header>
            <img className='logo' src={ logo } alt='logo'></img>
        </header>
    )
}

export default Header