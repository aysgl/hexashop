import React from 'react'
import Pic1 from "../../assets/images/men-01.jpg"
import Pic2 from "../../assets/images/men-02.jpg"
import Pic3 from "../../assets/images/men-03.jpg"
import Pic4 from "../../assets/images/men-01.jpg"
import OwlCarousel from 'react-owl-carousel';

const Gallery = ({ title, description }) => {
    const options = {
        loop: true,
        center: true,
        dots: true,
        items: 5,
        margin: 30,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };

    return (
        <section class="section" id="men">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="section-heading">
                            <h2>{title}</h2>
                            <span>{description}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="men-item-carousel">
                            <OwlCarousel
                                className="owl-men-item owl-carousel"  {...options}>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                            <ul>
                                                <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <img src={Pic1} alt="" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Classic Spring</h4>
                                        <span>$120.00</span>
                                        <ul class="stars">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                            <ul>
                                                <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <img src={Pic2} alt="" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Air Force 1 X</h4>
                                        <span>$90.00</span>
                                        <ul class="stars">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                            <ul>
                                                <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <img src={Pic3} alt="" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Love Nana ‘20</h4>
                                        <span>$150.00</span>
                                        <ul class="stars">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                            <ul>
                                                <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <img src={Pic4} alt="" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Classic Spring</h4>
                                        <span>$120.00</span>
                                        <ul class="stars">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery