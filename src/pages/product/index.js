import React from 'react'
import Jumbotron from '../../components/jumbotron'
import ProductList from '../../components/products/productlist'
import { useParams } from 'react-router-dom'

function Products() {
    const { productId } = useParams()

    return (
        <>
            <Jumbotron title="Check Our Products" description="Awesome & Creative HTML CSS layout by TemplateMo" />

            <ProductList title="Our Latest Products" description="Check out all of our products." link={`/products/` + productId} />
        </>
    )
}

export default Products