import React, { useEffect } from 'react'

const Calendar = () => {
    useEffect(() => {
        const container = document.querySelector('.container')

        console.log(container.offsetWidth)
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - container.offsetLeft
            const y = e.clientY - container.offsetTop
            if (e.clientX > container.offsetLeft && e.clientX < (container.offsetLeft + container.offsetWidth) && e.clientY > container.offsetTop && e.clientY < (container.offsetTop + container.offsetHeight)) {
                container.style.background = `radial-gradient(at ${x}px ${y}px, rgba(100,155,250,0.8) 5%, rgba(100,155,250,0.65) 10%, rgba(100,155,250,0.35) 15%, rgba(78, 78, 78, 0.8) 30%, rgba(78,78,78,0.15) 70%)`
            } else {
                container.style.background = 'rgba(0,0,0,0);'
            }
        })
    }, [])

    const dateAction = (date) => {

        let postfix = ''

        if (date === 1 || date === 21 || date === 31) {
            postfix = 'st'
        } else if (date === 2 || date === 22) {
            postfix = 'nd'
        } else if (date === 3 || date === 23) {
            postfix = 'rd'
        } else {
            postfix = 'th'
        }
        const newEvent = prompt(`New event for ${date}${postfix} of the month:`)
    }

    const n = 28

    return (
        <div className='surround'>
            <h3>Calendar</h3>
            <div className='container'>
                {[...Array(n)].map((e,i) => <div className='date-box' onClick={() => dateAction(i + 1)} key={i}>{i+1}</div>)}
            </div>
        </div>
    )
}

export default Calendar