import React, { useState } from 'react';

function Header(){
    const [screenSize, setScreenSize] = useState((window.innerWidth<=550 ? "small":"big"));

    window.addEventListener('resize', () => {
        if((screenSize === "small" && window.innerWidth > 550)||(screenSize === "big" && window.innerWidth <= 550)){
            setScreenSize((window.innerWidth <= 550 ? "small":"big"));
        }
    });

    return(
    <header>
        <svg className="top" viewBox="0 0 100 43">
            <a href="#">
                <polygon points="0 43, 25 0, 75 0, 100 43" strokeWidth="0" fill="#fbf8e5"></polygon>
                <text x="29" y="19" className="first name">NELLIE</text>
                <text x="25" y="32" className="last name">NELSON</text>
            </a>

        </svg>
        {(screenSize === "small" ? 
        <nav className="desktopHide">
                <svg viewBox="0 0 100 43">
                    <a href="about.html">
                        <polygon points="0 0, 25 43, 50 0" className="left" fill="#fbf8e5">
                        </polygon>
                        <text x="14" y="12" className="navText">ABOUT</text>
                    </a>

                    <a href="#">
                        <polygon points="25 43, 50 0, 75 43" fill="#3C818E"></polygon>

                        <text x="34" y="38" className="navText current">PROJECTS</text>
                    </a>

                    <a href="contact.html">
                        <polygon className="right" points="50 0, 75 43, 100 0" fill="#fbf8e5"></polygon>
                        <text x="61" y="12" className="navText">CONTACT</text>
                    </a>
                </svg>
                </nav>:<nav className="mobileHide">
                <svg viewBox="0 0 100 43">
                    <a href="about.html">
                        <polygon points="0,43 25,0 50,43" strokeWidth="0" className="navShape">
                        </polygon>
                        <text x="13.5" y="35" className="navText about">ABOUT</text>
                    </a>

                    <a href="#">
                        <polygon points="25,0 50,43 75,0" strokeWidth="0" className="current navShape"></polygon>
                        <text x="34" y="12" className="current navText portfolio">PROJECTS</text>
                    </a>

                    <a href="contact.html">
                        <polygon points="50,43 75,0 100,43" strokeWidth="0" className="navShape"></polygon>
                        <text x="60" y="35" className="navText contact ">CONTACT</text>
                    </a>
                </svg>
            </nav>)}
    </header>
    )
}

export default Header;