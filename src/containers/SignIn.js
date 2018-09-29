import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { 
    Layout, 
    IconName,
    Color
} from '@common';

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
        idCard: '',
        password: '',
        idCardErrorMessage: null,
        passwordErrorMessage: null,
    }

    _isValidCard = () => {
        const {idCard} = this.state;

        return !idCard || idCard.length === 0 ? false : true;
    }

    _isPassword = () => {
        const {password} = this.state;

        return !password ||password.length === 0 ? false : true;
    }

    _handleIdCardError = () => {
        if(!this._isValidCard()) this.setState({idCardErrorMessage: strings('signinErrorMessage') });
        else this.setState({idCardErrorMessage: null});
    }

    _handlePasswordError = () => {
        if(!this._isPassword()) this.setState({passwordErrorMessage: strings('signinErrorMessage')});
        else this.setState({passwordErrorMessage: null});
    }

    render() {

        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <Text h3 style={styles.title}>Sign in</Text>

                <Input
                    label={strings('idCard')}
                    labelStyle={styles.text}
                    placeholder={strings('idCard')}
                    onChangeText={(idCard) => {
                        this.setState({idCard}, () => {
                            this._handleIdCardError()
                        })
                    }}
                    value={this.state.idCard}
                    inputStyle={styles.textInput}
                    leftIcon={
                        <Icon
                            name={IconName.USER}
                            size={24}
                            color='black'
                        />
                    }
                    errorStyle={styles.error}
                    errorMessage={this.state.idCardErrorMessage}
                />

                <Input
                    label={strings('Password')}
                    labelStyle={styles.text}
                    placeholder={strings('Password')}
                    secureTextEntry={true}
                    onChangeText={(password) => {
                        this.setState({password}, () => {
                            this._handlePasswordError();
                        })
                    }}
                    value={this.state.password}
                    inputStyle={styles.textInput}
                    leftIcon={
                        <Icon
                            name={IconName.PASSWORD}
                            size={24}
                            color='black'
                        />
                    }
                    errorStyle={styles.error}
                    errorMessage={this.state.passwordErrorMessage}
                />

                <Button
                    disabled={this.state.idCard.length === 0 || this.state.password.length === 0}
                    title={strings('SIGN_IN')}
                    backgroundColor={Color.grey}
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
        backgroundColor: Color.primary,
        width: 300
    },
    h3: {
        textAlign: "right"
    },
    error: {
        color: Color.red,
        marginLeft: 20
    },
    text: {
        textAlign: "center",
        marginTop: 15,
        color: Color.primary,
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
