import axios from "axios";

const BASE_URL = 'http://localhost:3000/api';

export function getList(){

    let request = axios.get(`${BASE_URL}/billingCycles`);
    return{

        type: 'BILLING_CYCLES_FETCHED',
        payload: request

    }

}