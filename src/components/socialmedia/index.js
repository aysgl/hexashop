import React from 'react'
import Pic1 from '../../assets/images/instagram-01.jpg'
import Pic2 from '../../assets/images/instagram-02.jpg'
import Pic3 from '../../assets/images/instagram-03.jpg'
import Pic4 from '../../assets/images/instagram-04.jpg'
import Pic5 from '../../assets/images/instagram-05.jpg'
import Pic6 from '../../assets/images/instagram-06.jpg'

const SocialMedia = ({ title, description }) => {
    return (
        <section class="section" id="social">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>{title}</h2>
                            <span>{description}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row images">
                    <div class="col-2">
                        <div class="thumb">
                            <div class="icon">
                                <a href="http://instagram.com">
                                    <h6>Fashion</h6>
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={Pic1} alt="" />
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="thumb">
                            <div class="icon">
                                <a href="http://instagram.com">
                                    <h6>New</h6>
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={Pic2} alt="" />
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="thumb">
                            <div class="icon">
                                <a href="http://instagram.com">
                                    <h6>Brand</h6>
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={Pic3} alt="" />
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="thumb">
                            <div class="icon">
                                <a href="http://instagram.com">
                                    <h6>Makeup</h6>
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={Pic4} alt="" />
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="thumb">
                            <div class="icon">
                                <a href="http://instagram.com">
                                    <h6>Leather</h6>
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={Pic5} alt="" />
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="thumb">
                            <div class="icon">
                                <a href="http://instagram.com">
                                    <h6>Bag</h6>
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={Pic6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialMedia