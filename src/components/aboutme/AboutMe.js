import React from 'react';
import "../../styles/AboutMe.css"
import Project from  "../portfolio/Project";
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
                   
                </div>
            </div>
            <Project/>
        </div>
    )
}
export default AboutMe;