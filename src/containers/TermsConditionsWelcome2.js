import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { 
    Color,
    IconName,
    Layout, 
} from '@common';

import { 
    Avatar, 
    Button, 
    Icon, 
} from 'react-native-elements';

import { strings } from '@locales';

const avatarDefault="../media/avatar.png";

import * as actionCreators from '@actions';
import {connect} from 'react-redux';

class TermsConditionsWelcome2 extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        photo: this.props.navigation.state.params.photo,
        userName: this.props.navigation.state.params.userName,
        phoneNumber: this.props.navigation.state.params.phoneNumber,
        companyName: this.props.navigation.state.params.companyName,
    }

    toggleError() {  
        
    }

    getAvatar() {

        if(this.state.photo!=""){
            return {uri: this.state.photo};
        }else{
            return require(avatarDefault);
        }
    }

    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <View style={styles.userInfo}>

                    <Avatar
                        size="large"
                        rounded                   
                        source={this.getAvatar()}
                        activeOpacity={0.7}
                        containerStyle={{marginTop: 20, marginBottom: 10}}
                    />

                    <View>

                        <View style={styles.userInfo_}>
                            <Text style={styles.infoValue}>{this.state.userName}</Text>
                        </View>

                        <View style={styles.userInfo_}>
                            <Text style={styles.infoValue}>{this.state.phoneNumber}</Text>
                        </View>

                        <View style={styles.userInfo_}>
                            <Text style={styles.infoValue}>{this.state.companyName}</Text>
                        </View>

                    </View>

                </View>

                <View style={styles.container}>
                    <Text style={styles.redaction}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book.
                    </Text>
                    <Text style={styles.info}>{strings('Documents').toUpperCase()}</Text>
                    <Text style={styles.infoValue}>ID CARD</Text>
                    <Text style={styles.infoValue}>NAME</Text>
                    <Text style={styles.infoValue}>LAST NAME</Text>
                    <Text style={Layout.separatorY}></Text>
                    <Text style={styles.info}>{strings('Courses').toUpperCase()}</Text>
                    <Text style={styles.infoValue}>PRL FONTANERIA</Text>
                    <Text style={styles.infoValue}>PRL CONSTRUCCION</Text>
                </View>

                <Button
                    icon={
                        <Icon
                            name={IconName.CHEVRON_RIGHT}
                            size={24}
                            color='white'
                        />
                    }
                    iconRight
                    title={strings('termsConditions')}
                    onPress={() => this.props.dispatch(actionCreators.accept_terms())}
                    style={Layout.separatorY}
                    buttonStyle={styles.button}
                />

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
    container: {
        width: '80%',
        textAlign: 'justify',
        padding: 7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Color.borderGrey
    },
    info: {
        fontSize: 18,
        padding: 5,
        fontWeight: "bold"
    },
    infoValue: {
        fontSize: 18,
        padding: 5
    },
    redaction: {
        padding: 5,
        textAlign: 'justify'
    },
    text: {
        textAlign: 'center',
        marginTop: 15,
        color: Color.primary,
        fontSize: 15
    },
    userInfo: {
        flexDirection: 'row', 
        alignSelf: 'flex-start',
        padding: 5,
        marginLeft: 36
    },
    userInfo_: {
        flexDirection: 'row', 
        alignSelf: 'flex-start',
        padding: 5,
        marginLeft: 20
    }

})

export default connect()(TermsConditionsWelcome2);
