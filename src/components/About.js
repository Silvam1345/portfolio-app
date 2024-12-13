import { Link } from 'react-router-dom';
export default function About() {
    return (
        <div className='about-container'>
            <h1>About Me</h1>
            <div className='background-content'>
                <h2>Background</h2>
                <p>I graduated with my Bachelors of Science in CS in 2023, 
                    and am currently working on my Masters in Software development
                    at BU. I worked as an assistant for my professors in CS courses,
                    as well as the Software Development Club during my undergraduate studies.
                </p>
                <p>
                    I also did a part time internship at a startup company working in front-end Software
                    development in React.js for a web app used for streamlining the book publishing industry.
                </p>
                <p>
                    Currently, I work in Customer Support for a Software company specializing 
                    in IT Enterprise Architecture.
                </p>
                
            </div>
            <div className='work-history-content'>
                <h2>Past Projects</h2>
                <p>I've worked in the past on projects written in Java, Python, Javascript, 
                    React.js, on both an individual and professional level.
                    </p>
                    <Link className='projects-link' to="/projects">Check out some of my past projects!</Link>
            </div>
            <div className='hobbies-content'>
                <h2>Hobbies</h2>
                <p>I love playing video games, mainly action and fighting games on my PC, 
                    but I also have various games on my Nintendo switch as well.</p>
                <div>
                    <p>I also like watching sports, especially basketball. 
                        I'm a pretty big Celtics fan! </p>
                    <img className="about-image" src='./images/IMG_0564.jpg' alt='me-at-celtics-game'></img>
                </div>
            </div>
        </div>
    )
}