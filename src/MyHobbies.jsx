import './MyHobbies.css'
function MyHobbies() {
    const Hobbies = [
        "Reading",
        "Coding",
       "Watching Movies",
        "Playing Game"
    ];
    return (
        <div>   
            <section id="hobbies">
                <h2>My Hobbies</h2>
                <ol>
                    {Hobbies.map((hobbies, index) => (
                        <li key={index}>{hobbies}</li>
                    
                    ))}
                </ol>

            </section>
        </div>
    );
}
export default MyHobbies;