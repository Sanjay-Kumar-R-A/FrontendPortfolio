import React from 'react'
import { Image, ProgressBar } from 'react-bootstrap'
import { useUserContext } from './contextAPI';

export default function Cart({ src, now, label }) {

    const { scrolled } = useUserContext();

    return (
        <>
            <span className={scrolled ? "animateSkill" : "show-animateSkill"}>
                <div className='p-2 border-solid border-2 border-pink-600 rounded-br-lg'>
                    <div className='w-20 h-20 m-1 skillCard mb-2' >
                        <Image src={src} thumbnail className="object-contain border-0 w-100 h-100" />
                    </div >
                    <ProgressBar now={now} label={label} animated />
                </div >
            </span>
        </>
    )
}
