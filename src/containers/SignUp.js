import React, {Component} from 'react';
import {
    View,
    Button
} from 'react-native';

class SignUp extends Component {

    static navigationOptions = {
        header: null
    }

    _renderContent = () => {
        return(
            <Button
                title="Login"
                onPress={() => this.props.navigation.goBack()}
            />
        );
    }

    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                {this._renderContent()}
            </View>
        )
    }

}

export default SignUp;
