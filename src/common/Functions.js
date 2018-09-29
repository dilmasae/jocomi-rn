export default {

    changeActionValue: (type, key, value) => {
        return {
            type,
            payload: {
                key,
                value
            }
        }
    },

    changeReducerValue: (state, action) => {
        const {key, value} = action.payload;
        
        return {
            ...state,
            [key]: value,
        }
    },

    searchByName: (DATA = [], q = '') => {
        return DATA.filter(item => {
            const TITLE = item.title ? item.title.rendered : '';
            return TITLE.toLowerCase().search(q.toLowerCase()) !== -1;
        })
    }

}