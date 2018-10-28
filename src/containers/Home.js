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

import {ItemDocs} from '@components';

class Home extends Component {

    static navigationOptions = {
        header: null
    }

    render() {

        const date = "2018/12/12";
        const startTime = "8:00";
        const endTime = "9:00";
        const place = "Hotel Riu Place Oasis";
        const work = "Trabajo fontaneria blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla";
        
        const data = {
            date,
            startTime,
            endTime,
            place,
            work
        }
        

        return (

            
            <View style={[Layout.containerY, { backgroundColor: Color.black }]}>

                <ItemDocs data={data}/> 

            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps)(Home);
