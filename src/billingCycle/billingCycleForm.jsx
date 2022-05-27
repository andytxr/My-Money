import React, {Component} from "react";
import { reduxForm, Field } from 'redux-form';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LabelInput from "../common/form/labelInput";
import { init } from './billingCycleActions'

class BillingCycleForm extends Component {

    render(){

        const {handleSubmit, readOnly} = this.props;


        return(

            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabelInput} label='Nome'
                    cols='12 4' placeholder="Informe o nome" readOnly={readOnly}></Field>
                    <Field name='month' component={LabelInput} label='Mês'
                    cols='12 4' placeholder='Informe o mês' type='number' readOnly={readOnly}></Field>
                    <Field name='year' component={LabelInput} label='Ano'
                    cols='12 4' placeholder="Informe o ano" type='number' readOnly={readOnly}></Field>
                </div>
                <div className="box-footer">
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>

        )

    }
    
}

BillingCycleForm = reduxForm({

    form: 'billingCycleForm',
    destroyOnUnmount: false

})(BillingCycleForm)

const mapDispatchToProps = dispatch => bindActionCreators({

    init

}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycleForm)