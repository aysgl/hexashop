import React from 'react'

const Rating = ({ number }) => {
    return (
        <div>
            {number >= 4.5 && number <= 5 &&
                <div className='stars'>
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-dark pe-2" />
                </div>
            }
            {number >= 4 && number <= 4.5 &&
                <div className='stars'>
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-secondary pe-2" />
                </div>
            }
            {number >= 3 && number <= 3.5 &&
                <div>
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary pe-2" />
                </div>
            }
            {number >= 2 && number <= 2.5 &&
                <div>
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary pe-2" />
                </div>
            }
            {number >= 1 && number <= 1.5 &&
                <div>
                    <i className="fa fa-star text-dark" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary pe-2" />
                </div>
            }
        </div>
    )
}

export default Rating