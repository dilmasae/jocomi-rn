import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

import {
    Constant,
    Layout,
} from '@common';

import { connect } from 'react-redux';

class Settings extends Component {

    static navigationOptions = {
        title: Constant.HEADER_TITLE
    }

    render() {

        const AUTH = this.props.auth;

        return (
            <View style={Layout.container}>
                
                <Text>Settings</Text>
                
            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(Settings);
