const isDev = __DEV__;

const URL = isDev ? 'https://www.jocomi-api.herokuapp.com' : 'https://www.jocomi-api.herokuapp.com';

const Constant = {
    URL,
    HEADER_TITLE: 'Jocomi',
}

export default Constant;