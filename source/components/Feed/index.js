import React, { Component } from 'react';

import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner'

import Styles from './styles.m.css';


export default class Feed extends Component {
    state = {
        posts: [
            {id:'1', comment: 'Hello first', created:1233644882 },
            {id:'2', comment: 'Hello second', created:1233644882 }
        ],
        isSpining: true,
    }
    render() {
        const { posts } = this.state;

        const postJSX = posts.map((post)=>{
            return <Post key = { post.id } {...post} />
        });

        
        return (
            <section className={Styles.feed}>
                <Spinner isSpining = {this.state.isSpining} />
                <StatusBar />
                <Composer />
                {postJSX}
            </section>
        );
    }
}