import AboutUs from "../pages/aboutus";
import Home from "../pages/home";
import Products from "../pages/product";
import ProductDetail from "../pages/product/detail";

const PageRoutes = [
    { path: '/', component: Home },
    { path: '/aboutus', component: AboutUs },
    { path: '/products', component: Products },
    { path: '/product-detail', component: ProductDetail },
]

export default PageRoutes;