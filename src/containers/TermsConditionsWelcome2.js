import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Layout } from '@common';

import { 
    Avatar, 
    Button, 
    Icon, 
} from 'react-native-elements';

const avatarDefault="../media/avatar.png";

class TermsConditionsWelcome2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photo: this.props.navigation.state.params.photo,
            userName: this.props.navigation.state.params.userName,
            phoneNumber: this.props.navigation.state.params.phoneNumber,
            companyName: this.props.navigation.state.params.companyName,
        }
    }

    toggleError() {  
    }

    static navigationOptions = {
        header: null
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

                <Text style={styles.container}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book.{"\n"}{"\n"}
                <Text style={styles.infoValue_}>DOCUMENTS</Text>{"\n"}
                <Text style={styles.infoValue}>ID CARD</Text>{"\n"}
                <Text style={styles.infoValue}>NAME</Text>{"\n"}
                <Text style={styles.infoValue}>LAST NAME</Text>
                {"\n"}{"\n"}
                <Text style={styles.infoValue_}>COURSES</Text>{"\n"}
                <Text style={styles.infoValue}>PRL FONTANERIA</Text>{"\n"}
                <Text style={styles.infoValue}>PRL CONSTRUCCION</Text>
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
                    onPress={() => this.props.navigation.navigate('HomeStack')}
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
        fontSize: 15
    },
    infoValue: {
        fontSize: 18,
        padding: 5
    },
    infoValue_: {
        fontSize: 18,
        padding: 5,
        fontWeight: "bold"
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
    },
    userInfo_: {
        flexDirection: 'row', 
        alignSelf: 'flex-start',
        padding: 5,
        marginLeft: 20
    }

})

export default TermsConditionsWelcome2;
