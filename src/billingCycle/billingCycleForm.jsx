import React, {Component} from "react";
import { reduxForm, Field } from 'redux-form';

import LabelInput from "../common/form/labelInput";

class BillingCycleForm extends Component {

    render(){

        const {handleSubmit} = this.props;


        return(

            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabelInput} label='Nome'
                    cols='12 4' placeholder="Informe o nome" ></Field>
                    <Field name='month' component={LabelInput} label='Mês'
                    cols='12 4' placeholder='Informe o mês' type='number'></Field>
                    <Field name='year' component={LabelInput} label='Ano'
                    cols='12 4' placeholder="Informe o ano" type='number'></Field>
                </div>
                <div className="box-footer">
                    <button type='submit' className="btn btn-primary">Submit</button>
                </div>
            </form>

        )

    }
    
}

export default reduxForm({

    form: 'billingCycleForm'

})(BillingCycleForm)