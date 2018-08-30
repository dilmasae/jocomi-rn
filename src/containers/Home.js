import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

import {
    Constant,
    Layout,
} from '@common';

import * as actionCreators from '@actions';
import { connect } from 'react-redux';

class Home extends Component {

    static navigationOptions = {
        title: Constant.HEADER_TITLE
    }

    render() {

        return (
            <View style={Layout.container}>
                
                <Text>Home</Text>

            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps)(Home);
