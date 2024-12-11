import { Link } from 'react-router-dom';
export default function Sidebar() {
    return (
        <aside className="contact-info">
                <h3>Contact Info</h3>
                <div className="personal-contacts">
                    <p>Email: silvam@work.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div className="contact-info-links">
                    <a href="https://example.com">Github</a>
                    <a href="https://example.com">Linkedin</a>
                    <a href="https://example.com">Youtube</a>
                    <a href="https://example.com">Facebook</a>
                </div>
        </aside>
    )
}