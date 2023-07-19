import React from 'react'
import Pic1 from '../../assets/images/service-01.jpg'
import Pic2 from '../../assets/images/service-02.jpg'
import Pic3 from '../../assets/images/service-03.jpg'
import Title from '../title'

const data = [{
    id: 1,
    title: "Synther Vaporware",
    description: "Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.",
    img: Pic1
}, {
    id: 2,
    title: "Locavore Squidward",
    description: "Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.",
    img: Pic2
}, {
    id: 3,
    title: "Health Gothfam",
    description: "Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.",
    img: Pic3
},]
const OurService = () => {
    return (
        <section className="our-services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Title title="Our Services" description="Details to details is what makes Hexashop different from the other themes." />
                    </div>
                    {data.map((item, index) =>
                        <div className="col-lg-4" key={index}>
                            <div className="service-item">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <img src={item.img} alt="" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default OurService