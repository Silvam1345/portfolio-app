import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className="header-container">
            <Link className="home-link" to="/">My Portfolio</Link>
            <div className='header-links'>
                <Link to='/about'>About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="https://example.com">Contact</Link>
            </div>
        </header>
    )
}