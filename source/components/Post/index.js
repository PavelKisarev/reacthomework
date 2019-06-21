import React, { Component } from 'react';
import moment from 'moment';
import {func,string,number,array} from 'prop-types'

import { withProfile } from 'components/HOC/withProfile';
import Like from 'components/Like'

import Styles from './styles.m.css';

class Post extends Component {
    static PropTypes = {
        _likePost: func.isRequired,
        _deletePost: func.isRequired,
        comment: string.isRequired,
        created: number.isRequired,
        id: string.isRequired,
        likes: array.isRequired,
    }


    _deletePost = () => {
        const { _deletePost,id } = this.props;
        _deletePost(id);
    }


    render() {

        const {avatar, currentUserFirstName, comment, created , _likePost, id, likes} = this.props;

        return (

                    <section className={Styles.post}>
                        <span className={Styles.cross} onClick={this._deletePost}/>
                        <img src = {avatar} />
                        <a>{currentUserFirstName}</a>
                        <time>{moment.unix(created).format('MM DD YY')}</time>
                        <p>{comment}</p>
                        <Like id = {id} likes = {likes} _likePost={_likePost} />
                    </section>

        );
    }
}

export default withProfile(Post);