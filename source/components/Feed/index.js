import React, { Component } from 'react';
import moment from 'moment';

import { withProfile } from 'components/HOC/withProfile';
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner'

import Styles from './styles.m.css';
import {getUniqueID,delay} from 'instruments'



class Feed extends Component {

    state = {
        posts: [
            {id:'1', comment: 'Hello first', created:1233644882, likes:[] },
            {id:'2', comment: 'Hello second', created:1233644882, likes:[] }
        ],
        isPostFetching: false,
    }

    _setPostsFetchingState = (state) => {
        this.setState({
            isPostFetching: state,
        });
    }

     _createPost = async (comment) => {
        this._setPostsFetchingState(true);

        const post = {
            id:getUniqueID(),
            created:moment.utc(),
            comment,
            likes: [],
        };

        await delay(200);

        this.setState(({posts})=>({
            posts:[post,...posts],
            isPostFetching: false,
        }))

    }

     _likePost = async (id) =>{
        const { currentUserFirstName, currentUserLastName } = this.props;
        this._setPostsFetchingState(true);

        await delay(1200);
        

        const newPosts = this.state.posts.map( post => {
            if( post.id === id) {
                
                return {
                    ...post,
                    likes:[
                        {
                            id: getUniqueID(),
                            firstName:currentUserFirstName,
                            lastName :currentUserLastName,
                        }
                    ]
                }
            }
            return post;
        })

        this.setState({
            posts: newPosts,
            isPostFetching: false,
        })
    }

     _deletePost = async (id) => {
        this._setPostsFetchingState(true);

        await delay(200);

        const filterPostArr = (id) => {
            return this.state.posts.filter( post => post.id != id);
        }
        let newArr = filterPostArr(id);

        this.setState({
            posts: newArr,
            isPostFetching: false,
        })
    }


    render() {
        const { posts, isPostFetching } = this.state;

        const postJSX = posts.map((post)=>{
            return <Post key = { post.id } {...post} _likePost = {this._likePost} _deletePost = {this._deletePost}/>
        });

        
        return (
            <section className={Styles.feed}>
                <Spinner isSpining = {isPostFetching} />
                <StatusBar />
                <Composer _createPost={ this._createPost} />
                {postJSX}
            </section>
        );
    }
}

export default withProfile(Feed);