import React from 'react'
import Banner from "../../assets/images/left-banner-image.jpg"

const Bigcard = () => {
    return (
        <div class="left-content">
            <div class="thumb">
                <div class="inner-content">
                    <h4>We Are Hexashop</h4>
                    <span>Awesome, clean &amp; creative HTML5 Template</span>
                    <div class="main-border-button">
                        <a href="#">Purchase Now!</a>
                    </div>
                </div>
                <img src={Banner} alt="" />
            </div>
        </div>
    )
}

export default Bigcard