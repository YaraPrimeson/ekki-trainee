import { Outlet } from 'react-router-dom';
import logo from '../asscets/img/logo.png'
import Vector from '../asscets/img/Vector.png'
import basket from '../asscets/img/basket.png'
import facebook from '../asscets/img/facebook.png'
import insta from '../asscets/img/insta.png'
import mail from '../asscets/img/mail.png'
import mastercard from '../asscets/img/mastercard.png'
import visa from '../asscets/img/visa.png'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../Context/ThemeProvider'
import ThemeSwitcher from './ThemeSwitcher';



const Layout = () =>{
    const { theme } = useContext(ThemeContext);
 

    
    return (
       
            <div className='main'style={{ backgroundColor: theme, color: theme === "light" ? "black" : "light" }}>
                        <div className="nav__bar__container">
                            <div className='nav__text__container'>
                                <ul>
                                    <Link className='nav__text' to ="/">home</Link>
                                </ul>
                                <ul>
                                    <Link className='nav__text' to ='/clothes'>clothes</Link>
                                </ul>
                                <ul>
                                    <Link className='nav__text' to ='/toys'>toys</Link>
                                </ul>
                                <ul>
                                    <Link className='nav__text' to ='/accessories'>accessories</Link>
                                </ul>
                                <ul>
                                    <Link className='nav__text' to ='/carryingbags'>carrying bags</Link>
                                </ul>
                                <ul>
                                    <Link className='nav__text' to ='/dogbed'>dog bed</Link>
                                </ul>
                                <ul>
                                    <Link className='nav__text' to ='/delivery'>delivery</Link>
                                </ul>
                            </div>
                            <img className='logo__img' src= {logo} alt="#" />
                            <div className='basket__container'>
                                <ThemeSwitcher/>
                                <div className='lenguage'>EN</div>
                                <img className='img__basket'  src={Vector} alt="" />
                                <img  className='img__basket' src={basket} alt="" />
                            </div>
                        </div>
                        <div className='wrapper'><Outlet/></div>
                        <footer className='footer__container'>
                            <div className='findus__container'>
                                <img className='find__us1' src={facebook} alt="" />
                                <img className='find__us2' src={insta} alt="" />
                                <img className='find__us3' src={mail} alt="" />
                            </div>
                            <img className='footer__logo' src={logo} alt="" />
                            <div className='pay__container'>
                                <img className='pay' src={mastercard} alt="" />
                                <img className='pay' src={visa} alt="" />
                            </div>
                        </footer>
                    
                    
            </div>
              
    )
  
}

export default Layout ;