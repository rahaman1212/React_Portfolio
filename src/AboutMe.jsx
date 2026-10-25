import './AboutMe.css'
export function AboutMe ({ MyProfile }) {
    return (
        <>
            <section id="about">
                <h2>About Me</h2>
                <div class="about-container">
                    <div class="about-image">
                        <img src="/Images/WhatsApp Image 2025-11-08 at 08.33.25.jpeg"  />
                    </div>

                    <div class="about-text">
                        <h2>ABDUL RAHAMAN PELIGAH <span>(PELIGAROS)</span></h2> 
                        <p>{MyProfile}</p>
                        <div class="social-media">
                            <button class="btn"><a href="https://github.com/rahaman1212">Github</a></button>
                            <button class="btn"><a href="https://www.Facebook.com/profile.php?id=100077489090287">Facebook</a></button>
                            <button class="btn"><a href="https://x.com/Abdul_Peligah">X</a></button>
                            <button class="btn"><a href="https://www.Linkedin.com/in/mahamud-abdul-rahaman-64003a377?utm_source=share&utm_campaign=share_via">LinkedIn</a></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;