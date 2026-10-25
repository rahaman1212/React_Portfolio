import { Link } from 'react-router';
import './MyProjects.css'
function MyProjects() {
    const ProjectCard = [
        {
        id: 1,
        ProjectName: "Drop Shipping Site",
        ProjectImage: [
            "./Images/Screenshot 2025-11-08 171606.png",
            "./Images/Screenshot 2025-11-08 172736.png",
            "./Images/Screenshot 2025-11-08 172920.png"
        ],
        Description: "A modern eCommerce platform for global product sourcing and automated order fulfillment.",
        },

        {
         id: 2,
        ProjectName: "Calculator App",
        ProjectImage: [
            "./Images/Screenshot 2025-11-08 173632.png"
        ],
        Desription: "A responsive and functional calculator built with clean UI and python logic.",
        },

        {
         id: 3,
        ProjectName: "Calendar App",
        ProjectImage: [
            "./Images/Screenshot 2025-11-08 174243.png"
        ],
        Description: "A dynamic calendar app with date tracking and event scheduling features.",
        },

        {
         id: 4,
        ProjectName: "Slurploops Bakery Website",
        ProjectImage: [
            "./Images/Screenshot 2025-11-10 113926.png",
            "./Images/Screenshot 2025-11-10 114043.png",
            "./Images/Screenshot 2025-11-10 114305.png ",
            "./Images/Screenshot 2025-11-10 114143.png"
        ],
        Description: "A visually engaging website for a bakery brand featuring responsive design and image sliders.",
        },

        {
         id: 5,
        ProjectName: "Password Generator",
        ProjectImage: [
            "./Images/Screenshot 2025-11-08 172111.png"
        ],
        Description: "A Python app that generates secure random passwords with adjustable complexity.",
        }
    ];
    

    return (
        <>

            <section id="projects">
                <h2>My Projects</h2>

                <div class="projects-container">
                    <article>
                        {ProjectCard.map((project) => (
                        <div class="project-card" key={project.id}>
                            <h3>{project.ProjectName}</h3>
                            <div class="project-image">
                                    {project.ProjectImage.map((image, index) => (
                                        <img key={index} src={image} alt="" />
                                ))}
                                    <div class="project-content">
                                        <p>{project.Description}</p>
                                        <Link to="projects" class="btn">View Project</Link>
                                    </div>
                            </div>
                        </div>
                 ))}
                    </article>
                </div>
                <div class="project-content">
                    <div class="cta button">
                        <Link to="projects" class="btn">See More Projects/Upload Project</Link>
                    </div>
                </div>
            </section>

        </>
    );
}

export default MyProjects;