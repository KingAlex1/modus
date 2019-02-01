import React, {Component} from 'react'
import Main from '../Main'
import {Switch , Route , Redirect } from 'react-router-dom'

import './index.scss'

export class AppRouter extends Component {

    render() {
        return (
            <div className='wrapper'>
                <div className='main-content'>
                    <Main/>
                    {/*<Switch>*/}
                        {/*<Route path='/' exact component={Main}/>*/}
                        {/*<Redirect path='*' to='/'/>*/}
                    {/*</Switch>*/}
                </div>
            </div>
        )
    }
}


export default AppRouter