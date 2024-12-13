import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-copyright">© 2024 Mateus Silva. All rights reserved.</div>
            <div className="footer-links">
                <Link to="https://github.com/Silvam1345/portfolio-app">Project Github</Link>
                <Link to="https://www.linkedin.com/in/mateus-silva-183a461bb/">Linkedin</Link>
            </div>
        </footer>
    )
}