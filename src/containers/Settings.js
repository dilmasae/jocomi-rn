import React, {Component} from 'react';
import {
    View,
    Text,
    Alert,
} from 'react-native';

import {
    Constant,
    Layout,
} from '@common';

import { 
    Button,
} from 'react-native-elements';

import { strings } from '@locales';

import * as actionCreators from '@actions';
import {connect} from 'react-redux';

class Settings extends Component {

    static navigationOptions = {
        title: Constant.HEADER_TITLE
    }

    render() {

        const AUTH = this.props.auth;

        return (
            <View style={Layout.container}>
                
                <Text>Settings</Text>

                <Button
                    title={strings('LOG_OUT')}
                    onPress={() => {
                        Alert.alert(
                            'Alert Title',
                            'My Alert Msg',
                            [
                              {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                              {text: 'OK', onPress: () => this.props.dispatch(actionCreators.log_out())},
                            ],
                            { cancelable: false }
                        )
                    }}
                    style={Layout.separatorY}
                />
                
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
