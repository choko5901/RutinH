import './header.scss'

function Header(){

    return(
        <header className="main-header">
            <div className='header-lower'>
                <div className='container'>
                    <div className='main-box'>
                        <div className='logo-box'>
                            <div className='logo'>
                                <a href='/' aria-current="page">
                                    <p className='logo_title'>LUTIN<span className='H_style'>H</span></p>
                                </a>
                            </div>
                        </div>
                        <div className='nav-wapper'>
                            <nav className='nav main-list'>
                                <ul className='navigation'>
                                    <li className='current'>
                                        <a href='/'>HOME</a>
                                    </li>
                                    <li>
                                        <a href='/'>About</a>
                                    </li>
                                    <li>
                                        <a href='/'>Service</a>
                                    </li>
                                    <li>
                                        <a href='/'>Contact</a>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div className='outer-box'>
                            <div className='header-btn-wapper'>
                                <button className='header-btn-style sign-btn'>Sign in</button>
                                <button className='header-btn-style sign-btn'>Sign up</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header
