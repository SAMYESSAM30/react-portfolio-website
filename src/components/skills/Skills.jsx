import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import './skills.css'

const Skills = () => {
    return (
        <section className='skills sections' id='skills0'>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My tecnical level</span>
            <div className='skills__container container grid'>
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills
