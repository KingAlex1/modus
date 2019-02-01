import React, {Component} from 'react'
import HeaderTitle from '../HeaderTitle'
import Navigation from '../Navigation'

import './index.scss'

export class Menu extends Component {

    render() {
        return (
            <div className='menu'>
                <HeaderTitle/>
                <Navigation/>
            </div>
        )
    }
}


export default Menu