import React from 'react'

const Jumbotron = ({ title, description, className }) => {
    return (
        <div class={`page-heading ${className ? className : ""}`} id="top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content">
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