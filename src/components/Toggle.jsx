import React from 'react'

export default function Toggle({ handleChange, isChecked }) {
    return (
        <>
            <div className=' bg-white text-black'>
                <input type="checkbox" id='check' className='toggle' onChange={handleChange} checked={isChecked} />
                <label htmlFor="check">Dark Mode</label>
            </div>
        </>
    )
}
