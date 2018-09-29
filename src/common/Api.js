import axios from 'axios';
import { Constant } from '@common';
import * as actionCreators from '@actions';

export default class Api {

    constructor(token, type = '') {

        let options = {
            baseURL: Constant.URL,
            timeout: 30000,
            headers: {'Authorization': 'Bearer ' + token}
        }

        if(type === Constant.MULTIPART_FORM_DATA) {
            options.config = { headers: {'Content-Type': Constant.MULTIPART_FORM_DATA }}
        }

        this.axios = axios.create(options);

        /*
         * Error Handling
         */
        this.axios.interceptors.response.use((response) => response, (error) => {
            switch(error.response.status) {
                case 401:
                    //TODO:
                    // store.dispatch(actionCreators.log_out())
                    break;
                case 404:
                    console.warn("404");
                    break;
                default:
                    console.warn("GENERIC ERROR");
                    break;
            }
        });
    }

    login(idCard, password) {
        return this.axios.post(`/auth/login`, {
            email: idCard,
            password: password
        });
    }

}
