import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

/*
 * CONTAINERS
 */
import {
    SignIn,
    SignUp,
    Home,
    AuthLoadingScreen,
    Settings,
    TermsConditionsWelcome,
    TermsConditionsWelcome2,
} from '@containers';

/*
 * REACT NAVIGATION
 */
import { 
    createSwitchNavigator, 
    createStackNavigator, 
    createBottomTabNavigator,
} from 'react-navigation';

import { AppNavigator } from 'react-native-navigation-actions';

/*
 * REDUX
 */
import { Provider } from 'react-redux';
import store from './store';
/***************************************************************/

import { IconName } from '@common';

const HomeStack = createStackNavigator({
    Home: Home,
});

const SettingStack = createStackNavigator({
    Settings: Settings,
});

const TabStack = createBottomTabNavigator(
    {
        HomeStack: HomeStack,
        SearchStack: HomeStack,
        CartStack: HomeStack,
        SettingsStack: SettingStack,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                
                const { routeName } = navigation.state;
                
                let iconName;
                
                switch(routeName) {
                    case 'HomeStack':
                        iconName = IconName.HOME; 
                        break;
                    case 'SearchStack':
                        iconName = IconName.SEARCH;    
                        break;
                    case 'CartStack':
                        iconName = IconName.CART;    
                        break;
                    case 'SettingsStack':
                        iconName = IconName.SETTINGS;
                        break;
                    default:
                        break;
                }
    
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),

        tabBarOptions: {
            activeTintColor: 'tomato',
            activeBackgroundColor: 'transparent',
            inactiveTintColor: 'gray',
            inactiveBackgroundColor: 'transparent',
            showLabel: false,
            style: {
                backgroundColor: 'white',
                // borderTopColor: 'transparent',
            },
            // labelStyle: {
                //fontSize: 12,
            //},
            tabStyle: {},
        },
    }
);

const AuthStack = createStackNavigator({
    SignIn: SignIn,
    SignUp: SignUp,
    TermsConditionsWelcome: TermsConditionsWelcome,
    TermsConditionsWelcome2: TermsConditionsWelcome2,
});

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Home: TabStack,
        Auth: AuthStack,
    },{
        initialRouteName: 'AuthLoading',
        /* The header config */
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const AppNav = AppNavigator(SwitchNavigator);

const Routes = () => {
    return(
        <Provider store={store}>
            <AppNav />
        </Provider>
    )
}

export default Routes;
