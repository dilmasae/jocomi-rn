import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Layout } from '@common';

import { 
    Avatar, 
    Button, 
    Icon, 
} from 'react-native-elements';

const avatarDefault="../media/avatar.png";

class TermsConditionsWelcome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photo: "",
            userName: "",
            phoneNumber: "",
            companyName: "",
        }
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

    static navigationOptions = {
        header: null
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

                <Text h3 style={styles.title}>WELCOME</Text>

                <Avatar
                    size="medium"
                    rounded                   
                    source={this.getAvatar()}
                    activeOpacity={0.7}
                    containerStyle={{marginTop: 20, marginBottom: 10}}
                />

                <View style={styles.userInfo}>
                    <Icon
                        name='person'
                        size={24}
                        color='black'
                    />
                    <Text style={styles.info}>User name</Text>
                    <Text style={styles.infoValue}>{this.state.userName}</Text>
                </View>

                <View style={styles.userInfo}>
                    <Icon
                        name='phone-android'
                        size={24}
                        color='black'
                    />
                    <Text style={styles.info}>Phone number</Text>
                    <Text style={styles.infoValue}>{this.state.phoneNumber}</Text>
                </View>

                <View style={styles.userInfo}>
                    <Icon
                        name='business'
                        size={24}
                        color='black'
                    />
                    <Text style={styles.info}>Company name</Text>
                    <Text style={styles.infoValue}>{this.state.companyName}</Text>
                </View>

                <Text style={styles.container}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Button
                    icon={
                        <Icon
                            name='chevron-right'
                            size={24}
                            color='white'
                        />
                    }
                    iconRight
                    title="Accept terms and conditions"
                    backgroundColor="#FF4242"
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
        backgroundColor: '#9370DB',
        width: 300
    },
    container: {
        width: '80%',
        textAlign: 'justify',
        padding: 7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da'
    },
    h3: {
        textAlign: 'right'
    },
    info: {
        color: '#9370DB',
        fontSize: 15,
        padding: 5
    },
    infoValue: {
        fontSize: 18,
        padding: 5
    },
    text: {
        textAlign: 'center',
        marginTop: 15,
        color: '#9370DB',
        fontSize: 15
    },
    title: {
    },
    userInfo: {
        flexDirection: 'row', 
        alignSelf: 'flex-start',
        padding: 5,
        marginLeft: 36
    }

})

export default TermsConditionsWelcome;
