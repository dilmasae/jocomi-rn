import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import { Layout } from '@common';

import { Button } from 'react-native-elements';

class SignIn extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Button
                    title="Go to home"
                    backgroundColor="#FF4242"
                    onPress={() => this.props.navigation.navigate('HomeStack')}
                />

                <Button
                    title="Register"
                    backgroundColor="#413D3D"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                    style={Layout.separatorY}
                />
            </View>
        )
    }

}

export default SignIn;
