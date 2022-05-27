import React, {Component} from "react";
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LabelInput from "../common/form/labelInput";
import ItemList from "./itemList";
import Summary from "./summary";

import { init } from './billingCycleActions'

class BillingCycleForm extends Component {

    calcSum(){

        let sum = (t, v) => t + v
        return {

            sumCred: this.props.credits.map(credit=>+credit.value || 0).reduce(sum),
            sumDeb: this.props.debits.map(debit=>+debit.value || 0).reduce(sum)

        }

    }

    render(){

        const {handleSubmit, readOnly, credits, debits} = this.props;
        const {sumCred, sumDeb} = this.calcSum()

        return(

            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabelInput} label='Nome'
                    cols='12 4' placeholder="Informe o nome" readOnly={readOnly}></Field>
                    <Field name='month' component={LabelInput} label='Mês'
                    cols='12 4' placeholder='Informe o mês' type='number' readOnly={readOnly}></Field>
                    <Field name='year' component={LabelInput} label='Ano'
                    cols='12 4' placeholder="Informe o ano" type='number' readOnly={readOnly}></Field>
                    <Summary credit={sumCred.toFixed(2)} debit={sumDeb.toFixed(2)}></Summary>
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos'></ItemList>
                    <ItemList cols='12 6' list={debits} readOnly={readOnly} field='debits' legend='Débitos' showStatus={true}></ItemList>
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

const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
    
    credits: selector(state, 'credits'),
    debits: selector(state, 'debits')

})

const mapDispatchToProps = dispatch => bindActionCreators({

    init

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)