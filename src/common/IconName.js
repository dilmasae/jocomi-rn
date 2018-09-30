import { Platform } from 'react-native';

export default {
    HOME: Platform.OS === 'ios' ? 'ios-home' : 'ios-home',
    SEARCH: Platform.OS === 'ios' ? 'ios-search' : 'ios-search',
    CART: Platform.OS === 'ios' ? 'ios-cart' : 'ios-cart',
    SETTINGS: Platform.OS === 'ios' ? 'ios-settings' : 'ios-settings',
    BUSINESS: Platform.OS === 'ios' ? 'business' : 'business',
    CHEVRON_RIGHT: Platform.OS === 'ios' ? 'chevron-right' : 'chevron-right',
    PASSWORD: Platform.OS === 'ios' ? 'vpn-key' : 'vpn-key',
    PHONE: Platform.OS === 'ios' ? 'phone-android' : 'phone-android',
    USER: Platform.OS === 'ios' ? 'person' : 'person',
}