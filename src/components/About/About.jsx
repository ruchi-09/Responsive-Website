import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About=({setPlayState})=> {
  return (
    <div className='about'>

        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>
              {setPlayState(true)}
            }/>
        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>CETLI runs a variety of TA Training programs for new TAs, equipping them to work with students in the classroom or lab, to grade, and to be part of an instructional team. Schools or departments determine which training their TAs should attend. Experienced TAs can apply to work as TA Trainers.</p>
            <p>Each academic year, CETLI offers over 100 teaching workshops, at CETLI and in departments across campus, which are open to all graduate students. These events are conversational and typically allow participants to learn about teaching from experienced faculty.</p>
            <p>Graduate student instructors may request a teaching observation or consultation with either a CETLI Graduate Fellow or CETLI staff. Staff from a variety of disciplines are available to discuss any aspect of your teaching.</p>
        </div>
      
    </div>
  )
}

export default About
