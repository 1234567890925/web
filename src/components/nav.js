import { Link } from 'react-router-dom';

function Nav(){
    return(
        <nav className="main-nav">
            <ul>
                <li><a href="/bio" className="bio">Bio</a></li>
                <li><a href="/edu" className="edu">Education</a></li>               
                <li><a href="/experience" className="exp">Experience</a></li>
                <li><a href="/contact" className="contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Nav;