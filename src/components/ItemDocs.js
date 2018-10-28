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
    Button, 
    Icon, 
    Input,
} from 'react-native-elements';

import { strings } from '@locales';

class ItemDocs extends Component {

    static navigationOptions = {
        header: null
    }

    toggleError() {

    }

    render() {

        const {date, startTime, endTime, place, work} = this.props.data

        return(
            <View style={{flex: 1}}>
                
                <View style={[{backgroundColor:Color.blackPearl, paddingVertical: 20, paddingHorizontal: 25, position: 'relative', justifyContent: 'center'}]}>
                    <View style={styles.column}></View>
                    <View style={{position: 'absolute', right: 5}}>

                        <Icon 
                            name='sc-telegram'
                            type='evilicon'
                            color='#517fa4'
                        />

                    </View>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        
                        <View style={{flexDirection: 'column', flex:1}}>

                            <Text style={styles.itemDate}>{date}</Text>
                            <Text style={[styles.itemValue, styles.itemTime]}>{startTime}</Text>
                            <Text style={[styles.itemValue, styles.itemTime]}>{endTime}</Text>

                        </View>

                        <View style={{flexDirection: 'column', flex:3, paddingRight: 10}}>
                            <Text style={styles.itemName}>{place}</Text>
                            <Text numberOfLines={2} style={styles.itemValue}>{work}</Text>
                                
                        </View>

                        
            
                        


                        

                        {/* <View style={styles.itemInfo_}>
                            <Text style={styles.itemValue}>{this.state.place}</Text>
                        </View>

                        <View style={styles.itemInfo_}>
                            <Text style={styles.itemValue}>{this.state.work}</Text>
                        </View> */}

                    </View> 
                    

                </View>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({

    column: {
        backgroundColor: Color.green,
        width: Layout.borderItemView,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0
    },
    /*container: {
        width: '99%',
        textAlign: 'justify',
        padding: 7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Color.borderGrey
    },*/
    /*itemInfo: {
        flexDirection: 'row', 
        alignSelf: 'flex-start',
    },
    itemInfo_: {
        flexDirection: 'column', 
        alignSelf: 'flex-start',
        padding: 4,
        backgroundColor: 'blue',
    },*/
    itemDate: {
        fontSize: 13,
        color: Color.green
    },
    itemName: {
        fontSize: 13,
        color: Color.primary
    },
    itemValue: {
        fontSize: 13,
        color: 'white'
    },
    itemTime: {
        fontStyle: 'italic' 
    }

})

export default ItemDocs;