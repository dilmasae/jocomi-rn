const isDev = __DEV__;

const URL = isDev ? 'https://jocomi-test.herokuapp.com/api/v1' : 'https://jocomi-test.herokuapp.com/api/v1';

const Constant = {
    URL,
    HEADER_TITLE: 'Jocomi',
}

export default Constant;