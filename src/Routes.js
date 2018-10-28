import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { AddButton } from '@components';
import { Color } from '@common';

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
    NavigationActions,
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
        HomeStack: {
            screen: HomeStack,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => (
                    <Ionicons name={IconName.HOME} size={24} color={tintColor} />
                )
            })
        },
        SearchStack: {
            screen: HomeStack,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => (
                    <Ionicons name={IconName.SEARCH} size={24} color={tintColor} />
                )
            })
        },
        Adding: {
            screen: () => null,
            navigationOptions: () => ({
                tabBarIcon: <AddButton />
            })
        },
        CartStack: {
            screen: HomeStack,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => (
                    <Ionicons name={IconName.CART} size={24} color={tintColor} />
                )
            })
        },
        SettingsStack: {
            screen: SettingStack,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => (
                    <Ionicons name={IconName.SETTINGS} size={24} color={tintColor} />
                )
            })
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#F8F8F8',
            inactiveTintColor: '#586589',
            activeBackgroundColor: 'transparent',
            inactiveBackgroundColor: 'transparent',
            showLabel: false,
            animationEnabled: true,
            style: {
                backgroundColor: '#212121',
                borderTopColor: '#333',
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

const defaultGetStateForAction = TabStack.router.getStateForAction;

TabStack.router.getStateForAction = (action, state) => {
    if (action.type === NavigationActions.NAVIGATE && action.routeName === 'Adding') {
        return null;
    }

    return defaultGetStateForAction(action, state);
}

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
                backgroundColor: '#171F33',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
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
