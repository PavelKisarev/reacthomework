import React, { Component } from 'react';

import { withProfile } from 'components/HOC/withProfile';

import Styles from './styles.m.css';

class StatusBar extends Component {
    render() {
        const { avatar, currentUserFirstName, currentUserLastName} = this.props;
        return (
                    <section className={Styles.statusBar}>
                        <button>
                            <img src={avatar}/>
                            <span>{currentUserFirstName}</span>
                            <span>&nbsp;</span>
                            <span>{currentUserLastName}</span>
                        </button>
                    </section>
        );
    }
}

export default withProfile(StatusBar);