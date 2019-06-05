// Core
import React, { Component } from 'react';

import Feed from 'components/Feed'

import avatar from 'theme/assets/lisa';

const options = {
    avatar,
    currentUserFirstName : 'Masha',
    currentUserLastName : 'Ivanova',
}

export default class App extends Component {
    render() {
        return (
            <Feed {...options} />
        );
    }
}
