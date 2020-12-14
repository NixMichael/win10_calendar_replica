import React, { useEffect } from 'react'

const Calendar = () => {
    useEffect(() => {
        const container = document.querySelector('.container')

        console.log(container.offsetWidth)
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - container.offsetLeft
            const y = e.clientY - container.offsetTop
            if (e.clientX > container.offsetLeft && e.clientX < (container.offsetLeft + container.offsetWidth) && e.clientY > container.offsetTop && e.clientY < (container.offsetTop + container.offsetHeight)) {
                container.style.background = `radial-gradient(at ${x}px ${y}px, rgba(100,155,250,0.8) 5%, rgba(100,155,250,0.65) 10%, rgba(100,155,250,0.35) 15%, rgba(78, 78, 78, 0.8) 30%)`
            } else {
                container.style.background = ''
            }
        })
    }, [])

    const n = 30

    return (
        <div className='surround'>
        <div className='container'>
            {[...Array(n)].map((e,i) => <div className='date-box' key={i}>{i+1}</div>)}
        </div>
        </div>
    )
}

export default Calendar