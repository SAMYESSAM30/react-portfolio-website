import React from 'react'
import './qualifcation.css'
const Qualifcation = () => {
  return (
    <section className="qualifcation section" id="qualifcation">
      <h2 className="section__title">Qualifcation</h2>
      <span className="section__subtitle">
        My Personel journey
      </span>

      <div className="qualifcation__container container grid">
        <div className="qualifcation__tabs">
          <div className="qualifcation__button qualifcation__active button--flex">
            <i className='uil uil-graduation-cap qualifcation__icon'>Education</i>

            <div className="qualifcation__button qualifcation__active button--flex">
              <i className='uil uil-briefcase-alt qualifcation__icon'>Education</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualifcation;
// const data = [
//   {
//     icon: <i className='uil uil-graduation-cap qualifcation__icon'>Education</i>,


//   },
//   {},
//   {},
//   {},
//   {},
//   {},
//   {},
//   {},
// ]