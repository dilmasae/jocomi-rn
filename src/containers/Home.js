import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

import {
    Constant,
    Layout,
    Color,
} from '@common';

import * as actionCreators from '@actions';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

class Home extends Component {

    static navigationOptions = {
        header: null
    }

    render() {

        const list = [
            {
              name: 'Amy Farha',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              subtitle: 'Vice President'
            },
            {
              name: 'Chris Jackson',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman'
            },
            {
                name: 'Jorge',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Thai',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ]

        return (
            <View style={[Layout.containerY, { backgroundColor: Color.black }]}>

                <View >
                {
                    list.map((l, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: l.avatar_url } }}
                            title={l.name}
                            subtitle={l.subtitle}
                            chevron
                            titleStyle={{ color: 'white', fontWeight: 'bold' }}
                            subtitleStyle={{ color: 'white' }}
                            containerStyle={{backgroundColor: Color.blackPearl}}
                        />
                    ))
                }
                </View>

            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps)(Home);
