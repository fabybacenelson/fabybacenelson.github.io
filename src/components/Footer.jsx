import React from 'react';

function Footer(){

    return (<footer>
        <svg viewBox="0 0 100 43">
                <a href="https://www.linkedin.com/in/nellie-nelson/">
                    <polygon points="0 43, 25 0, 50 43" strokeWidth="0" fill="#4ba2b2">
                    </polygon>
                    <image width="18" x="16.5" y="19" href="assets/images/linkedinLight.svg"></image>
                </a>

                <a href="https://github.com/fabybacenelson">
                    <polygon points="25 0, 50 43, 75 0" strokeWidth="0" fill="#fbf8e5"></polygon>
                    <image width="25" x="38.5" y="3" href="assets/images/githubBlue.svg"></image>
                </a>

                <a href="mailto:NaN@nellienelson.com">
                    <polygon points="50 43, 75 0, 100 43" strokeWidth="0" fill="#4ba2b2"></polygon>
                    <text x="64" y="34.5" className="footText">@</text>
                </a>
            </svg>
    </footer>)

}

export default Footer;