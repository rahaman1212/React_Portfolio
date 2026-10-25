import './MySkills.css'
function MySkills() {
    const SkillsTable = [
        {
            id: 1,
            Skill: "HTML & CSS",
            Proficiency: "Intermediate",
        },

        {
            id: 2,
            Skill: "Python",
            Proficiency: "Advanced",
        },

        {
            id: 3,
            Skill: "Javascript",
            Proficiency: "Beginner",
        },

        {
            id: 4,
            Skill: "React-js",
            Proficiency: "Absolute Beginner",
        }
    ];
    return (
        <div>
            <section id="skills">
                <h2>My Skills</h2>
                <table border="1">
                    <tbody>
                        <thead>
                            <tr>
                                <th>Skill</th>
                                <th>Proficiency</th>
                            </tr>
                        </thead>
                        {SkillsTable.map((project) => (
                            <tr key={project.id}>
                                <td>{project.Skill}</td>
                                <td>{project.Proficiency}</td>
                            </tr>
                        ))}   
                    </tbody>  
                </table>
            </section>
        </div>
    );
}
    
export default MySkills;