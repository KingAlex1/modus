import React, {Component} from 'react'
import MainTitle from '../Common/MainTitle'
import {Link} from 'react-router-dom'
import img1 from '../../image/photos-3.png'
import img2 from '../../image/photos-5.png'


import './index.scss'

export class Footer extends Component {


    render() {

        const company = ['About', 'FAQ', 'Contact', 'Terms', 'Privacy', 'Testimonials']
        const community = ['Blog', 'Forum', 'Support', 'Newsletter']
        const socials = [{
            name: 'facebook',
            href: 'https://www.facebook.com/'
        }, {
            name: 'google',
            href: 'https://www.google.ru/'
        }, {
            name: 'twitter',
            href: 'https://twitter.com/'
        }, {
            name: 'rss',
            href: '#'

        }]
        return (
            <div className='footer'>
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-top-left">
                            <MainTitle/>
                            <div
                                className="footer-top-left__desc">Lorem
                                ipsum dolor sit amet,
                                consectetur adipisicing
                                elit. Animi exercitationem
                                ipsa pariatur repellendus!
                                Eos labore minus molestiae
                                nobis porro provident
                                quisquam soluta tenetur
                                voluptatibus.
                            </div>
                            <div
                                className="footer-top-left__contacts">

                                <div
                                    className="footer-top-left__phone-info">
                                    <div
                                        className="footer-top-left__phone-name">phone:
                                    </div>
                                    <div
                                        className="footer-top-left__phone-number">8(926)112-12-23
                                    </div>
                                </div>

                                <div
                                    className="footer-top-left__email-info">
                                    <div
                                        className="footer-top-left__email-name">email:
                                    </div>
                                    <div
                                        className="footer-top-left__email-number">info@mail.ru
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="footer-top-middle">
                            <ul className='footer-top-middle__list'>
                                <div
                                    className='footer-top-middle__title'>Company
                                </div>
                                {company.map((el, i) => {
                                    return (
                                        <li className='footer-top-middle__item'
                                            key={i}>{el}</li>
                                    )
                                })}
                            </ul>
                            <ul className="footer-top-middle__list">
                                <div
                                    className='footer-top-middle__title'>Community
                                </div>
                                {community.map((el, i) => {
                                    return (
                                        <li className='footer-top-middle__item'
                                            key={i}>{el}</li>
                                    )
                                })}
                            </ul>


                        </div>

                        <div
                            className="footer-top-right">
                            <div
                                className="footer-top-right__title">
                                <div
                                    className="footer-top-right__title-extra">from
                                    the
                                </div>
                                <div
                                    className="footer-top-right__title-main">Blog
                                </div>
                            </div>
                            <div
                                className="footer-top-right__blog">
                                <div
                                    className="footer-top-right__blog-item">
                                    <img src={img1} alt=""
                                         className="footer-top-right__blog-img"/>
                                    <div
                                        className="footer-top-right__blog-info">
                                        <div
                                            className="footer-top-right__blog-desc">Lorem
                                            ipsum dolor sit
                                            amet,consectetur
                                            adipisicing
                                            consectetur
                                            adipisicing
                                            elit.
                                        </div>
                                        <div
                                            className="footer-top-right__blog-date">01
                                            january 2019
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="footer-top-right__blog-item">
                                    <img src={img2} alt=""
                                         className="footer-top-right__blog-img"/>
                                    <div
                                        className="footer-top-right__blog-info">
                                        <div
                                            className="footer-top-right__blog-desc">Lorem
                                            ipsum dolor sit
                                            amet,consectetur
                                            adipisicing
                                            consectetur
                                            adipisicing
                                            elit.
                                        </div>
                                        <div
                                            className="footer-top-right__blog-date">01
                                            january 2019
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="footer-bottom">
                        <div
                            className="footer-bottom__info">2019
                            ModusVersus
                        </div>
                        <ul className="footer-bottom__socials_list">
                            {socials.map((el) => {
                                return (
                                    <li key={el.name}
                                        className="footer-bottom__socials_item" >
                                        <Link to={el.href} className={"footer-bottom__socials_link socials_link-"+el.name}/>
                                    </li>)
                            })
                            }

                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}


export default Footer