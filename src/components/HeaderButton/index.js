import React from 'react'
import {Link} from 'react-router-dom'

import './index.scss'

export const HeaderButton = (props) => {
    const {link, children} = props
    return (

        <Link
            to={"/" + link}
            className="nav-bar__link"
        >
            {children}
        </Link>
    )
}

export default HeaderButton