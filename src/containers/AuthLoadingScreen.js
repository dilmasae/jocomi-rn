import React, {Component} from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native';

import * as actionCreators from '@actions';
import {connect} from 'react-redux';

class AuthLoadingScreen extends Component {

    constructor(props) {
        super(props);

        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {

        const AUTH = this.props.auth;
        const TOKEN = AUTH.token;
        const TERMS = AUTH.terms;

        // const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(TOKEN ? 'Home' : 'Auth');
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }

}

const mapStateToProps = (state) => ({
    auth: state.authReducer,
})

export default connect(mapStateToProps)(AuthLoadingScreen);
