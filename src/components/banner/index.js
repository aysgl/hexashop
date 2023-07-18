import React from 'react'
import Banner2 from "../../assets/images/baner-right-image-01.jpg"
import Banner3 from "../../assets/images/baner-right-image-02.jpg"
import Banner4 from "../../assets/images/baner-right-image-03.jpg"
import Banner5 from "../../assets/images/baner-right-image-04.jpg"
import Bigcard from './bigcard'
import SmallCard from './smallcard'

const Banner = () => {
    return (
        <div class="main-banner">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6">
                        <Bigcard title="We Are Hexashop" description="Awesome, clean & creative HTML5 Template" />
                    </div>
                    <div class="col-lg-6">
                        <div class="right-content">
                            <div class="row">
                                <div class="col-lg-6">
                                    <SmallCard title="Women" description="Best Clothes For Women" image={Banner2} />
                                </div>
                                <div class="col-lg-6" >
                                    <SmallCard title="Men" description="Best Clothes For Men" image={Banner3} />
                                </div>
                                <div class="col-lg-6">
                                    <SmallCard title="Kids" description="Best Clothes For Kids" image={Banner4} />
                                </div>
                                <div class="col-lg-6">
                                    <SmallCard title="Accessories" description="Best Clothes For Accessories" image={Banner5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner