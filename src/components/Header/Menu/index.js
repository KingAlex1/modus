import React, {Component} from 'react'
import MainTitle from '../../Common/MainTitle/index'
import Navigation from '../Navigation/index'

import './index.scss'

export class Menu extends Component {

    render() {
        return (
            <div className='menu'>
                <MainTitle/>
                <Navigation/>
            </div>
        )
    }
}


export default Menu