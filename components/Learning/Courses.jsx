import React from 'react'
// import OwlCarousel from 'react-owl-carousel'
import dynamic from 'next/dynamic'

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false })

const Courses = () => {
    return (
        <>
            <section className="section" id="men">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Courses for You</h2>
                                <span>
                                    Here's latest course for you to learn.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="men-item-carousel">
                                <OwlCarousel
                                    items={3}
                                    loop={true}
                                    dots={false}
                                    autoplay={true}
                                    autoplaySpeed={2000}
                                    autoplayTimeout={3000}
                                    nav={true}
                                    className="owl-men-item owl-carousel">

                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-eye" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-shopping-cart" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/mine/course1.jpg" alt="" />
                                        </div>
                                        <div className="down-content">
                                            <h4>Montessori Course</h4>
                                            <span>$120.00</span>
                                            <ul className="stars">
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-eye" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-shopping-cart" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/mine/course3.jpg" alt="" />
                                        </div>
                                        <div className="down-content">
                                            <h4>Brhavioural Training</h4>
                                            <span>$150.00</span>
                                            <ul className="stars">
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-eye" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-shopping-cart" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/mine/course2.jpg" alt="" />
                                        </div>
                                        <div className="down-content">
                                            <h4>Healthy Cooking.</h4>
                                            <span>$90.00</span>
                                            <ul className="stars">
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-eye" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-shopping-cart" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/mine/course3.jpg" alt="" />
                                        </div>
                                        <div className="down-content">
                                            <h4>Brhavioural Training</h4>
                                            <span>$150.00</span>
                                            <ul className="stars">
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Courses