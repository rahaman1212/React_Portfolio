import { Link } from "react-router";
import "./Projects.css"
function Projects() {
    const ProjectView = [
        {
            id: "1",
            ProjectName: "Drop Shipping Site",
            Description: "The Drop shipping website is an open source kind of an e-commerce website for buying both digital and physical products online. The drop shipping site called Tuuli importation is a website where user visit to shop. When your product is a physical product it will be delivered to you on a cost, via on air or by sea the means of transport will determine the cost and the arrival for pick up time. almost everything is sold on this website",
            ProjectImages: [
                "./Images/Screenshot 2025-11-08 171606.png",
                "./Images/Screenshot 2025-11-08 172736.png",
                "./Images/Screenshot 2025-11-08 172920.png"
            ],
            Summary: "A modern eCommerce platform for global product sourcing and automated order fulfillment."
        },
             {
            id: "2",
            ProjectName: "Calculator App",
            Description: "Calculator app with python is an open source app for making some basic calculations. Using any of the operators, the user only have the opportunity to enter only three input. The first one is the first digit the second one is the operational sign and the third one is the number, then when when the use hits the enter key the answer pops out. Remember this is a basic calculator it can not be use to solve complex mathematics and science questions involving calculations",
            ProjectImages: [
                "./Images/Screenshot 2025-11-08 173632.png",
            ],
            Summary: "A responsive and functional calculator built with clean UI and python logic."
        },
             {
            id: "3",
            ProjectName: "Calendar App",
            Description: "This is a basic calendar app with python, is an open source app its purpose is to just show the the month and the days with the year when the user inputs a particular month in numbers and inputs the year then click on show calendar button, it will use the inputs to display the calendar from the month you entered to the last month in that year it is very easy to use",
            ProjectImages: [
                "./Images/Screenshot 2025-11-08 174243.png",
            ],
            Summary: "A dynamic calendar app with date tracking"
        },
             {
            id: "4",
            ProjectName: "Slurploops Bakery Website",
            Description: "The Slurploops Bakery website is an open source for buying pastries products online. The website is called Slurploops is a website where user visit to buy pastries it will be delivered to you on a cost.We sell only pastries products on this website",
            ProjectImages: [
                "./Images/Screenshot 2025-11-10 113926.png",
                "./Images/Screenshot 2025-11-10 114043.png",
                "./Images/Screenshot 2025-11-10 114305.png",
                "./Images/Screenshot 2025-11-10 114143.png"
            ],
            Summary: "A visually engaging website for a bakery brand featuring responsive design and image sliders."
        },
             {
            id: "5",
            ProjectName: "Password Generator",
            Description: "Password Generator is open source app for generating secure passwords. The passwords are generated randomly, the user enters the number of characters that is the length of the password. when the user hits the enter key it generates the password, the characters in the password contain a mixture of numbers, alphabet and symbols",
            ProjectImages: [
                "./Images/Screenshot 2025-11-08 172111.png",
            ],
            Summary: "A Python app that generates secure random passwords with adjustable complexity."
        },
    ]
    return (
        <>
            <div>
                <h1>Welcome to my Portfolio</h1>
                <nav>
                    <ul>
                        <Link to="/">About Me</Link>
                        <Link to="/">skills</Link>
                        <Link to="/">Hobbies</Link>
                        <Link to="/">Contact Me</Link>
                    </ul>
                </nav>
            </div>

            <section id="projects">
                    <h1>Display of my projects</h1>

                    <div class="projects-container">
                        <article>
                            {ProjectView.map((projects) => (
                            <div class="project-card" key={projects.id}>
                                <div class="project-content">
                                        <h3>{projects.ProjectName}</h3>
                                        <h4>{projects.Description}</h4>
                                    <div class="project-image">
                                        {projects.ProjectImages.map((image, index) => (
                                            <img key={index} src={image} alt="" /> 
                                        ))}
                                            <p>{projects.Summary}</p>
                                    </div>
                                </div>
                            </div>
                            ))}

                        </article>
                    </div>
                <div class="project-content">
                    <div class="cta button">
                        <Link to="upload" class="btn">Click To Upload Project</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Projects;