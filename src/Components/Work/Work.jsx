import React from 'react'
import './Work.css'
import image1 from '../../assets/portfolio-1.png'
import image2 from '../../assets/portfolio-2.png'
import image3 from '../../assets/portfolio-3.png'
import image4 from '../../assets/portfolio-4.png'
import image5 from '../../assets/portfolio-5.png'
import image6 from '../../assets/portfolio-6.png'

const Work = () => {
  return (
    <div className="work">
        <h2 className="workTitle">My Portfolio</h2>
        <span className="workDesc">
            Welcome to my portfolio. Here, you’ll find my work in web and app design, where I focus on creating clean layouts, smooth user experiences, and responsive designs that bring ideas to life.
        </span>
        <div className="workImgs">
            <img src={image1} alt="" className="workImg" />
            <img src={image2} alt="" className="workImg" />
            <img src={image3} alt="" className="workImg" />
            <img src={image4} alt="" className="workImg" />
            <img src={image5} alt="" className="workImg" />
            <img src={image6} alt="" className="workImg" />
        </div>
        <button className="workBtn">See More</button>
    </div>
  )
}

export default Work
