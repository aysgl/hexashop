import React from 'react'
import Jumbotron from '../../components/jumbotron'
import ProductGallery from '../../components/products/productgallery'
import ProductCart from '../../components/products/productcart'
import Pic1 from '../../assets/images/single-product-01.jpg'
import Pic2 from '../../assets/images/single-product-02.jpg'

function ProductDetail() {
    return (
        <>
            <Jumbotron title="Single Product Page" description="Awesome & Creative HTML CSS layout by TemplateMo" />
            <section className="section" id="product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <ProductGallery images={[Pic1, Pic2]} />
                        </div>
                        <div className="col-lg-4">
                            <ProductCart />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail