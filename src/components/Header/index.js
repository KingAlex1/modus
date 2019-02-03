import React, {Component} from 'react'
import Menu from './Menu'

import './index.scss'


export class Header extends Component {

    render() {
        return (
            <div className='header'>
                <div className='container'>
                    <Menu/>
                </div>
            </div>
        )
    }
}


export default Header