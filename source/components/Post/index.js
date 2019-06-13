import React, { Component } from 'react';
import moment from 'moment';
import {func,string,number,array} from 'prop-types'

import { Consumer } from 'components/HOC/withProfile';
import Like from 'components/Like'

import Styles from './styles.m.css';

export default class Post extends Component {
    static PropTypes = {
        _likePost: func.isRequired,
        _deletePost: func.isRequired,
        comment: string.isRequired,
        created: number.isRequired,
        id: string.isRequired,
        likes: array.isRequired,
    }

    constructor(){
        super();
        this._deletePost=this._deletePost.bind(this);
    }

    _deletePost(){
        const { _deletePost,id } = this.props;
        _deletePost(id);
    }


    render() {

        const { comment, created , _likePost, id, likes} = this.props;

        return (
            <Consumer>
                {(context)=>(
                    <section className={Styles.post}>
                        <span className={Styles.cross} onClick={this._deletePost}/>
                        <img src = {context.avatar} />
                        <a>{context.currentUserFirstName}</a>
                        <time>{moment.unix(created).format('MM DD YY')}</time>
                        <p>{comment}</p>
                        <Like id = {id} likes = {likes} _likePost={_likePost} {...context} />
                    </section>
                )}
            </Consumer>
        );
    }
}