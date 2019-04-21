import React from 'react'

const Footer = () => {
    const d = new Date()

    return (
        <div className='ui ceneter aligned grid container'>
            <div className='row centered'>
                &copy; {d.getFullYear()} CTS. All rights reserved.
            </div>
        </div>
    )
}

export default Footer