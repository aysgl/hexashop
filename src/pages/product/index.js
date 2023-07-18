import React from 'react'
import Jumbotron from '../../components/jumbotron'
import ProductList from '../../components/products/productlist'

function Products() {
    return (
        <>
            <Jumbotron title="Check Our Products" description="Awesome & Creative HTML CSS layout by TemplateMo" />

            <ProductList />
        </>
    )
}

export default Products