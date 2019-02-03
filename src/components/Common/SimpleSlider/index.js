import React, {Component, PureComponent} from 'react'
import Slider from 'react-slick'
import {connect} from 'react-redux'
import {getMeter} from '../../../reducers/meter'
import {
    moveMeterToLeft,
    moveMeterToRight
} from '../../../actions/meter'

import './index.scss'

class SampleNextArrow extends PureComponent {

    handleMoveMeterToLeft = () => {
        let divMeter = document.querySelector(".metr"),
            strMeter = divMeter.style.left,
            numberMeter = strMeter.replace(/px/, "")

        const {moveMeterToLeft, onClick} = this.props
        if (numberMeter !== '0' || numberMeter > "0") {
            console.log(numberMeter)

            moveMeterToLeft()
            onClick()
        }
    }

    render() {

        const {className, style} = this.props;
        return (
            <div
                className={className}
                style={{
                    ...style, display: "block",
                    position: 'absolute',
                    top: "-8px",
                    left: "1150px"
                }}
                onClick={this.handleMoveMeterToLeft}
            />
        );
    }
}

class SamplePrevArrow extends Component {

    handleMoveMeterToRight = () => {
        const {moveMeterToRight , onClick} = this.props
        let divMeter = document.querySelector(".metr")
        if (divMeter.style.left < '900px') {
            onClick()
            moveMeterToRight()
        }
    }

    render() {
        const {className, style} = this.props;
        return (
            <div className={className}
                 style={{
                     ...style,
                     display: "block",
                     position: "absolute",
                     top: "-8px",
                     left: "1110px"
                 }}
                 onClick={this.handleMoveMeterToRight}
            />
        );
    }
}

export class SimpleSlider extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: false,
            nextArrow: <SampleNextArrowContainer/>,
            prevArrow: <SamplePrevArrowContainer/>
        };
        const {meter} = this.props
        return (
            <div className='happy-clients'>
                <div
                    className="our-advantages__title">Our
                    happy clients
                </div>
                <div className="scale"></div>
                <div className="metr-section">
                    <div className="metr"
                         style={{left: meter}}></div>
                </div>
                <Slider {...settings}
                        className='slick-carousel-list'>
                    <div>
                        <h3 className='slick-carousel-img1 slick-carousel-img'/>
                    </div>
                    <div>
                        <h3 className='slick-carousel-img2 slick-carousel-img'/>
                    </div>
                    <div>
                        <h3 className='slick-carousel-img3 slick-carousel-img'/>
                    </div>
                    <div>
                        <h3 className='slick-carousel-img4 slick-carousel-img'/>
                    </div>
                    <div>
                        <h3 className='slick-carousel-img5 slick-carousel-img'/>
                    </div>
                    <div>
                        <h3 className='slick-carousel-img6 slick-carousel-img'/>
                    </div>
                    <div>
                        <h3 className='slick-carousel-img7 slick-carousel-img'/>
                    </div>
                    <div>
                        <h3 className='slick-carousel-img8 slick-carousel-img'/>
                    </div>
                    <div>
                        <h3 className='slick-carousel-img9 slick-carousel-img'/>
                    </div>

                </Slider>
            </div>
        );
    }
}

const mapDispatchToProps = {
    moveMeterToLeft,
    moveMeterToRight

}
const mapStateToProps = state => ({meter: getMeter(state)})

const SamplePrevArrowContainer = connect(mapStateToProps, mapDispatchToProps)(SamplePrevArrow)
const SampleNextArrowContainer = connect(mapStateToProps, mapDispatchToProps)(SampleNextArrow)


export default connect(mapStateToProps, mapDispatchToProps)(SimpleSlider)