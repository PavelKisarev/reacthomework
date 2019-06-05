import React, { Component } from 'react';
import moment from 'moment';

import avatar from 'theme/assets/lisa';

import Styles from './styles.m.css';

export default class Post extends Component {
    render() {
        const {
            avatar,
            currentUserFirstName ,
        } = this.props;
        return (
            <>
                <section className={Styles.post}>
                    <img src = {avatar} />
                    <a>{currentUserFirstName}</a>
                    <time>{moment().format('MM DD YY')}</time>
                    <p>Hello world. My name is {currentUserFirstName}</p>
                </section>
            </>
        );
    }
}