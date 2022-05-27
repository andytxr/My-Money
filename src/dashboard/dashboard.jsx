import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from "./dashboardActions";
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component{

    componentWillMount(){

        this.props.getSummary();

    }

    render(){

        let {credit, debit} = this.props.summary;

        return(

            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'></ContentHeader>
                <Row>
                    <Content>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit.toFixed(2)}`} text='Total de Créditos'></ValueBox>
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debit.toFixed(2)}`} text='Total de Débitos'></ValueBox>
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${(credit-debit).toFixed(2)}`} text='Valor Consolidado'></ValueBox>
                    </Content>
                </Row>
            </div>

        )

    }

}

const mapStateToProps = state => ({

    summary: state.dashboard.summary

})

const mapDispatchToProps = dispatch => bindActionCreators({
    
    getSummary

}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)