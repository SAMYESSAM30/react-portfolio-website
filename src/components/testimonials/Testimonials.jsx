import React from 'react'
import Img1 from '../../assets/testimonial1.png'
import Img2 from '../../assets/testimonial2.png'
import Img3 from '../../assets/testimonial3.png'
import './testimonials.css'
const Testimonials = () => {
    return (
        <section className='testimonial container section'><h2 h2 className="section__title" > My Clients say</h2>
            <span className="section__subtitle">Testimonial</span>
            <div className='testimonial__container'>
                {data.map((item, index) => {
                    return (
                        <div className='testimonial__card' kay={index}>
                            <img src={item.image} alt='' className='testimonial__img'></img>
                            <h3 className='testimonial__name'>{item.title}</h3>
                            <p className='testimonial__description'>{item.descriptio}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Testimonials
const data = [
    {
        id: 1,
        image: Img1,
        title: 'Samy Essam',
        descriptio: "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
    {
        id: 2,
        image: Img2,
        title: 'Walid Mostafa',
        descriptio: "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
    {
        id: 3,
        image: Img3,
        title: 'Honye Ahmed',
        descriptio: "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
]