import React from 'react'
import ProductCard from './productcard'
import Pic1 from '../../assets/images/men-01.jpg'
import Pic2 from '../../assets/images/men-02.jpg'
import Pic3 from '../../assets/images/men-03.jpg'

const ProductList = () => {
    return (
        <section class="section" id="products">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>Our Latest Products</h2>
                            <span>Check out all of our products.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <ProductCard title="Classic Spring" price="120.00" image={Pic1} rating="4" />
                    </div>
                    <div class="col-lg-4">
                        <ProductCard title="Air Force 1 X" price="90.00" image={Pic2} rating="2" />
                    </div>
                    <div class="col-lg-4">
                        <ProductCard title="Love Nana ‘20" price="150.00" image={Pic3} rating="3" />
                    </div>

                    <div class="col-lg-12">
                        <div class="pagination">
                            <ul>
                                <li>
                                    <a href="#">1</a>
                                </li>
                                <li class="active">
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#">4</a>
                                </li>
                                <li>
                                    <a href="#"> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductList