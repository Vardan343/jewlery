import './Contact.css'
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
function Contact() {
    return (
        <div>
            <div className='maps'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12196.639058063314!2d44.5619161!3d40.16099644999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shy!2sam!4v1717433352698!5m2!1shy!2sam" width="800" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="Broadway">
                <h2 className="phone-number">+(374)95-42-50-20</h2>
                <p>Arinj village C district, 9th street, №2</p>
                <div className="social-container">
                    <a href="https://www.youtube.com/"  target="_blank" className="facebook social">
                        <FaFacebook />
                    </a>
                    <a href="https://www.youtube.com/"  target="_blank" className="youtube social">
                        <FaYoutube />
                    </a>
                    <a href="https://www.instagram.com/explore/locations/269060303/sevan/"  target="_blank"  className="instagram social">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;