import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm } from 'redux-form';
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = 'http://localhost:3000/api';

export function getList(){

    let request = axios.get(`${BASE_URL}/billingCycles`);
    return{

        type: 'BILLING_CYCLES_FETCHED',
        payload: request

    }

}

export function createData(values){

    return dispatch=>{

        axios.post(`${BASE_URL}/billingCycles`, values).then(resp=>{

            toastr.success('Sucesso', 'Operação realizada com sucesso!');
            dispatch([

                resetForm('billingCycleForm'),
                getList(),
                selectTab('tabList'),
                showTabs('tabList', 'tabCreate')

            ])//Esse dispatch só recebe um Array por conta do Redux-Multi
    
        }).catch(e=>{
    
            e.response.data.errors.forEach(error=>{
    
                toastr.error('Erro', error)
    
            })
    
        }) 

    }

    

}