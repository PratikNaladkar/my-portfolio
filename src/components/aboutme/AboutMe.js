import React from 'react';
import "../../styles/AboutMe.css"
function AboutMe() {
    return(
        <div className='hero is-medium frontpage-about'>
            <div className='container'>
                <div class="hero-body me-auto ms-auto mt-5">
                    <div className="sxs" >
                    <div className="sxs-title">About Me</div>
                    <div className="sxs-content">
                        <p>Hi! I am Pratik. </p> 
                    </div>
                    </div>
                    <div className="sxs">
                    <div className="sxs-title">Location</div>
                    <div className="sxs-content">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317990.97234976024!2d-0.4185201493561758!3d51.48927996078473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00ba11ae26f%3A0x2ff173e384b8e98b!2sGreater%20London!5e0!3m2!1sen!2suk!4v1694948818924!5m2!1sen!2suk" width="100%" height="300px" style={{"border-radius":"10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>somewhere in this city :)</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;