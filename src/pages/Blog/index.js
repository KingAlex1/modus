import React, {Component} from 'react'
import PageDesc from '../../components/Common/PageDesc'
import './index.scss'
import Header from "../../components/Header";
import Post from "./Post";
import Options from "./Options";
import Footer from "../../components/Footer";


export class Blog extends Component {

    render() {
        const {match} = this.props

        return (
            <div className='blog'>
                <div className="main-content">
                    <Header/>
                    <PageDesc match={match}/>
                    <div className='container'>
                        <div className='post-content'>
                            <Post/>
                            <Options/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}


export default Blog