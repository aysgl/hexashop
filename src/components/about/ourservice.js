import React from 'react'
import Pic1 from '../../assets/images/service-01.jpg'
import Pic2 from '../../assets/images/service-02.jpg'
import Pic3 from '../../assets/images/service-03.jpg'

const OurService = () => {
    return (
        <section class="our-services">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>Our Services</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="service-item">
                            <h4>Synther Vaporware</h4>
                            <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                            <img src={Pic1} alt="" />
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="service-item">
                            <h4>Locavore Squidward</h4>
                            <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                            <img src={Pic2} alt="" />
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="service-item">
                            <h4>Health Gothfam</h4>
                            <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                            <img src={Pic3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurService