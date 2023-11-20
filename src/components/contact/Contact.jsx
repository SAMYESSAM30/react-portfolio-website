import React from 'react'

export const Contact = () => {
    return (
        <selction className='contact section' id='contact'>
            <h2 h2 className="section__title" > Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className='contact__container grid'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Talk to me</h3>

                    <div className='contact__info'>
                        <div className='contact__card'>
                            <i className=' bx bx-mail-send contact__card-icon'></i>
                            <h3 className='contact__card-title'>Email</h3>
                            <sapn className='contact__card-data'>user@gmail.com</sapn>

                            <a href='mailto:samyessam2000@gmail.com' className='contact__button'>Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                        </div>
                        <div className='contact__card'>
                            <i className='bx bxl-whatsapp contact__card-icon'></i>
                            <h3 className='contact__card-title'>Whatsapp</h3>
                            <sapn className='contact__card-data'>999-888-777</sapn>

                            <a href='https://api.whatsapp.com/send?phone=01141627898&text=Hello, more information!' className='contact__button'>Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                        </div>
                        <div className='contact__card'>
                            <i className='bx bxl-messenger contact__card-icon'></i>
                            <h3 className='contact__card-title'>Messenger</h3>
                            <sapn className='contact__card-data'>user.fb123</sapn>
                      
                            <a href='https://m.me/crypticalcoder' className='contact__button'>Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                        </div>
                    </div>
                </div>
                <div className='contact__content'>
                    <h3 className='contact__title'>Write me your project</h3>

                    <form action='' className=''></form>
                </div>
            </div>
        </selction>
    )
}
