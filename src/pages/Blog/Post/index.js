import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './index.scss'
import {fetchPostStart} from "../../../actions/post";
import {getPost} from "../../../reducers/post";

export class Post extends Component {

    componentDidMount() {
        this.props.fetchPostStart()
    }

    renderPost = (post, index) => {
        return (
            <div className='post' key={index}>
                <div className="post-payload">
                    <div className="post-payload__date">
                        <div
                            className="post-payload__date-month">
                            {post.month}
                        </div>
                        <div
                            className="post-payload__date-number">
                            {post.date}
                        </div>
                    </div>
                    <div
                        className="post-payload__type">{post.categoryId}
                    </div>
                </div>
                <div className="post-info">
                    <img src={post.image}
                         className="post-info__image"/>
                    <div
                        className="post-info__title">{post.name}
                    </div>
                    <div className="post-info__settings">
                        <span
                            className="post-info__author">{post.author}</span>
                        <span
                            className="post-info__tags">{post.tag}</span>
                        <span
                            className="post-info__comments">{post.comments}</span>
                    </div>
                    <div
                        className="post-info__description">{post.description}
                    </div>
                    <Link to={`/blog/${post.id}`}
                          className="post-info__continue">Continue
                        reading</Link>
                </div>
            </div>
        )
    }


    render() {
        const {post} = this.props
        console.log(post)
        return (<div>
                {(post.posts).map((post,i)=>this.renderPost(post,i))}
            </div>

        )
    }
}

const mapDispatchToProps = {
    fetchPostStart
}

const mapStateToProps = state => ({
    post: getPost(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)