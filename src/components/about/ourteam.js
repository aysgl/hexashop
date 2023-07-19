import React from 'react'
import Pic1 from '../../assets/images/team-member-01.jpg'
import Pic2 from '../../assets/images/team-member-02.jpg'
import Pic3 from '../../assets/images/team-member-03.jpg'
import Title from '../title'
import SocialMedia from '../socialmedia'

const data = [{
    id: 1,
    name: "Ragnar Lodbrok",
    title: "Product Caretaker",
    img: Pic1
},
{
    id: 2,
    name: "Ragnar Lodbrok",
    title: "Product Caretaker",
    img: Pic2
},
{
    id: 3,
    name: "Ragnar Lodbrok",
    title: "Product Caretaker",
    img: Pic3
}]

const OurTeam = () => {
    return (
        <section className="our-team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Title title="Our Amazing Team" description="Details to details is what makes Hexashop different from the other themes." />
                    </div>
                    {data.map((item, index) =>
                        <div className="col-lg-4" key={index}>
                            <div className="team-item">
                                <div className="thumb">
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <SocialMedia />
                                        </div>
                                    </div>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="down-content">
                                    <h4>{item.name}</h4>
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default OurTeam