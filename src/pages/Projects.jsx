import React from 'react';

function Projects(){
    return(
        <main>
            <svg className="halfHex rTwo left mobileHide" viewBox="0 0 100 43">
            <polyline points="0 0, 25 43, 75 43, 100 0" fill="#80beca"></polyline>
        </svg>

        <svg className="halfHex rTwo right mobileHide" viewBox="0 0 100 43">
            <polyline points="0 0, 25 43, 75 43, 100 0" fill="#80beca"></polyline>
        </svg>

        <svg className="fullHex left" viewBox="0 0 100 86">
            <g className="projHex">
                <polygon className="mobileHide titleHex" points="0,43 25,0 75,86 25,86" fill="#80beca"></polygon>

                <polygon className="shape" points="25 0, 50 43, 75 0" strokeWidth="0" fill="#fbf8e5"></polygon>
                <image width="20" x="40" y="6" href="assets/images/grade.svg"></image>
                <text x="40" y="-6" transform="rotate(60)" className="projText" id="code">CODE</text>
                <text x="42" y="8" transform="rotate(60)" className="projText" id="quiz">QUIZ</text>

                <a className="triLink" href="https://github.com/WhoaNellie/Code-Quiz">
                    <polygon className="shape" points="75 0, 50 43, 100 43" strokeWidth="0" fill="#4ba2b2"></polygon>
                    <text x="36.5" y="12" transform="rotate(60, 50, 43)" className="gitlink repo">REPO</text>
                </a>


                <a className="triLink" href="https://WhoaNellie.github.io/Code-Quiz/">
                    <polygon className="shape" points="50 43, 75 86, 100 43" strokeWidth="0" fill="#fbf8e5"></polygon>
                    <text x="60" y="40" transform="rotate(60, 50, 43)" className="gitlink page">PAGE</text>
                </a>
            </g>
        </svg>

        <svg className="fullHex center" viewBox="0 0 100 86">
            <g className="projHex">
                <polygon className="mobileHide titleHex" points="0,43 25,0 75,86 25,86" fill="#80beca"></polygon>
                <text x="26" y="-7" transform="rotate(60)" className="projText" id="password">PASSWORD</text>
                <text x="34" y="5" transform="rotate(60)" className="projText" id="generator">GENERATOR</text>
                <polygon className="shape" points="25 0, 50 43, 75 0" strokeWidth="0" fill="#fbf8e5"></polygon>
                <image width="18" x="43" y="6" href="assets/images/key.svg"></image>

                <a className="triLink" href="https://github.com/WhoaNellie/Password-Generator">
                    <polygon className="shape" points="75 0, 50 43, 100 43" strokeWidth="0" fill="#4ba2b2"></polygon>
                    <text x="36.5" y="12" transform="rotate(60, 50, 43)" className="gitlink repo">REPO</text>
                </a>


                <a className="triLink" href="https://WhoaNellie.github.io/Password-Generator/">
                    <polygon className="shape" points="50 43, 75 86, 100 43" strokeWidth="0" fill="#fbf8e5"></polygon>
                    <text x="60" y="40" transform="rotate(60, 50, 43)" className="gitlink page">PAGE</text>
                </a>
            </g>
        </svg>

        <svg className="fullHex right" viewBox="0 0 100 86">
            <g className="projHex">
                <polygon className="mobileHide titleHex" points="0,43 25,0 75,86 25,86" fill="#80beca"></polygon>
                <text x="40" y="-7" transform="rotate(60)" className="projText" id="weather">DEATH</text>
                <text x="38" y="5" transform="rotate(60)" className="projText" id="dashboard">CLAUSE</text>
                <polygon className="shape" points="25 0, 50 43, 75 0" strokeWidth="0" fill="#fbf8e5"></polygon>
                <image width="20" x="40" y="6" href="assets/images/cat.svg"></image>

                <a className="triLink" href="https://github.com/WhoaNellie/The-Death-Clause">
                    <polygon className="shape" points="75 0, 50 43, 100 43" strokeWidth="0" fill="#4ba2b2"></polygon>
                    <text x="36.5" y="12" transform="rotate(60, 50, 43)" className="gitlink repo">REPO</text>
                </a>


                <a className="triLink" href="https://thedeathclause.herokuapp.com/">
                    <polygon className="shape" points="50 43, 75 86, 100 43" strokeWidth="0" fill="#fbf8e5"></polygon>
                    <text x="60" y="40" transform="rotate(60, 50, 43)" className="gitlink page">PAGE</text>
                </a>
            </g>
        </svg>

        </main>
    )
}

export default Projects;