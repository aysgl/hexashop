import React from 'react'
import Rating from '../rating'

const ProductCard = ({ title, price, image, rating }) => {
    return (
        <div class="item">
            <div class="thumb">
                <div class="hover-content">
                    <ul>
                        <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                        <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                        <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <img src={image} alt="" />
            </div>
            <div class="down-content">
                <div className='d-flex justify-content-between'><h4>{title}  </h4><Rating number={rating} /></div>
                <span>${price}</span>
            </div>
        </div>
    )
}

export default ProductCard