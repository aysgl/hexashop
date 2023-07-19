import React from 'react'
import Rating from '../rating'
import { Link } from 'react-router-dom'

const ProductCard = ({ title, price, image, rating }) => {

    return (
        <div className="item">
            <div className="thumb">
                <div className="hover-content">
                    <ul>
                        <li><Link to={`/products/` + 1}><i className="fa fa-eye"></i></Link></li>
                        <li><Link to={`/products/` + 1}><i className="fa fa-star"></i></Link></li>
                        <li><Link to={`/products/` + 1}><i className="fa fa-shopping-cart"></i></Link></li>
                    </ul>
                </div>
                <img src={image} alt="" />
            </div>
            <div className="down-content">
                <div className='d-flex justify-content-between'>
                    <h4>{title}</h4><Rating number={rating} />
                </div>
                <span>${price}</span>
            </div>
        </div>
    )
}

export default ProductCard