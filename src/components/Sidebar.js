import { Link } from 'react-router-dom';
export default function Sidebar() {
    return (
        <aside className="contact-info">
                <h3>My Contacts</h3>
                <div className="personal-contacts">
                    <p>Email: silvam1345@gmail.com</p>
                    <p>Phone: 561-843-8548</p>
                </div>
                <h3>My Socials</h3>
                <div className="contact-info-links">
                    <a href="https://github.com/Silvam1345">Github</a>
                    <a href="https://www.linkedin.com/in/mateus-silva-183a461bb/">Linkedin</a>
                    <Link to="/contact">Contact Me!</Link>
                </div>
        </aside>
    )
}