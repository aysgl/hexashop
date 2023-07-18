import React from 'react'

const SmallCard = ({ title, description, image }) => {
    return (
        <div class="right-first-image">
            <div class="thumb">
                <div class="inner-content">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                <div class="hover-content">
                    <div class="inner">
                        <h4>Women</h4>
                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                        <div class="main-border-button">
                            <a href="#">Discover More</a>
                        </div>
                    </div>
                </div>
                <img src={image} alt="image" />
            </div>
        </div>
    )
}

export default SmallCard