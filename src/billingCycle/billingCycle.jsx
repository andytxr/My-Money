import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import TabHeader from '../common/tab/tabHeader';
import TabsHeader from "../common/tab/tabsHeader";
import Tabs from "../common/tab/tabs";
import TabContent from "../common/tab/tabContent";
import TabsContent from "../common/tab/tabsContent";
import List from "./billingCycleList";
import Form from './billingCycleForm';

import { init, createData, updateData, deleteData } from './billingCycleActions';

class BillingCycles extends Component{

    componentWillMount(){

        this.props.init()

    }

    render(){

        return(

            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro"></ContentHeader>
                <Content>

                    <Tabs>
                        <TabsHeader>    
                            <TabHeader label='Listar' icon='bars' target='tabList'></TabHeader>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'></TabHeader>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'></TabHeader>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'></TabHeader>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List></List>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.createData} submitLabel='Incluir' submitClass='primary'></Form>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.updateData} submitLabel='Alterar' submitClass='info'></Form>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.deleteData} readOnly={true} submitLabel='Excluir' submitClass='danger'></Form>
                            </TabContent>
                        </TabsContent>
                    </Tabs>

                </Content>
            </div>

        )

    }

}

const mapDispatchToProps = dispatch => bindActionCreators({

    init,createData, updateData, deleteData

}, dispatch)

export default connect(null,mapDispatchToProps)(BillingCycles)