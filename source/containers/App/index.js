// Core
import React, { Component } from 'react';

import { Provider } from 'components/HOC/withProfile';
import Feed from 'components/Feed';


import avatar from 'theme/assets/lisa';

const options = {
    avatar,
    currentUserFirstName : 'Masha',
    currentUserLastName : 'Ivanova',
}

export default class App extends Component {
    render() {
        return (
            <Provider value = {options}>
                <Feed {...options}/>
            </Provider>
        );
    }
}
