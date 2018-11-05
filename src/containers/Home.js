import React, {Component} from 'react';
import {
    View,
    FlatList
} from 'react-native';

import {
    Layout,
    Color,
} from '@common';

import * as actionCreators from '@actions';
import { connect } from 'react-redux';

import {ItemDocs} from '@components';

class Home extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        docs: []
    }

    getDocs() {

        const docs = [
            {
                id: "1",
                date: "2018/12/12",
                startTime: "8:00",
                endTime: "9:00",
                place: "Hotel Riu Place Oasis",
                work: "Trabajo fontaneria blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla",
            },
            {
                id: "2",
                date: "2018/13/12",
                startTime: "8:00",
                endTime: "9:00",
                place: "Hotel Riu Place Oasis",
                work: "Trabajo fontaneria blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla",
            },
            {
                id: "3",
                date: "2018/13/12",
                startTime: "9:00",
                endTime: "10:00",
                place: "Hotel Riu Place Oasis",
                work: "Trabajo fontaneria blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla",
            },
            {
                id: "4",
                date: "2018/12/12",
                startTime: "8:00",
                endTime: "9:00",
                place: "Hotel Riu Place Oasis",
                work: "Trabajo fontaneria blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla",
            },
            {
                id: "5",
                date: "2018/13/12",
                startTime: "8:00",
                endTime: "9:00",
                place: "Hotel Riu Place Oasis",
                work: "Trabajo fontaneria blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla",
            },
            {
                id: "6",
                date: "2018/13/12",
                startTime: "9:00",
                endTime: "10:00",
                place: "Hotel Riu Place Oasis",
                work: "Trabajo fontaneria blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla",
            }
        ]

        this.setState({docs})

    }

    componentDidMount() {

        //posteriormente se hara llamada base datos
        //this.getDocs().then(docs => this.setState({ docs }))

        this.getDocs()

    }

    renderItem = ({item}) => 
        <View style={[Layout.containerY, { backgroundColor: Color.black }]}>
            <ItemDocs data={item}/>
        </View>

    render() {

        const {docs} = this.state
        return <FlatList 
                    data={docs}
                    renderItem={this.renderItem} 
                    keyExtractor={item => item.id}
                />

    }

}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps)(Home);
