import React, { useEffect, useState } from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const BackToTop = () => {

    const [backtoTopButton, setBackToTopButton] = useState(false)

    //  tooltip
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            redirect to home
        </Tooltip>
    );

    //  scroll
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100 && window.scrollX < 100) setBackToTopButton(true)
            else setBackToTopButton(false)
        })
    }, [])

    //  scroll
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {backtoTopButton && (
                <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <button style={{ position: "fixed", color: "gold", bottom: "60px", right: "60px", height: "60px", width: "50px", fontSize: "60px" }} onClick={scrollUp}>
                        <FaCircleArrowUp />
                    </button>
                </OverlayTrigger>
            )}
        </>
    )
}

export default BackToTop
