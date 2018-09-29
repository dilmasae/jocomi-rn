import * as actionType from './types';
import {Api, Functions} from '@common';
import { Actions } from 'react-native-navigation-actions';

export const auth_login = ({idCard, password}) => {
    return (dispatch) => {

        dispatch(Functions.changeActionValue(actionType.AUTH_CHANGE_VALUE, 'loading', true));

        new Api().login(idCard, password).then(({data}) => {
            dispatch(auth_login_success(data));
            Actions.navigate('TermsConditionsWelcome');
        }).catch(error => {
            //TODO: translate
            alert("Invalid Credentials");
            dispatch(Functions.changeActionValue(actionType.AUTH_CHANGE_VALUE, 'loading', false));
        });

    }
}

export const auth_login_success = (payload) => {
    return {
        type: actionType.AUTH_LOGIN,
        payload: payload
    }
}

export const log_out = () => {
    return (dispatch) => {

        dispatch(kick_out());
        Actions.navigate('Auth');

    }
}

export const kick_out = () => {
    return {
        type: actionType.LOG_OUT
    }
}

export const accept_terms = () => {
    return (dispatch) => {

        dispatch(Functions.changeActionValue(actionType.AUTH_CHANGE_VALUE, 'terms', true));
        Actions.navigate('HomeStack');

    }
}