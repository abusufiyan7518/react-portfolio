import React from 'react'
import './Skills.css'
import uI from '../../assets/ui-design.png'
import web from '../../assets/website-design.png'
import app from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTital">What I Do</span>
        <span className="skillDesc">
        I design clean, user-friendly apps and websites focused on good visuals and smooth experiences. My goal is to make interfaces that are simple, responsive, and easy to navigate while keeping the user’s needs in mind.
   </span>
   <div className="skillBar">
   <img src={uI} alt="" className="skillbarImg" />
   <div className="skillbarText">
    <h2>UI/UX</h2>
    <p>UI/UX stands for User Interface and User Experience. UI focuses on how a digital product looks and feels, including layout, colors, typography, buttons, and overall visual design. UX, on the other hand, is about how users interact with the product and how smooth, simple, and satisfying that experience is. A good UI/UX design makes websites and apps both attractive and easy to use. It helps users achieve their goals without confusion or frustration. In short, UI catches the eye, and UX keeps the user engaged. Both are essential for creating modern, user-friendly digital experiences.</p>
   </div>
   </div>

   <div className="skillBar">
   <img src={web} alt="" className="skillbarImg" />
   <div className="skillbarText">
    <h2>Web Design</h2>
<p>Web design is the process of creating the visual layout and structure of a website. It involves planning and arranging content, images, colors, and typography to make a site both attractive and easy to navigate. A good web design focuses on user experience, ensuring visitors can find information quickly and interact with the site smoothly. It also adapts to different screen sizes through responsive design. Beyond looks, web design blends creativity with functionality, helping businesses and individuals build a strong online presence that reflects their brand and engages their audience. </p>  
 </div>
   </div>
   <div className="skillBar">
   <img src={app} alt="" className="skillbarImg" />
   <div className="skillbarText">
    <h2>App Design</h2>
    <p> App design is the process of creating the look and feel of a mobile or desktop application. It focuses on how the app looks (UI) and how users interact with it (UX). A well-designed app is visually appealing, easy to use, and intuitive, guiding users naturally from one feature to another. App design also involves organizing content, choosing the right colors and icons, and ensuring the app works smoothly on different devices and screen sizes. The goal is to deliver a seamless experience that keeps users engaged and satisfied while meeting the app’s purpose effectively.</p>
   </div>
   </div>

    </section>
  )
}

export default Skills
