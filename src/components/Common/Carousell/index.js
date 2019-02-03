import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel';
import './index.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../image/image-from-rawpixel-id-431913-jpeg.jpg'
import img2 from '../../../image/image-from-rawpixel-id-391717-jpeg.jpg'
import img3 from '../../../image/image-from-rawpixel-id-517195-jpeg.jpg'

export class Carousell extends Component {

    render() {
        return (
            <div className='carousel'>
                <Carousel
                    showArrows={true}
                    showThumbs={false} autoPlay

                >
                    <div className='carousel__item'>
                        <img className='carousel__img'
                             src={img1}
                             alt=""/>

                    </div>
                    <div className='carousel__item'>
                        <img className='carousel__img'
                             src={img2}
                             alt=""/>

                    </div>
                    <div className='carousel__item'>
                        <img className='carousel__img'
                             src={img3}
                             alt=""/>

                    </div>
                </Carousel>
            </div>
        )
    }
}


export default Carousell