import React from 'react'
import Pic1 from '../../assets/images/team-member-01.jpg'
import Pic2 from '../../assets/images/team-member-02.jpg'
import Pic3 from '../../assets/images/team-member-03.jpg'

const OurTeam = () => {
    return (
        <section class="our-team">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>Our Amazing Team</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-item">
                            <div class="thumb">
                                <div class="hover-effect">
                                    <div class="inner-content">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <img src={Pic1} alt="" />
                            </div>
                            <div class="down-content">
                                <h4>Ragnar Lodbrok</h4>
                                <span>Product Caretaker</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-item">
                            <div class="thumb">
                                <div class="hover-effect">
                                    <div class="inner-content">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <img src={Pic2} alt='' />
                            </div>
                            <div class="down-content">
                                <h4>Ragnar Lodbrok</h4>
                                <span>Product Caretaker</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-item">
                            <div class="thumb">
                                <div class="hover-effect">
                                    <div class="inner-content">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <img src={Pic3} alt='' />
                            </div>
                            <div class="down-content">
                                <h4>Ragnar Lodbrok</h4>
                                <span>Product Caretaker</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam