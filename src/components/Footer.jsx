import React from "react";
import drone from "../images/drone.png";

const buttonLabel = 'Надіслати запит';

const Footer = () => {
    return (
        <footer className='py-8'>
            <button className='mx-auto text-3xl'>
                {buttonLabel}
            </button>

            <img alt="" src={drone} className="max-h-[400px] mx-auto" />
        </footer>
    )
}

export default Footer;