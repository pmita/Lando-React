import React, {useState, useEffect} from 'react';
//importing everything react router related
import {Link} from 'react-router-dom';
import Button from './Button';

const NavBar = () => {
    //setting our local state
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    //defining our event handlers
    const clickHandler = () => setClick(!click);
    const closeMenuHandler = () => setClick(false);

    //defining our functions
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener( 'resize', showButton);

    useEffect( () => {
        showButton();
    }, [])
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMenuHandler}>
                        TVLR <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={clickHandler}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="item">
                            <Link to="/" className="nav-links" onClick={closeMenuHandler}>
                                Home
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/services" className="nav-links" onClick={closeMenuHandler}>
                                Services
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/products" className="nav-links" onClick={closeMenuHandler}>
                                Products
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMenuHandler}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {
                        button && <Button buttonStyle='btn--outline'>SIGN UP</Button>
                    }
                </div>
            </nav>
        </>
    );
}

export default NavBar;