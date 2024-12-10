import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-copyright">© 2024 Mateus Silva. All rights reserved.</div>
            <div className="footer-links">
                <Link to="https://example.com">Github</Link>
                <Link to="https://example.com">Linkedin</Link>
                <Link to="https://example.com">Youtube</Link>
            </div>
        </footer>
    )
}