import React from 'react';
//importing everything react router related
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) =>{
    //defining our styling for the button
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to='sign-up' className='btn-mobile'>
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
}

export default Button;