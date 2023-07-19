import React from 'react'
import ProductCard from './productcard'
import Pic1 from '../../assets/images/men-01.jpg'
import Pic2 from '../../assets/images/men-02.jpg'
import Pic3 from '../../assets/images/men-03.jpg'
import Title from '../title'
import Pagination from '../pagination'

const data = [{
    id: 1,
    title: "Classic Spring",
    price: "120.00",
    img: Pic1,
    rating: 5
}, {
    id: 2,
    title: "Air Force 1 X",
    price: "90.00",
    img: Pic2,
    rating: 2
}, {
    id: 3,
    title: "Love Nana ‘20",
    price: "150.00",
    img: Pic1,
    rating: 4
}]

const ProductList = ({ title, description, link }) => {
    return (
        <section className="section" id="products">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Title title={title} description={description} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {data.map((item, index) =>
                        <div className="col-lg-4" key={index}>
                            <ProductCard link={link} title={item.title} price={item.price} image={item.img} rating={item.rating} />
                        </div>
                    )}
                    <Pagination />
                </div>
            </div>
        </section>
    )
}

export default ProductList