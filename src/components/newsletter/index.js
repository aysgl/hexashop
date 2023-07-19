import React from 'react'
import Title from '../title'
import Button from '../button'
import Input from '../input/input'

const Newsletter = () => {
    return (
        <div className="subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Title title="By Subscribing To Our Newsletter You Can Get 30% Off" description="Details to details is what makes Hexashop different from the other themes." />
                        <form id="subscribe" action="" method="get">
                            <div className="row">
                                <div className="col-lg-5">
                                    <Input name="name" id="name" placeholder="Your name" required={true} />
                                </div>
                                <div className="col-lg-5">
                                    <Input name="email" id="email" placeholder="Your Email Address" pattern="[^ @]*@[^ @]*" required={true} />
                                </div>
                                <div className="col-lg-2">
                                    <Button type="submit" id="form-submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li>Store Location:<br /><span>Sunny Isles Beach, FL 33160, United States</span></li>
                                    <li>Phone:<br /><span>010-020-0340</span></li>
                                    <li>Office Location:<br /><span>North Miami Beach</span></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Work Hours:<br /><span>07:30 AM - 9:30 PM Daily</span></li>
                                    <li>Email:<br /><span>info@company.com</span></li>
                                    <li>Social Media:<br /><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter