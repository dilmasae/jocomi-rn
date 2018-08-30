import React, {Component} from 'react';
import {
    View,
    Button
} from 'react-native';

class SignIn extends Component {

    static navigationOptions = {
        header: null
    }

    _renderContent = () => {
        return(
            <Button
                title="Go to home"
                onPress={() => this.props.navigation.navigate('HomeStack')}
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

export default SignIn;
