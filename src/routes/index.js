import Category from "../components/category";
import AboutUs from "../pages/aboutus";
import CategoryDetail from "../pages/category/detail";
import ContactUs from "../pages/contactus";
import Home from "../pages/home";
import Products from "../pages/product";
import ProductDetail from "../pages/product/detail";

const PageRoutes = [
    { path: '/', component: Home },
    { path: '/aboutus', component: AboutUs },
    { path: '/products', component: Products },
    { path: '/products/:productId', component: ProductDetail },
    { path: '/contactus', component: ContactUs },
    { path: '/categories', component: Category },
    { path: '/categories/:categoryId', component: CategoryDetail },
]

export default PageRoutes;