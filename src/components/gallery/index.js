import React from 'react'
import Pic1 from "../../assets/images/men-01.jpg"
import Pic2 from "../../assets/images/men-02.jpg"
import Pic3 from "../../assets/images/men-03.jpg"
import Pic4 from "../../assets/images/men-01.jpg"
import OwlCarousel from 'react-owl-carousel';
import Title from '../title'
import Rating from '../rating'
import Action from '../action'

const data = [{
    id: 1,
    title: "Classic Spring",
    price: "120.00",
    img: Pic1
}, {
    id: 2,
    title: "Air Force 1 X",
    price: "90.00",
    img: Pic2
}, {
    id: 3,
    title: "Love Nana ‘20",
    price: "150.00",
    img: Pic3
}, {
    id: 4,
    title: "Classic Spring",
    price: "120.00",
    img: Pic4
}]

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
        <section className="section" id="men">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Title title={title} description={description} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="men-item-carousel">
                            <OwlCarousel
                                className="owl-men-item owl-carousel"  {...options}>
                                {data.map((item, index) =>
                                    <div className="item" key={index}>
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <Action />
                                            </div>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="down-content">
                                            <div className='d-flex justify-content-between'>
                                                <h4>{item.title}</h4><Rating number={1} />
                                            </div>
                                            <span>${item.price}</span>

                                        </div>
                                    </div>
                                )}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery