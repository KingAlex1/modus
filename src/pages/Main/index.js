import React, {Component} from 'react'
import Header from '../../components/Header'
import Carousell from '../../components/Common/Carousell'
import './index.scss'
import {Link} from 'react-router-dom'
import SimpleSlider from "../../components/Common/SimpleSlider";
import Footer from "../../components/Footer";


export class Main extends Component {

    render() {
        return (
            <div className='main'>
                <div className='main-content'>
                    <Header/>
                    <Carousell/>
                    <div className='container'>
                        <div className='our-service'>
                            <div
                                className='our-service__info'>
                                <div
                                    className='our-service__title'>Some
                                    of our servise
                                </div>
                                <div
                                    className='our-service__desc'>Lorem
                                    ipsum dolor sit amet,
                                    consectetur adipisicing
                                    elit. Ab
                                    commodi consequuntur
                                    facilis
                                    fugit mollitia natus
                                    officiis
                                    ratione sit suscipit.
                                </div>

                            </div>
                            <div
                                className='our-service__button'>
                                <Link
                                    className='our-service__link'
                                    to="/"> View more</Link>
                            </div>
                        </div>
                        <ul className='our-service__list'>
                            <li className='our-service__item'>

                                <div
                                    className='our-service__item_img our-service__item_img1'/>
                                <div
                                    className='our-service__item_info'>
                                    <div
                                        className='our-service__item_title'>Quality
                                    </div>
                                    <div
                                        className='our-service__item_desc'>Lorem
                                        ipsum dolor sit
                                        amet, consectetur
                                        adipisicing elit.
                                        Lorem
                                        ipsum dolor sit
                                        amet, consectetur
                                        adipisicing elit.
                                    </div>
                                </div>
                                <Link to='/'
                                      className='our-service__item_link'>read
                                    more
                                </Link>
                            </li>
                            <li className='our-service__item'>

                                <div
                                    className='our-service__item_img our-service__item_img2'/>
                                <div
                                    className='our-service__item_info'>
                                    <div
                                        className='our-service__item_title'>Quality
                                    </div>
                                    <div
                                        className='our-service__item_desc'>Lorem
                                        ipsum dolor sit
                                        amet, consectetur
                                        adipisicing elit.
                                        Lorem
                                        ipsum dolor sit
                                        amet, consectetur
                                        adipisicing elit.
                                    </div>
                                </div>
                                <Link to='/'
                                      className='our-service__item_link'>read
                                    more
                                </Link>
                            </li>
                            <li className='our-service__item'>

                                <div
                                    className='our-service__item_img our-service__item_img3'/>
                                <div
                                    className='our-service__item_info'>
                                    <div
                                        className='our-service__item_title'>Quality
                                    </div>
                                    <div
                                        className='our-service__item_desc'>Lorem
                                        ipsum dolor sit
                                        amet, consectetur
                                        adipisicing elit.
                                        Lorem
                                        ipsum dolor sit
                                        amet, consectetur
                                        adipisicing elit.
                                    </div>
                                </div>
                                <Link to='/'
                                      className='our-service__item_link'>read
                                    more
                                </Link>
                            </li>
                            <li className='our-service__item'>

                                <div
                                    className='our-service__item_img our-service__item_img4'/>
                                <div
                                    className='our-service__item_info'>
                                    <div
                                        className='our-service__item_title'>Quality
                                    </div>
                                    <div
                                        className='our-service__item_desc'>Lorem
                                        ipsum dolor sit
                                        amet, consectetur
                                        adipisicing elit.
                                        Lorem
                                        ipsum dolor sit
                                        amet, consectetur
                                        adipisicing elit.
                                    </div>
                                </div>
                                <Link to='/'
                                      className='our-service__item_link'>read
                                    more
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className='modus-section'>
                    <div className='container'>
                        <div className='why-modus'>
                            <div
                                className="why-modus__info">
                                <div
                                    className="why-modus__title">Why
                                    modus versus?
                                </div>
                                <div
                                    className="why-modus__desc">Lorem
                                    ipsum dolor sit amet,
                                    consectetur adipisicing
                                    elit. Non, quas!
                                </div>
                            </div>
                            <div className="screens">
                                <div
                                    className='screen-left'>
                                    <ul className='screen-dot__list'>
                                        <li className='dot dot1'></li>
                                        <li className='dot dot2'></li>
                                        <li className='dot dot3'></li>
                                    </ul>
                                </div>
                                <div
                                    className='screen-middle'>

                                    <ul className='screen-dot__list'>
                                        <li className='dot dot1'></li>
                                        <li className='dot dot2'></li>
                                        <li className='dot dot3'></li>
                                    </ul>
                                    <div
                                        className="screen-dot__close"></div>
                                </div>

                                <div
                                    className='screen-right'>
                                    <ul className='screen-dot__list'>
                                        <li className='dot dot1'></li>
                                        <li className='dot dot2'></li>
                                        <li className='dot dot3'></li>

                                    </ul>
                                    <div
                                        className="screen-dot__close"></div>
                                </div>
                            </div>
                        </div>
                        <div className="our-advantages">
                            <div
                                className="our-advantages__left">
                                <div
                                    className="our-advantages__title">Why
                                    choose Us?
                                </div>
                                <ul className="our-advantages__left-list">
                                    <li className="our-advantages__left-item">Lorem
                                        ipsum dolor.
                                    </li>
                                    <li className="our-advantages__left-item">Lorem
                                        ipsum dolor sit.
                                    </li>
                                    <li className="our-advantages__left-item">Lorem
                                        ipsum dolor.
                                    </li>
                                    <li className="our-advantages__left-item">Lorem
                                        ipsum dolor sit.
                                    </li>
                                    <li className="our-advantages__left-item">Lorem
                                        ipsum.
                                    </li>
                                    <li className="our-advantages__left-item">Lorem
                                        ipsum dolor sit.
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="our-advantages__middle">
                                <div
                                    className="our-advantages__middle-desc">Lorem
                                    ipsum dolor sit amet,
                                    consectetur adipisicing
                                    elit. <Link to='/'> Ad
                                        blanditiis
                                        delectus
                                        dignissimos </Link>
                                    distinctio et ipsum iure
                                    magni nemo sapiente
                                    temporibus.
                                </div>
                                <ul className="our-advantages__middle-list">
                                    <li className="our-advantages__middle-item"></li>
                                    <li className="our-advantages__middle-item"></li>
                                    <li className="our-advantages__middle-item"></li>
                                    <li className="our-advantages__middle-item"></li>
                                </ul>
                            </div>
                            <div
                                className="our-advantages__right">
                                <div
                                    className="our-advantages__title">What
                                    Client's Say?
                                </div>
                                <div
                                    className="our-advantages__right-desc">Lorem
                                    ipsum dolor sit amet,
                                    consectetur adipisicing
                                    elit. Blanditiis
                                    deserunt explicabo
                                    facere pariatur quaerat
                                    quas saepe?
                                </div>
                                <div
                                    className="our-advantages__right-sign">Jhon
                                    Doe
                                </div>
                            </div>
                        </div>

                        <SimpleSlider/>

                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}


export default Main