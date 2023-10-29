import React from 'react'

const Frontend = () => {
    return (
        <div className='skills__content'>
            <h3 className='skills__title'>Frontend developer</h3>
            <div className='skills__box'>
                <div className='skills__group'>
                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>
                        {data.map((item) =>
                            <div>
                                <h3 className='skills__name'>{item.name}</h3>
                                <span className='Skills__level'>{item.level}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Frontend
const data = [
    {
        name: 'HTML',
        level: 'Basic',

    }
]