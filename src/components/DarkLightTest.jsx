import React, { useState } from 'react'
import Toggle from './Toggle'

export default function DarkLightTest() {
    const [isDark, setIsDark] = useState(false)

    return (
        <>
            <div className='dark' data-theme={isDark ? "light" : "dark"}>
                <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
                Testing
            </div>
        </>
    )
}
