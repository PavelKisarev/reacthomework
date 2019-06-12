import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types'

import { Consumer } from 'components/HOC/withProfile';

import Styles from './styles.m.css';

export default class Post extends Component {
    static PropTypes = {
        comment: PropTypes.string.isRequired,
        created: PropTypes.number.isRequired,
    }
    render() {

        const { comment, created } = this.props;

        return (
            <Consumer>
                {(context)=>(
                    <section className={Styles.post}>
                        <img src = {context.avatar} />
                        <a>{context.currentUserFirstName}</a>
                        <time>{moment.unix(created).format('MM DD YY')}</time>
                        <p>{comment} world. My name is {context.currentUserFirstName}</p>
                    </section>
                )}
            </Consumer>
        );
    }
}