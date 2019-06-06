import React, { Component } from 'react';
import moment from 'moment';

import { Consumer } from 'components/HOC/withProfile';

import Styles from './styles.m.css';

export default class Post extends Component {
    render() {
        return (
            <Consumer>
                {(context)=>(
                    <section className={Styles.post}>
                        <img src = {context.avatar} />
                        <a>{context.currentUserFirstName}</a>
                        <time>{moment().format('MM DD YY')}</time>
                        <p>Hello world. My name is {context.currentUserFirstName}</p>
                    </section>
                )}
            </Consumer>
        );
    }
}