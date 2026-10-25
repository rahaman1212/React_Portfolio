//import './ContactMe.css'
function ContactMe({ CopyRight }) {
    return (
        <>
            <div>
                <section id="contact">
                    <h2>Contact Me</h2>
                    <form action="contact" method="post">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" />

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" />

                        <label for="message">message:</label>
                        <textarea id="message" name="message"></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </div>

            <div>
                <section id="socials">
                    <p>{CopyRight}</p>
                    <p class="socials">
                        <a href="https://www.Facebook.com/profile.php?id=100077489090287">FaceBook</a> | 
                        <a  href="https://x.com/Abdul_Peligah">X</a> | 
                        <a href="https://www.Linkedin.com/in/mahamud-abdul-rahaman-64003a377?utm_source=share&utm_campaign=share_via">LinkedIn</a>  | 
                       <a href="#">Whatsapp</a> |
                        <a href="peligahrahaman123@gmail.com">Email</a>
                    </p>
                </section>
            </div>
        </>
   
       
    );
}
export default ContactMe;