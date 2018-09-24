import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Layout } from '@common';

import { 
    Button, 
    Icon, 
    Input,
} from 'react-native-elements';

import { strings } from '@locales';

class SignIn extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        id_card: this.props.value,
        password: this.props.value,
        id_cardErrorMessage: 'This field is required',
        passwordErrorMessage: 'This field is required',
    }

    _getDisabled() {
        let disabled = false;
        
        if(!this.state.id_card || this.state.id_card.length <=0){
            disabled = true;
            this.state.id_cardErrorMessage = 'This field is required';
        }else {
            this.state.id_cardErrorMessage = ' ';
        }
            
        if(!this.state.password || this.state.password.length <=5){
            disabled = true;
            this.state.passwordErrorMessage = 'This field is required';
        }else {
            this.state.passwordErrorMessage = ' ';
        }
        return disabled;
    }

    toggleError() {

    }

    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <Text h3 style={styles.title}>Sign in</Text>

                <Input
                    label='ID Card'
                    labelStyle={styles.text}
                    placeholder='ID Card'
                    onChangeText={(id_card) => this.setState({id_card})}
                    value={this.state.id_card}
                    inputStyle={styles.textInput}
                    leftIcon={
                        <Icon
                            name='person'
                            size={24}
                            color='black'
                        />
                    }
                    errorStyle={styles.error}
                    errorMessage={this.state.id_cardErrorMessage}
                />

                <Input
                    label='Password'
                    labelStyle={styles.text}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    inputStyle={styles.textInput}
                    leftIcon={
                        <Icon
                            name='vpn-key'
                            size={24}
                            color='black'
                        />
                    }
                    errorStyle={styles.error}
                    errorMessage={this.state.passwordErrorMessage}
                    
                />

                <Button
                    disabled={this._getDisabled()}
                    title={strings('SIGN_IN')}
                    backgroundColor="#FF4242"
                    onPress={() => this.props.navigation.navigate('TermsConditionsWelcome')}
                    style={Layout.separatorY}
                    buttonStyle={styles.button}
                />

                <Text style={styles.text}>
                    {strings('FORGET_PASSWORD')}
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    button: {
        borderRadius: 12,
        backgroundColor: "#9370DB",
        width: 300
    },
    h3: {
        textAlign: "right"
    },
    error: {
        color: 'red',
        marginLeft: 20
    },
    text: {
        textAlign: "center",
        marginTop: 15,
        color: "#9370DB",
        fontSize: 15
    },
    textInput: {
        marginLeft: 20,
        fontSize: 15
    },
    title: {
        textAlign: "left",
        marginLeft: 40,
        width: "100%"
    }

})

export default SignIn;
