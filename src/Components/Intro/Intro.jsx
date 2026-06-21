import React from 'react'
import './intro.css'
import bgImg from '../../assets/image2.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className="hello">Hello, </span>
            <span className='introText'>I'm <span className='introname'>AbuSufiyan</span> <br /> 
            Data Science Student </span>
           <p className='intropara'>
            I'm a Data Science student from India. I'm interested in Data Science and Machine Learning.I recently  Completed my MCA from Chhatrapati Shivaji Maharaj University . I'm passionate about data science and machine learning and I'm always looking for new challenges and opportunities to learn and grow. 
            </p>
            <Link> <button className='btn'> <img src={btnImg} alt="" />Hire Me</button></Link>
        </div>
        <img src={bgImg} alt="" className='bgImg'/>
    </section>
  )
}

export default Intro
