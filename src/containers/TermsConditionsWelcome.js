import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
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

class TermsConditionsWelcome extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        photo: "",
        userName: "",
        phoneNumber: "",
        companyName: "",
    }

    getAvatar() {
        if(this.state.photo!=""){
            return {uri: this.state.photo};
        }else{
            return require(avatarDefault);
        }
    }

    toggleError() {

    }

    render() {

        /*Obtendremos de la base de datos */
        
        const uri = "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg";
        //const uri = "";

        const userName = "John";
        const phoneNumber =  "+34 123 45 67 10";
        const companyName = "my_company";

        /*************************/
        
        if (uri!="") {
            this.state.photo = uri;
        } 

        this.state.userName = userName;
        this.state.phoneNumber = phoneNumber;
        this.state.companyName = companyName;

        return(
            
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <Text h1 style={styles.title}>{strings('WELCOME')}</Text>

                <Avatar
                    size="medium"
                    rounded                   
                    source={this.getAvatar()}
                    activeOpacity={0.7}
                    containerStyle={{marginTop: 20, marginBottom: 10}}
                />

                <View style={styles.userInfo}>
                    <Icon
                        name={IconName.USER}
                        size={24}
                        color='black'
                    />
                    <Text style={styles.info}>{strings('userName')}</Text>
                    <Text style={styles.infoValue}>{this.state.userName}</Text>
                </View>

                <View style={styles.userInfo}>
                    <Icon
                        name={IconName.PHONE}
                        size={24}
                        color='black'
                    />
                    <Text style={styles.info}>{strings('phoneNumber')}</Text>
                    <Text style={styles.infoValue}>{this.state.phoneNumber}</Text>
                </View>

                <View style={styles.userInfo}>
                    <Icon
                        name={IconName.BUSINESS}
                        size={24}
                        color='black'
                    />
                    <Text style={styles.info}>{strings('companyName')}</Text>
                    <Text style={styles.infoValue}>{this.state.companyName}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.redaction}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                    Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
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
                    onPress={() => this.props.navigation.navigate('TermsConditionsWelcome2', 
                        {photo:this.state.photo,
                        userName:this.state.userName,
                        phoneNumber:this.state.phoneNumber,
                        companyName:this.state.companyName})}
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
        color: Color.primary,
        fontSize: 15,
        padding: 7
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
    title: {
        fontSize: 20
    },
    userInfo: {
        flexDirection: 'row', 
        alignSelf: 'flex-start',
        padding: 5,
        marginLeft: 36
    }

})

export default TermsConditionsWelcome;
