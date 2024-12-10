import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className="header-container">My Portfolio
            <Link to="https://example.com">Home</Link>
            <Link to="https://example.com">About Me</Link>
            <Link to="https://example.com">Projects</Link>
            <Link to="https://example.com">Contact</Link>
        </header>
    )
}