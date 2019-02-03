import React from 'react'

import './index.scss'

export const PageDesc = (props) => {
    const {match} = props
    const page = match.path.replace(/\//g,"")
    return (
        <div className='page-desc'>
            <div className="container">
                <div className="page-content">
                    <div className='page-title'>{page}</div>
                    <div className='page-route'>Home / {page}</div>
                </div>
            </div>
        </div>
    )
}

export default PageDesc