import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from "../common/tab/tabActions";
import BillingCycles from './billingCycle';

const BASE_URL = 'http://localhost:3000/api';
const INITIAL_VALUES = {

    credits:[{}]

}

export function getList(){

    let request = axios.get(`${BASE_URL}/billingCycles`);
    return{

        type: 'BILLING_CYCLES_FETCHED',
        payload: request

    }

}

function submit(values, method){

    return dispatch=>{

        let id = values._id ? values._id : '';

        axios[method](`${BASE_URL}/billingCycles/${id}`, values).then(resp=>{

            toastr.success('Sucesso', 'Operação realizada com sucesso!');
            dispatch(init());
    
        }).catch(e=>{

            e.response.data.errors.forEach(error=>{
    
                toastr.error('Erro', error)
    
            })
    
        }) 

    }    

}

export function createData(values){

    return submit(values, 'post')

}

export function updateData(values){

    return submit(values, 'put')

}

export function deleteData(values){

    return submit(values, 'delete')

}

function showTab(tab, billingCycle){

    return [

        showTabs(tab),
        selectTab(tab),
        initialize('billingCycleForm', billingCycle)

    ]

}

export function showUpdate(billingCycle){

    return showTab('tabUpdate', billingCycle)

}

export function showDelete(billingCycle){

    return showTab('tabDelete', billingCycle)

}

export function init(){

    return [

        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)

    ]

}

