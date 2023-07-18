import React from 'react'

const Jumbotron = ({ title, description, className }) => {
    return (
        <div class={`page-heading ${className ? className : ""}`} id="top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner-content">
                            <h2>{title}</h2>
                            <span>{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron