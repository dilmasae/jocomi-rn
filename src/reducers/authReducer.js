import * as actionType from '../actions/types';

const INITIAL_STATE = {
    token: null,
    user: {
        name: 'JOHN DOE'
    },
    rol: null,
    loading: false,
    push_notification: null,
    terms: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        
        case actionType.AUTH_LOGIN:
            const {access_token, expires_in, rol, user} = action.payload;

            return {
                ...state,
                token: access_token,
                user,
                rol,
                loading: false,
            }

        case actionType.LOG_OUT:
            return {
                ...INITIAL_STATE,
            }

        case actionType.AUTH_CHANGE_VALUE:
            const {key, value} = action.payload;
            return {
                ...state,
                [key]: value,
            }

        default:
            return state;
            
    }
}
