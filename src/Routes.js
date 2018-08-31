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
} from '@containers';

/*
 * REACT NAVIGATION
 */
import { 
    createSwitchNavigator, 
    createStackNavigator, 
    createBottomTabNavigator,
} from 'react-navigation';

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
            inactiveTintColor: 'gray',
        },
    }
);

const AuthStack = createStackNavigator({
    SignIn: SignIn,
    SignUp: SignUp,
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

const Routes = () => {
    return(
        <Provider store={store}>
            <SwitchNavigator />
        </Provider>
    )
}

export default Routes;
