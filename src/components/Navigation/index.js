import React, {PureComponent} from 'react'
import HeaderButton from '../HeaderButton'

import './index.scss'

export class Navigation extends PureComponent {
    constructor(props) {
        super(props)

        this.links = ['home', 'about', 'service', 'portfolio', 'blog', 'features', 'contacts']
    }

    render() {
        return (


            <div className='navigation'>
                <ul className='nav__list'>
                    {this.links.map((el, i) => {
                        return (
                            <li className='nav__item'>
                                <HeaderButton
                                    link={el}
                                    key={i}
                                >
                                    {el}
                                </HeaderButton>

                            </li>)
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default Navigation