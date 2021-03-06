import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.m.css';

import { withProfile } from 'components/HOC/withProfile';


class Composer extends Component {
    static propTypes = {
        _createPost: PropTypes.func.isRequired, 
    };

    state = {
        comment: '',
    };

    _updateComment = (event) => {
        this.setState({
            comment: event.target.value,
        });
    }

    _handleForSubmit = (event) => {
        event.preventDefault();
        this._submitComment();
    }

    _submitComment = () => {
        
        const {comment} = this.state;
        if(!comment){
            return null
        }

        this.props._createPost(comment);
        this.setState({
            comment:'',
        })
    }

    _submitOnEnter = (event) => {
        const enterKey = event.key === 'Enter';

        if(enterKey){ 
            event.preventDefault();
            this._submitComment();
        }
    }

    render() {
        const {comment} = this.state;
        const {avatar,currentUserFirstName} = this.props;
        return (
                <section className={Styles.composer}>
                    <img src = {avatar} />
                    <form onSubmit = {this._handleForSubmit}>
                        <textarea 
                            placeholder= {`Hello ${currentUserFirstName}`} 
                            value={comment} 
                            onChange={this._updateComment} 
                            onKeyPress={this._submitOnEnter}
                        />
                        <input type='submit' value='Post' />
                    </form>
                </section>
        );
    }
}

export default withProfile(Composer);