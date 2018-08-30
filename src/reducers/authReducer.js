import * as actionType from '../actions/type';

const INITIAL_STATE = {
    token: null,
    user: {
        name: 'JOHN DOE'
    },
    loading: false,
    push_notification: null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case '':
            return {
                ...state,
            }
        default:
            return state;
    }
}
